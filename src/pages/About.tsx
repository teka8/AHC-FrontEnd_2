import { Helmet } from 'react-helmet-async'
import { useGetPageBySlugQuery } from '../features/pages/pagesApi'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'

export default function About() {
  const queryResult = useGetPageBySlugQuery('about')
  const { data, isLoading, error, isError, isSuccess } = queryResult
  
  console.log('About page query result:', { data, isLoading, error, isError, isSuccess, fullResult: queryResult })
  
  if (error) {
    console.error('Error fetching about page:', error)
  }
  
  return (
    <div className="container py-16 md:py-24">
      <Helmet><title>About – AHC</title></Helmet>
      {isLoading ? (
        <div className="text-center">
          <Loader />
          <p className="mt-4 text-slate-500 dark:text-slate-400">Loading content...</p>
        </div>
      ) : error ? (
        <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <p className="font-semibold">Error loading page content.</p>
          <pre className="text-xs mt-2 whitespace-pre-wrap">{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : !data ? (
        <div className="text-amber-600 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
          <p>The content for this page could not be loaded. Please try again later.</p>
        </div>
      ) : (
        <div className="animate-page">
          <SectionHeader eyebrow="Who we are" title={data?.title ?? 'About Us'} />
          <article className="prose prose-lg max-w-none dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-headings:font-display prose-headings:text-ahc-dark dark:prose-headings:text-white">
            <div dangerouslySetInnerHTML={{ __html: data?.content ?? '' }} />
          </article>
        </div>
      )}
    </div>
  )
}
