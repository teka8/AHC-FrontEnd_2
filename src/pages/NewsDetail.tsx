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
    <div className="container pt-24 pb-16 md:pb-24">
      <Helmet><title>{data?.title ?? 'News'} – AHC</title></Helmet>
      {isLoading ? <Loader /> : isError ? (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-red-600">Failed to load this news item.</p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Please try again later.</p>
        </div>
      ) : data ? (
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="News" title={data.title ?? 'News'} cta={<a href="/news" className="text-sm font-medium text-ahc-green-dark hover:underline">All news</a>} />
          {(() => {
            const m = (data.content ?? '').match(/<img[^>]+src=["']([^"']+)["']/i)
            const headerImg = data.featured_image || (m ? m[1] : '')
            return headerImg ? (
              <img src={headerImg} alt={data.title ?? ''} className="w-full rounded-xl border dark:border-slate-800 mb-8 shadow-lg" />
            ) : null
          })()}
          {data.published_at && (
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">Published on {dayjs(data.published_at).format('MMMM DD, YYYY')}</div>
          )}
          <article className="prose prose-lg max-w-none dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-headings:font-display prose-headings:text-ahc-dark dark:prose-headings:text-white">
            <div dangerouslySetInnerHTML={{ __html: data.content ?? '' }} />
          </article>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-semibold">This news item was not found.</p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Please check the URL or go back to the news list.</p>
        </div>
      )}
    </div>
  )
}
