import type { EventItem } from '../../features/events/eventsApi'
import dayjs from 'dayjs'
import { MapPin } from 'lucide-react'

export default function EventCard({ item }: { item: EventItem }) {
  const date = item.event_date ? dayjs(item.event_date) : null
  const plain = (item.description ?? '').replace(/<[^>]+>/g, '').trim()
  const previewHtml = plain.length === 0 ? '<p>Details coming soon.</p>' : (item.description as string)
  const eventImage = item.event_image ? item.event_image : null

  return (
    <a
      href={`/events/${item.id}`}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start gap-6">
          {date && (
            <div className="flex-shrink-0 text-center bg-ahc-green-light dark:bg-ahc-green-dark rounded-lg p-3 w-20">
              <div className="text-3xl font-bold font-display text-ahc-green-dark dark:text-white">{date.format('DD')}</div>
              <div className="text-sm font-semibold text-ahc-green-dark dark:text-ahc-green-light">{date.format('MMM')}</div>
            </div>
          )}
          <div className="flex-grow">
            <h3 className="font-bold text-xl font-display text-slate-900 dark:text-white group-hover:text-ahc-green-dark transition-colors">{item.title}</h3>
            {item.location && (
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
            )}
            {eventImage && (
              <div className="mt-2">
                <img src={eventImage} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              </div>
            )}
            {/* <div
              className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            /> */}
          </div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-slate-700/50 px-6 py-3 rounded-b-xl mt-auto">
        <span className="text-sm font-semibold text-ahc-green-dark dark:text-ahc-green-light group-hover:text-ahc-green-darker transition-colors">
          View Details &rarr;
        </span>
      </div>
    </a>
  )
}
