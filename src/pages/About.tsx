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
    <div className="container py-10">
      <Helmet><title>About – AHC</title></Helmet>
      {isLoading ? (
        <div>
          <Loader />
          <p className="text-center mt-4 text-gray-500">Loading about page...</p>
        </div>
      ) : error ? (
        <div className="text-red-600">
          <p>Error loading page.</p>
          <pre className="text-xs mt-2">{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : !data ? (
        <div className="text-yellow-600">
          <p>No data returned from API</p>
        </div>
      ) : (
        <div>
          <SectionHeader eyebrow="Who we are" title={data?.title ?? 'About Us'} />
          <article className="prose prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: data?.content ?? '' }} />
          </article>
        </div>
      )}
    </div>
  )
}
