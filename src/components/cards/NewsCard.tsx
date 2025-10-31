import type { PageItem } from '../../features/pages/pagesApi'

export default function NewsCard({ item }: { item: PageItem }) {
  return (
    <a href={`/news/${item.slug}`} className="group card overflow-hidden hover:shadow-md transition">
      <div className="aspect-[16/9] bg-slate-200" />
      <div className="p-5">
        <div className="text-xs uppercase tracking-wider text-ahc-green font-semibold">News</div>
        <h3 className="mt-1 font-semibold group-hover:text-slate-900">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{item.excerpt ?? item.content?.slice(0,160)}</p>
        <span className="mt-3 inline-block text-sm text-slate-700 group-hover:text-ahc-green">Read more →</span>
      </div>
    </a>
  )
}
