import { Helmet } from "react-helmet-async";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";
import Loader from "../components/Loader";
import SectionHeader from "../components/ui/SectionHeader";
import NewsCard from "../components/cards/NewsCard";
import Pagination from "../components/ui/Pagination";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import Hero from "../components/news/Hero";

export default function NewsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pillarParam = searchParams.get("pillar") ?? undefined;
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const pageSize = 9; // Moved pageSize declaration here

  const { data, isLoading } = useGetPublicPostsQuery(
    pillarParam
      ? { pillar: pillarParam, page, perPage: pageSize, postType: "news" }
      : { page, perPage: pageSize, postType: "news" }
  );
  const items = data?.data ?? [];
  const meta = data?.meta;
  const pillarLabels: Record<string, string> = {
    unknown: "All Pillars",
    health_employment: "Health Employment",
    health_entrepreneurship: "Health Entrepreneurship",
    health_ecosystems: "Health Ecosystems",
  };

  const activePillarLabel = pillarParam
    ? pillarLabels[pillarParam] ??
      pillarParam
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : null;

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("page", "1");
      return prev;
    });
  }, [pillarParam, setSearchParams]);

  // const filtered = useMemo(() => {
  //   const q = search.trim().toLowerCase()
  //   if (!q) return items
  //   return items.filter((n: any) => {
  //     const title = (n.title ?? '').toLowerCase()
  //     const content = (n.content ?? '').replace(/<[^>]+>/g, '').toLowerCase()
  //     return title.includes(q) || content.includes(q)
  //   })
  // }, [items, search])

  const current = items.filter(
    (item) => item.post_type?.toLowerCase() === "news"
  );
  const totalVisible = current.length;
  const paginationTotal = meta?.total ?? totalVisible;

  const onPageChange = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set("page", String(newPage));
      return prev;
    });
  };

  return (
    <>
      <Helmet>
        <title>News – AHC</title>
      </Helmet>
      <Hero />
      <div className="container py-16 md:py-24">
        <div className="mb-8 flex items-center justify-between gap-4">
          {/* <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          placeholder="Search news..."
          className="w-full md:w-80 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-full px-5 py-3 focus:ring-ahc-green focus:border-ahc-green transition-colors"
        /> */}
          <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {totalVisible} result{totalVisible === 1 ? "" : "s"}
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : totalVisible === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg font-semibold">No news found.</p>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Try adjusting your search or check back later.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-3">
              {current.map((n: any) => {
                const firstImgMatch = (n.content ?? "").match(
                  /<img[^>]+src=["']([^"']+)["']/i
                );
                const galleryFirst =
                  n.gallery && Array.isArray(n.gallery) && n.gallery.length > 0
                    ? n.gallery[0].original || n.gallery[0].url
                    : "";
                const imgUrl =
                  n.featured_image ||
                  galleryFirst ||
                  (firstImgMatch ? firstImgMatch[1] : "");
                return (
                  <Link
                    key={n.id}
                    to={`/news/${n.id}`}
                    className="group bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={n.title}
                        className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700" />
                    )}
                    <div className="p-6">
                      {n.published_at && (
                        <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {dayjs(n.published_at).format("MMM DD, YYYY")}
                        </div>
                      )}
                      <h3 className="mt-2 text-lg font-bold font-display group-hover:text-ahc-green-dark transition-colors">
                        {n.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                        {n.excerpt ??
                          (n.content ?? "")
                            .replace(/<[^>]+>/g, "")
                            .slice(0, 160)}
                      </p>
                      <span className="mt-4 inline-block text-sm font-medium text-ahc-green-dark group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Pagination
              page={page}
              total={paginationTotal}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </>
  );
}
