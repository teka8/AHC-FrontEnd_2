import type { PageItem } from '../../features/pages/pagesApi'

export default function ResourceCard({ item }: { item: PageItem }) {
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 grid place-content-center">📄</div>
        <div className="min-w-0">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-600 line-clamp-3">{item.excerpt ?? item.content?.slice(0,160)}</p>
          <a href={`/resources`} className="mt-3 inline-block text-sm text-ahc-green">Download / View →</a>
        </div>
      </div>
    </div>
  )
}
