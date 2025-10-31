import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetEventQuery } from '../features/events/eventsApi'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'
import dayjs from 'dayjs'

export default function EventDetail() {
  const { id = '' } = useParams()
  const { data, isLoading } = useGetEventQuery(id)
  return (
    <div className="container pt-24 pb-10">
      <Helmet><title>{data?.title ?? 'Event'} – AHC</title></Helmet>
      {isLoading ? <Loader /> : data ? (
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <SectionHeader eyebrow="Event" title={data.title ?? 'Event'} cta={<a href="/events" className="text-sm text-ahc-green">All events</a>} />
            {data.event_image && (
              <img src={data.event_image} alt={data.title ?? 'Event image'} className="w-full rounded-xl border mb-6 dark:border-slate-800" />
            )}
            <article className="prose prose-slate dark:prose-invert max-w-none bg-transparent prose-no-bg">
              <div dangerouslySetInnerHTML={{ __html: data.description ?? '' }} />
            </article>
          </div>
          <aside className="md:col-span-1 space-y-4">
            <div className="card p-5">
              <h3 className="font-semibold mb-2">Details</h3>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li><span className="text-slate-500 dark:text-slate-400">Date:</span> {data.event_date ? dayjs(data.event_date).format('MMMM DD, YYYY') : 'TBA'}</li>
                {(data.start_time || data.end_time) && (
                  <li><span className="text-slate-500 dark:text-slate-400">Time:</span> {[data.start_time, data.end_time].filter(Boolean).join(' - ')}</li>
                )}
                {data.location && <li><span className="text-slate-500 dark:text-slate-400">Location:</span> {data.location}</li>}
                {data.category && <li><span className="text-slate-500 dark:text-slate-400">Category:</span> {data.category}</li>}
                {data.target_audience && <li><span className="text-slate-500 dark:text-slate-400">Audience:</span> {data.target_audience}</li>}
                {data.status && <li><span className="text-slate-500 dark:text-slate-400">Status:</span> {data.status}</li>}
                {typeof data.cost_amount !== 'undefined' && data.cost_amount !== null && (
                  <li><span className="text-slate-500 dark:text-slate-400">Cost:</span> {Number(data.cost_amount) === 0 ? 'Free' : `${data.cost_amount}`}</li>
                )}
              </ul>
              {data.registration_link && (
                <a href={data.registration_link} target="_blank" rel="noreferrer" className="btn mt-4 w-full">Register</a>
              )}
            </div>
            {data.attachments && data.attachments.length > 0 && (
              <div className="card p-5">
                <h3 className="font-semibold mb-2">Attachments</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  {data.attachments.map((a, i) => (
                    <li key={i}><a className="text-ahc-green" href={a.path ?? '#'} target="_blank" rel="noreferrer">{a.file_name ?? 'Attachment'}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      ) : null}
    </div>
  )
}
