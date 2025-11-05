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
    <div className="container pt-24 pb-16 md:pb-24">
      <Helmet><title>{data?.title ?? 'Event'} – AHC</title></Helmet>
      {isLoading ? <Loader /> : data ? (
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <SectionHeader eyebrow="Event" title={data.title ?? 'Event'} cta={<a href="/events" className="text-sm font-medium text-ahc-green-dark hover:underline">All events</a>} />
            {data.event_image && (
              <img src={data.event_image} alt={data.title ?? 'Event image'} className="w-full rounded-xl border dark:border-slate-800 mb-8 shadow-lg" />
            )}
            <article className="prose prose-lg max-w-none dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-headings:font-display prose-headings:text-ahc-dark dark:prose-headings:text-white">
              <div dangerouslySetInnerHTML={{ __html: data.description ?? '' }} />
            </article>
          </div>
          <aside className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="font-display text-xl font-bold mb-4">Details</h3>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-3">
                <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Date:</strong> {data.event_date ? dayjs(data.event_date).format('MMMM DD, YYYY') : 'TBA'}</li>
                {(data.start_time || data.end_time) && (
                  <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Time:</strong> {[data.start_time, data.end_time].filter(Boolean).join(' - ')}</li>
                )}
                {data.location && <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Location:</strong> {data.location}</li>}
                {data.category && <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Category:</strong> {data.category}</li>}
                {data.target_audience && <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Audience:</strong> {data.target_audience}</li>}
                {data.status && <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Status:</strong> <span className={`px-2 py-1 rounded-full text-xs ${data.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{data.status}</span></li>}
                {typeof data.cost_amount !== 'undefined' && data.cost_amount !== null && (
                  <li><strong className="text-slate-500 dark:text-slate-400 font-semibold">Cost:</strong> {Number(data.cost_amount) === 0 ? 'Free' : `${data.cost_amount}`}</li>
                )}
              </ul>
              {data.registration_link && (
                <a href={data.registration_link} target="_blank" rel="noreferrer" className="btn bg-ahc-green hover:bg-ahc-green-dark text-white font-semibold rounded-full px-8 py-3 transition-colors w-full mt-6 text-center">Register Now</a>
              )}
            </div>
            {data.attachments && data.attachments.length > 0 && (
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="font-display text-xl font-bold mb-4">Attachments</h3>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                  {data.attachments.map((a, i) => (
                    <li key={i}>
                      <a className="text-ahc-green-dark hover:underline flex items-center gap-2" href={a.path ?? '#'} target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
                      </svg>{a.file_name ?? 'Attachment'}
                      </a>
                    </li>
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
