import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetPublicPostQuery } from '../features/posts/postsApi'
import Loader from '../components/Loader'
import dayjs from 'dayjs'

export default function NewsDetail() {
  const { id = '' } = useParams()
  const { data, isLoading, isError } = useGetPublicPostQuery(id)

  const headerImg = data?.featured_image || data?.content?.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] || ''

  return (
    <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <Helmet>
        <title>{data?.title ?? 'News'} – AHC</title>
      </Helmet>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : isError ? (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-semibold text-red-600">Failed to load this news item.</p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Please try again later.</p>
        </div>
      ) : data ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap -mx-4">
            <div className="w-full lg:w-3/4 px-4">
              <div className="mb-8">
                <a href="/news" className="text-sm font-medium text-ahc-green-dark hover:underline">
                  &larr; All news
                </a>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4 leading-tight">
                {data.title}
              </h1>

              {data.published_at && (
                <p className="text-base text-slate-500 dark:text-slate-400 mb-8">
                  {dayjs(data.published_at).format('MMMM DD, YYYY')}
                </p>
              )}

              {headerImg && (
                <div className="mb-8 overflow-hidden rounded-lg">
                  <img
                    src={headerImg}
                    alt={data.title ?? ''}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed overflow-hidden break-words">
                <div dangerouslySetInnerHTML={{ __html: data.content ?? '' }} />
              </div>
            </div>

            <div className="w-full lg:w-1/4 px-4 mt-8 lg:mt-0">
              <div className="sticky top-24">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-ahc-dark dark:text-white mb-4">
                    Share this post
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${data.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-300"
                    >
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${data.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500"
                    >
                      <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-semibold">This news item was not found.</p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Please check the URL or go back to the news list.
          </p>
        </div>
      )}
    </div>
  )
}
