import React from 'react'
import { Link } from 'react-router-dom'
import { useGetPublicPostsQuery } from '../../features/posts/postsApi'

type PillarNewsSectionProps = {
  pillar: string
  title: string
  description?: string
  limit?: number
  ctaHref?: string
  ctaLabel?: string
  backgroundClassName?: string
}

const DEFAULT_BACKGROUND =
  'bg-gradient-to-br from-ahc-green/10 via-transparent to-emerald-50 dark:from-[#0f1729] dark:via-[#111827] dark:to-[#020617]'

export default function PillarNewsSection({
  pillar,
  title,
  description,
  limit = 3,
  ctaHref,
  ctaLabel = 'See all news',
  backgroundClassName = DEFAULT_BACKGROUND,
}: PillarNewsSectionProps) {
  const { data, isLoading, isError } = useGetPublicPostsQuery({ perPage: limit, pillar })
  const items = Array.isArray(data?.data) ? data.data.slice(0, limit) : []
  const resolvedCtaHref = ctaHref ?? `/news?pillar=${encodeURIComponent(pillar)}`

  return (
    <section className={`relative overflow-hidden py-20 ${backgroundClassName} mb-20`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-ahc-green/20 blur-3xl dark:bg-ahc-green/10" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(16,185,129,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.35) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-ahc-green-dark dark:text-ahc-green-light/80">
              Pillar News
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
            {description && (
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {description}
              </p>
            )}
          </div>

          <Link
            to={resolvedCtaHref}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-ahc-green hover:bg-white/80 hover:text-ahc-green-dark dark:border-slate-700 dark:text-slate-200 dark:hover:border-ahc-green-light/60 dark:hover:bg-slate-900"
          >
            {ctaLabel}
          </Link>
        </div>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: limit }).map((_, index) => (
              <div key={index} className="h-64 animate-pulse rounded-2xl bg-white/60 shadow-lg dark:bg-slate-800/60" />
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-red-200 bg-white/70 p-8 text-center text-sm text-red-600 shadow-lg dark:border-red-900/40 dark:bg-slate-900/80 dark:text-red-300">
            Unable to load news for this pillar. Please try again later.
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-8 text-center text-sm text-slate-600 shadow-lg dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
            No news has been published for this pillar yet. Please check back soon.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => {
              const imageFromContent = (item.content ?? '').match(/<img[^>]+src=['\"]([^'\"]+)['\"]/i)
              const imageUrl = item.featured_image || (imageFromContent ? imageFromContent[1] : '')

              const excerpt = item.excerpt ?? (item.content ?? '').replace(/<[^>]+>/g, '').slice(0, 180)

              return (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900/70"
                >
                  {imageUrl ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {(item.pillar_labels ?? []).map((label) => (
                          <span
                            key={label}
                            className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ahc-green-dark shadow dark:bg-slate-800/90 dark:text-ahc-green-light"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-ahc-green/30 to-emerald-300/30" />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {item.published_at && (
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                        {new Date(item.published_at).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                    <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-ahc-green-dark dark:text-white dark:group-hover:text-ahc-green-light">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm text-slate-600 dark:text-slate-300">
                      {excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-ahc-green-dark transition-colors group-hover:text-ahc-green dark:text-ahc-green-light">
                      Read update
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
