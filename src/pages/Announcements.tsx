import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import type { PostItem } from "../features/posts/postsApi";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";
import Loader from "../components/Loader";
import Pagination from "../components/ui/Pagination";
import Hero from "../components/announcements/Hero";

const UNCATEGORIZED_CATEGORY = {
  id: -1,
  name: "Uncategorized",
  slug: "uncategorized",
};

export default function Announcements() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const pageSize = 9;

  const { data, isLoading } = useGetPublicPostsQuery({
    page,
    perPage: pageSize,
    postType: "announcement",
  });

  const items = data?.data ?? [];
  const meta = data?.meta;
  const apiCategories = Array.isArray(data?.filters?.categories)
    ? data.filters.categories
    : [];

  const announcements = useMemo(
    () =>
      items.filter((item) => item.post_type?.toLowerCase() === "announcement"),
    [items]
  );

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
    const prepared = [...baseCategories];
    if (
      hasUncategorized &&
      !prepared.some((cat) => cat.slug === UNCATEGORIZED_CATEGORY.slug)
    ) {
      prepared.push(UNCATEGORIZED_CATEGORY);
    }

    return prepared;
  }, [baseCategories, hasUncategorized]);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

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
  }, [announcements, categories]);

  const filteredItems = useMemo(() => {
    const baseItems =
      selectedCategory === "all"
        ? announcements
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

    const extractTimestamp = (item: PostItem) => {
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
  }, [announcements, postsByCategory, selectedCategory, searchTerm]);

  const totalVisible = filteredItems.length;
  const paginationTotal = meta?.total ?? announcements.length;
  const hasSearchQuery = searchTerm.trim().length > 0;

  const sidebarItems = useMemo(() => {
    if (filteredItems.length > 0) {
      return filteredItems.slice(0, 5);
    }

    return announcements.slice(0, 5);
  }, [announcements, filteredItems]);

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

      <div className="container py-16 md:py-24">
        <div className="mb-10 space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {hasSearchQuery ? "Found" : "Showing"} {totalVisible} announcement
              {totalVisible === 1 ? "" : "s"}
            </div>
            <div className="hidden flex-wrap items-center gap-4 md:flex">
              <CategoryTab
                label="All Announcements"
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
              Select announcements
            </label>
            <div className="relative">
              <select
                id="announcement-category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full appearance-none rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition focus:border-ahc-green-dark focus:outline-none focus:ring-2 focus:ring-ahc-green-dark/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <option value="all">All Announcements</option>
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
              {hasSearchQuery
                ? "No announcements match your search."
                : "No announcements yet."}
            </p>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              {hasSearchQuery
                ? "Try adjusting your keywords or explore another category."
                : "Check back soon for the latest updates from the collective."}
            </p>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <AnnouncementListItem key={item.id} item={item} />
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

function AnnouncementListItem({ item }: { item: PostItem }) {
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

  return (
    <Link
      to={`/announcement/${item.id}`}
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

function AnnouncementHighlights({ items }: { items: PostItem[] }) {
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

          return (
            <Link
              key={item.id}
              to={`/announcement/${item.id}`}
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
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="email"
          required
          placeholder="Email address"
          className="w-full rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium text-white placeholder-white/70 backdrop-blur focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-ahc-green-dark transition hover:bg-white/90"
        >
          Notify me
        </button>
      </form>
    </div>
  );
}
