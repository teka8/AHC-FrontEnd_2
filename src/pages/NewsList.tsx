import { Helmet } from 'react-helmet-async'
import { useGetPublicPostsQuery } from '../features/posts/postsApi'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'
import NewsCard from '../components/cards/NewsCard'
import Pagination from '../components/ui/Pagination'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

export default function NewsList() {
  const { data, isLoading } = useGetPublicPostsQuery()
  const items = Array.isArray(data as any) ? (data as any) : []

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 9

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return items
    return items.filter((n: any) => {
      const title = (n.title ?? '').toLowerCase()
      const content = (n.content ?? '').replace(/<[^>]+>/g, '').toLowerCase()
      return title.includes(q) || content.includes(q)
    })
  }, [items, search])

  const total = filtered.length
  const start = (page - 1) * pageSize
  const current = filtered.slice(start, start + pageSize)

  return (
    <div className="container py-10">
      <Helmet><title>News – AHC</title></Helmet>
      <SectionHeader eyebrow="Updates" title="All News" />
      <div className="mb-4 flex items-center justify-between gap-3">
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          placeholder="Search news..."
          className="w-full md:w-72 border rounded-md px-3 py-2"
        />
        <div className="text-sm text-slate-600">{total} result{total === 1 ? '' : 's'}</div>
      </div>
      {isLoading ? (
        <Loader />
      ) : total === 0 ? (
        <div className="text-sm text-slate-600">No news found.</div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-3">
            {current.map((n: any) => {
              const firstImgMatch = (n.content ?? '').match(/<img[^>]+src=["']([^"']+)["']/i)
              const galleryFirst = n.gallery && Array.isArray(n.gallery) && n.gallery.length > 0 ? (n.gallery[0].original || n.gallery[0].url) : ''
              const imgUrl = n.featured_image || galleryFirst || (firstImgMatch ? firstImgMatch[1] : '')
              return (
              <Link key={n.id} to={`/news/${n.id}`} className="group card overflow-hidden hover:shadow-md transition">
                {imgUrl ? (
                  <img src={imgUrl} alt="" className="w-full aspect-[16/9] object-cover" />
                ) : null}
                <div className="p-5">
                  {n.published_at && (
                    <div className="text-xs uppercase tracking-wider text-slate-500">{dayjs(n.published_at).format('MMM DD, YYYY')}</div>
                  )}
                  <h3 className="mt-1 font-semibold group-hover:text-slate-900">{n.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-4">{n.excerpt ?? (n.content ?? '').replace(/<[^>]+>/g, '').slice(0,160)}</p>
                </div>
              </Link>
            )})}
          </div>
          <Pagination page={page} total={total} pageSize={pageSize} onPageChange={setPage} />
        </>
      )}
    </div>
  )
}
