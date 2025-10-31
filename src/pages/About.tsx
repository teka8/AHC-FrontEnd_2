import { Helmet } from 'react-helmet-async'
import { useGetPageBySlugQuery } from '../features/pages/pagesApi'
import Loader from '../components/Loader'
import SectionHeader from '../components/ui/SectionHeader'

export default function About() {
  const { data, isLoading } = useGetPageBySlugQuery('about')
  return (
    <div className="container py-10">
      <Helmet><title>About – AHC</title></Helmet>
      {isLoading ? <Loader /> : (
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
