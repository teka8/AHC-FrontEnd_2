import type { EventItem } from '../../features/events/eventsApi'
import dayjs from 'dayjs'

export default function EventCard({ item }: { item: EventItem }) {
  const dateStr = item.event_date ? dayjs(item.event_date).format('MMM DD') : '----'
  const plain = (item.description ?? '').replace(/<[^>]+>/g, '').trim()
  const previewHtml = plain.length === 0 ? 'Details coming soon.' : (item.description as string)
  return (
    <a href={`/events/${item.id}`} className="group card card-hover p-5 transition">
      <div className="flex items-start gap-4">
        <div className="shrink-0 grid place-content-center w-14 h-14 rounded-lg bg-ahc-green text-black text-xs font-bold text-center">
          <div>{dateStr}</div>
        </div>
        <div>
          <h3 className="font-semibold group-hover:text-slate-900">{item.title}</h3>
          {item.location && <div className="mt-1 text-xs text-slate-600">{item.location}</div>}
          <p className="mt-1 text-sm text-slate-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: previewHtml }} />
        </div>
      </div>
    </a>
  )
}
