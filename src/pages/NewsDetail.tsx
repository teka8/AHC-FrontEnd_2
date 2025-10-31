import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetPublicPostQuery } from '../features/posts/postsApi'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'
import dayjs from 'dayjs'

export default function NewsDetail() {
  const { id = '' } = useParams()
  const { data, isLoading, isError, error } = useGetPublicPostQuery(id)
  return (
    <div className="container pt-24 pb-10">
      <Helmet><title>{data?.title ?? 'News'} – AHC</title></Helmet>
      {isLoading ? <Loader /> : isError ? (
        <div className="text-sm text-red-600">Failed to load this news item.</div>
      ) : data ? (
        <div>
          <SectionHeader eyebrow="News" title={data.title ?? 'News'} cta={<a href="/news" className="text-sm text-ahc-green">All news</a>} />
          {(() => {
            const m = (data.content ?? '').match(/<img[^>]+src=["']([^"']+)["']/i)
            const headerImg = data.featured_image || (m ? m[1] : '')
            return headerImg ? (
              <img src={headerImg} alt={data.title ?? ''} className="w-full rounded-xl border mb-6" />
            ) : null
          })()}
          {data.published_at && (
            <div className="text-sm text-slate-600 mb-4">{dayjs(data.published_at).format('MMMM DD, YYYY')}</div>
          )}
          <article className="prose prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data.content ?? '' }} />
          </article>
        </div>
      ) : (
        <div className="text-sm text-slate-600">This news item was not found.</div>
      )}
    </div>
  )
}
