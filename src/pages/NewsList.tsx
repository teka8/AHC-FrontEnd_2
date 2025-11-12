import { Helmet } from "react-helmet-async";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";
import Loader from "../components/Loader";
import SectionHeader from "../components/ui/SectionHeader";
import NewsCard from "../components/cards/NewsCard";
import Pagination from "../components/ui/Pagination";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

export default function NewsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pillarParam = searchParams.get("pillar") ?? undefined;
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const { data, isLoading } = useGetPublicPostsQuery(
    pillarParam ? { pillar: pillarParam, page, perPage: pageSize } : { page, perPage: pageSize }
  );
  const items = data?.data ?? [];
  const meta = data?.meta;

  //const [search, setSearch] = useState('')
  const pageSize = 9;
  const pillarLabels: Record<string, string> = {
    unknown: "All Pillars",
    health_employment: "Health Employment",
    health_entrepreneurship: "Health Entrepreneurship",
    health_ecosystems: "Health Ecosystems",
  };

  const activePillarLabel = pillarParam
    ? pillarLabels[pillarParam] ?? pillarParam.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
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

  const total = meta?.total ?? 0;
  const current = items;

  const onPageChange = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set("page", String(newPage));
      return prev;
    });
  };

  return (
    <div className="container py-16 md:py-24">
      <Helmet>
        <title>News – AHC</title>
      </Helmet>
      <SectionHeader eyebrow="Updates" title="All News" />
      <div className="mb-8 flex items-center justify-between gap-4">
        {/* <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          placeholder="Search news..."
          className="w-full md:w-80 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-full px-5 py-3 focus:ring-ahc-green focus:border-ahc-green transition-colors"
        /> */}
        <div className="flex flex-col items-end text-right text-sm text-slate-500 dark:text-slate-400">
          {activePillarLabel && (
            <span className="mb-1 inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-300">
              {activePillarLabel}
            </span>
          )}
          <span>
            {total} result{total === 1 ? "" : "s"}
          </span>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : total === 0 ? (
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
                        (n.content ?? "").replace(/<[^>]+>/g, "").slice(0, 160)}
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
            total={total}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}
