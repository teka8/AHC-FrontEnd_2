import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import type { PostItem } from "../features/posts/postsApi";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";
import { useGetScholarshipsQuery } from "../features/scholarship/scholarshipsApi";
import type { Scholarship } from "../features/scholarship/types";
import { useSubscribeMutation } from "../features/subscriptions/subscriptionApi";
import Loader from "../components/Loader";
import Pagination from "../components/ui/Pagination";
import Hero from "../components/announcements/Hero";

const UNCATEGORIZED_CATEGORY = {
  id: -1,
  name: "Uncategorized",
  slug: "uncategorized",
};

const SCHOLARSHIP_CATEGORY = {
  id: -2,
  name: "Scholarships",
  slug: "scholarships",
};

export default function Announcements() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const pageSize = 9;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: postsData, isLoading: isLoadingPosts } = useGetPublicPostsQuery({
    page,
    perPage: pageSize,
    postType: "announcement",
    category: selectedCategory === "all" ? undefined : selectedCategory,
    search: searchTerm.trim() || undefined,
  });

  const { data: scholarshipsData, isLoading: isLoadingScholarships } = useGetScholarshipsQuery();

  const apiCategories = Array.isArray(postsData?.filters?.categories)
    ? postsData.filters.categories
    : [];

  const postsMeta = postsData?.meta;

  // Remove duplicate declarations - use these instead
  const announcements = useMemo(
    () =>
      (postsData?.data ?? []).filter((item) => item.post_type?.toLowerCase() === "announcement"),
    [postsData]
  );

  const scholarships = useMemo(() => (scholarshipsData ?? []).map((s: Scholarship): CombinedItem => ({
    ...s,
    post_type: 'scholarship' as const,
    id: s.id,
    title: s.title,
    slug: s.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    excerpt: s.eligibility_criteria,
    content: s.description,
    published_at: s.deadline, // Using deadline for sorting purposes
    terms: [{ id: SCHOLARSHIP_CATEGORY.id, name: SCHOLARSHIP_CATEGORY.name, slug: SCHOLARSHIP_CATEGORY.slug, taxonomy: 'category' }]
  })), [scholarshipsData]);

  const combinedItems = useMemo(() => [...announcements, ...scholarships], [announcements, scholarships]);

  const derivedCategories = useMemo(() => {
    const seen = new Map<string, { id: number; name: string; slug: string }>();
    announcements.forEach((item) => {
      (item.terms ?? [])
        .filter((term) => (term.taxonomy ?? "").toLowerCase() === "category")
        .forEach((term) => {
          if (!seen.has(term.slug)) {
            seen.set(term.slug, {
              id: term.id,
              name: term.name,
              slug: term.slug,
            });
          }
        });
    });

    return Array.from(seen.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [announcements]);

  const baseCategories =
    apiCategories.length > 0 ? apiCategories : derivedCategories;

  const hasUncategorized = useMemo(
    () =>
      announcements.some(
        (item) =>
          (item.terms ?? []).filter(
            (term) => (term.taxonomy ?? "").toLowerCase() === "category"
          ).length === 0
      ),
    [announcements]
  );

  const categories = useMemo(() => {
    const prepared = [...baseCategories, SCHOLARSHIP_CATEGORY];
    if (
      hasUncategorized &&
      !prepared.some((cat) => cat.slug === UNCATEGORIZED_CATEGORY.slug)
    ) {
      prepared.push(UNCATEGORIZED_CATEGORY);
    }

    return prepared;
  }, [baseCategories, hasUncategorized]);

  useEffect(() => {
    if (selectedCategory === "all") {
      return;
    }

    if (!categories.some((cat) => cat.slug === selectedCategory)) {
      setSelectedCategory("all");
    }
  }, [categories, selectedCategory]);

  const postsByCategory = useMemo(() => {
    const collection = new Map<string, PostItem[]>();

    categories.forEach((category) => {
      collection.set(category.slug, []);
    });
    
    collection.set(SCHOLARSHIP_CATEGORY.slug, scholarships);

    const append = (slug: string, item: PostItem) => {
      if (!collection.has(slug)) {
        collection.set(slug, []);
      }
      collection.get(slug)!.push(item);
    };

    announcements.forEach((item) => {
      const slugs = (item.terms ?? [])
        .filter((term) => (term.taxonomy ?? "").toLowerCase() === "category")
        .map((term) => term.slug);

      if (slugs.length === 0) {
        append(UNCATEGORIZED_CATEGORY.slug, item);
      } else {
        slugs.forEach((slug) => append(slug, item));
      }
    });

    return collection;
  }, [announcements, scholarships, categories]);

  const filteredItems = useMemo(() => {
    const baseItems =
      selectedCategory === "all"
        ? combinedItems
        : postsByCategory.get(selectedCategory) ?? [];

    const normalizedQuery = searchTerm.trim().toLowerCase();

    const filteredBySearch =
      normalizedQuery.length === 0
        ? baseItems
        : baseItems.filter((item) => {
            const title = (item.title ?? "").toLowerCase();
            const excerpt = (item.excerpt ?? "").toLowerCase();
            const content = (item.content ?? "")
              .replace(/<[^>]+>/g, " ")
              .toLowerCase();

            return (
              title.includes(normalizedQuery) ||
              excerpt.includes(normalizedQuery) ||
              content.includes(normalizedQuery)
            );
          });

  const extractTimestamp = (item: CombinedItem) => {
    if (item.published_at) {
      return dayjs(item.published_at).valueOf();
    }
    return 0;
  };

    return [...filteredBySearch].sort((a, b) => {
      const diff = extractTimestamp(b) - extractTimestamp(a);
      if (diff !== 0) {
        return diff;
      }

      return b.id - a.id;
    });
  }, [combinedItems, postsByCategory, selectedCategory, searchTerm]);

  const isLoading = isLoadingPosts || isLoadingScholarships;
  // Remove unused variables
  // const postsAnnouncements = postsData?.data ?? [];
  // const apiMeta = postsData?.meta;
  
  // Use server-side pagination for announcements only
  const totalVisible = (postsMeta?.total ?? 0) + scholarships.length;
  
  // For scholarships, keep them client-side but don't mix with server pagination
  const filteredScholarships: CombinedItem[] = scholarships.filter((scholarship: CombinedItem) => {
    if (selectedCategory !== "all" && selectedCategory !== SCHOLARSHIP_CATEGORY.slug) {
      return false;
    }
    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      return scholarship.title.toLowerCase().includes(query) ||
             (scholarship.excerpt && scholarship.excerpt.toLowerCase().includes(query)) ||
             (scholarship.content && scholarship.content.toLowerCase().includes(query));
    }
    return true;
  });
  
  // Simplified pagination logic
  const displayItems = selectedCategory === SCHOLARSHIP_CATEGORY.slug ? 
      filteredScholarships : 
      selectedCategory === "all" ? 
      [...announcements, ...filteredScholarships] : 
      announcements;
      
  const paginationTotal = selectedCategory === SCHOLARSHIP_CATEGORY.slug ? 
      filteredScholarships.length : 
      selectedCategory === "all" ? 
      totalVisible : 
      postsMeta?.total ?? 0;
  
  // Always use client-side pagination for consistency
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = displayItems.slice(startIndex, endIndex);

  const sidebarItems = useMemo(() => {
    if (displayItems.length > 0) {
      return displayItems.slice(0, 5);
    }
    return [];
  }, [displayItems]);

  const onPageChange = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set("page", String(newPage));
      return prev;
    });
  };

  return (
    <>
      <Helmet>
        <title>Announcements – AHC</title>
        <meta
          name="description"
          content="Stay updated with the latest announcements from the Africa Health Collaborative (AHC). Explore news, events, and important updates that drive our mission to strengthen primary healthcare across Africa."
        />
        <meta
          name="keywords"
          content="AHC Announcements, Africa Health Collaborative News, AHC Updates, Health Initiatives, African Healthcare News, AHC Events"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta property="og:title" content="AHC Announcements" />
        <meta
          property="og:description"
          content="Stay updated with the latest announcements from the Africa Health Collaborative (AHC). Explore news, events, and important updates that drive our mission to strengthen primary healthcare across Africa."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ahc.tewostechsolutions.com/announcement"
        />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AHC Announcements" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest announcements from the Africa Health Collaborative (AHC). Explore news, events, and important updates that drive our mission to strengthen primary healthcare across Africa."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <Hero search={searchTerm} setSearch={setSearchTerm} />

      <section className="bg-white dark:bg-slate-900">
        <div className="container py-12 md:py-16">
        <div className="mb-10 space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {totalVisible} item{totalVisible === 1 ? "" : "s"}
            </div>
            <div className="hidden flex-wrap items-center gap-4 md:flex">
              <CategoryTab
                label="All"
                active={selectedCategory === "all"}
                onClick={() => setSelectedCategory("all")}
              />
              {categories.map((category) => (
                <CategoryTab
                  key={category.slug}
                  label={category.name}
                  active={selectedCategory === category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <label
              htmlFor="announcement-category"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
            >
              Select Category
            </label>
            <div className="relative">
              <select
                id="announcement-category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full appearance-none rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition focus:border-ahc-green-dark focus:outline-none focus:ring-2 focus:ring-ahc-green-dark/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <option value="all">All</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                ▾
              </span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader />
          </div>
        ) : totalVisible === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 py-16 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800/70">
            <p className="text-lg font-semibold text-ahc-dark dark:text-white">
              {searchTerm.trim()
                ? "No items match your search."
                : "No items found."}
            </p>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              {searchTerm.trim()
                ? "Try adjusting your keywords or explore another category."
                : "Check back soon for the latest updates."}
            </p>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-6">
              {paginatedItems.map((item) => (
                <AnnouncementListItem key={`${item.post_type}-${item.id}`} item={item} />
              ))}

              <div className="pt-6">
                <Pagination
                  page={page}
                  total={paginationTotal}
                  pageSize={pageSize}
                  onPageChange={onPageChange}
                />
              </div>
            </div>

            <aside className="space-y-6">
              <AnnouncementHighlights items={sidebarItems} />
              <NewsletterInvite />
            </aside>
          </div>
        )}
        </div>
      </section>
    </>
  );
}

function CategoryTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green-dark/40 ${
        active
          ? "text-ahc-green-dark after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-ahc-green-dark after:content-[''] dark:text-ahc-green-light"
          : "text-slate-500 hover:text-ahc-green-dark dark:text-slate-400 dark:hover:text-ahc-green-light"
      }`}
    >
      {label}
    </button>
  );
}

type CombinedItem = PostItem | (Scholarship & { 
  post_type: 'scholarship';
  slug: string;
  excerpt: string;
  content: string;
  published_at: string;
  terms: Array<{ id: number; name: string; slug: string; taxonomy: string }>;
});

function AnnouncementListItem({ item }: { item: CombinedItem }) {
  const publishedAt = item.published_at ? dayjs(item.published_at) : null;
  const displayDate = publishedAt ? publishedAt.format("MMM DD") : "Pending";
  const year = publishedAt ? publishedAt.format("YYYY") : "";
  const excerpt = useMemo(() => {
    if (item.excerpt) {
      return item.excerpt;
    }

    return (item.content ?? "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);
  }, [item.content, item.excerpt]);

  const categories = useMemo(
    () =>
      (item.terms ?? [])
        .filter((term) => (term.taxonomy ?? "").toLowerCase() === "category")
        .map((term) => term.name),
    [item.terms]
  );

  const linkTo = item.post_type === 'scholarship' ? `/scholarship/${item.id}` : `/announcement/${item.id}`;

  return (
    <Link
      to={linkTo}
      className="group block rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-ahc-green-dark hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green-dark/30 dark:border-slate-700 dark:bg-slate-900/90"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="sm:w-36">
          <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
            <span className="inline-flex rounded-full bg-ahc-green-dark/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ahc-green-dark dark:bg-ahc-green-dark/20 dark:text-ahc-green-light">
              {displayDate}
            </span>
            {year && (
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {year}
              </span>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold text-ahc-dark transition group-hover:text-ahc-green-dark dark:text-white dark:group-hover:text-ahc-green-light">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-300">
            {excerpt}
          </p>
          {categories.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {name}
                </span>
              ))}
            </div>
          )}
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-ahc-green-dark transition group-hover:translate-x-1 dark:text-ahc-green-light">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}

function AnnouncementHighlights({ items }: { items: CombinedItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-ahc-green/10 via-white to-white p-6 shadow-sm dark:border-slate-700 dark:from-ahc-green/20 dark:via-slate-900 dark:to-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ahc-green-dark/80 dark:text-ahc-green-light/80">
            Highlights
          </p>
          <h3 className="mt-1 text-lg font-semibold text-ahc-dark dark:text-white">
            Latest spotlights
          </h3>
        </div>
        <Link
          to="/announcement"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-ahc-green-dark transition hover:text-ahc-green-dark/80 dark:text-ahc-green-light"
        >
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          const dateLabel = item.published_at
            ? dayjs(item.published_at).format("MMM DD, YYYY")
            : "Pending";
          const linkTo = item.post_type === 'scholarship' ? `/scholarship/${item.id}` : `/announcement/${item.id}`;

          return (
            <Link
              key={`${item.post_type}-${item.id}`}
              to={linkTo}
              className="group block rounded-xl border border-transparent bg-white/60 p-4 transition hover:border-ahc-green-dark/40 hover:bg-white dark:bg-slate-900/60 dark:hover:border-ahc-green-dark/40"
            >
              <p className="text-sm font-semibold text-ahc-dark transition group-hover:text-ahc-green-dark dark:text-white dark:group-hover:text-ahc-green-light">
                {item.title}
              </p>
              <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {dateLabel}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function NewsletterInvite() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [subscribe, { isLoading }] = useSubscribeMutation();

  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-ahc-green-dark via-ahc-green to-ahc-green-light p-6 text-white shadow-lg">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
          Stay informed
        </p>
        <h3 className="text-2xl font-semibold">Subscribe to our updates</h3>
        <p className="text-sm text-white/80">
          Join our mailing list to receive important announcements, milestones,
          and opportunities directly in your inbox.
        </p>
      </div>
      <form
        className="mt-6 space-y-3"
        onSubmit={async (event) => {
          event.preventDefault();
          setFeedback(null);

          try {
            await subscribe({ email: email.trim(), wants_announcements: true }).unwrap();
            setFeedback({
              type: 'success',
              message: 'Thanks for subscribing! You will hear from us soon.',
            });
            setEmail('');
          } catch (error: any) {
            const message =
              error?.data?.message ??
              (error?.status === 422
                ? 'Please enter a valid email address.'
                : 'We could not complete your subscription right now. Please try again later.');
            setFeedback({ type: 'error', message });
          }
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="w-full rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium text-white placeholder-white/70 backdrop-blur focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-ahc-green-dark transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? 'Subscribing…' : 'Notify me'}
        </button>
        {feedback && (
          <p
            className={`text-sm ${feedback.type === 'success' ? 'text-white' : 'text-red-200'}`}
            role="status"
            aria-live="polite"
          >
            {feedback.message}
          </p>
        )}
      </form>
    </div>
  );
}
