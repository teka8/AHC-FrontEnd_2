import { Helmet } from 'react-helmet-async'
import { useMatch, useParams } from 'react-router-dom'
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Link,
  ArrowLeft,
  Share2,
} from 'lucide-react'

import { useGetPublicPostQuery } from '../features/posts/postsApi'
import Loader from '../components/Loader'
import dayjs from 'dayjs'

export default function NewsDetail() {
  const { id = '' } = useParams()
  const { data, isLoading, isError } = useGetPublicPostQuery(id)

  const isNewsRoute = Boolean(useMatch('/news/:id'))
  const isAnnouncementRoute = Boolean(useMatch('/announcement/:id'))

  const normalizedType = data?.post_type
    ? String(data.post_type).toLowerCase()
    : 'news'
  const isAnnouncement = normalizedType === 'announcement'
  const backPath = isAnnouncement ? '/announcement' : '/news'
  const backLabel = isAnnouncement ? 'All announcements' : 'All news'
  const pageSingular = isAnnouncement ? 'Announcement' : 'News'

  const headerImg =
    data?.featured_image ||
    data?.content?.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ||
    ''

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      color: 'text-blue-600',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      href: `https://twitter.com/intent/tweet?url=${window.location.href}&text=${data?.title}`,
      color: 'text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${data?.title}`,
      color: 'text-blue-700',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: `mailto:?subject=${data?.title}&body=${window.location.href}`,
      color: 'text-red-600',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>{`${data?.title ?? pageSingular} – AHC`}</title>
      </Helmet>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : isError ? (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-semibold text-red-600">
            Failed to load this {isAnnouncement ? 'announcement' : 'news item'}.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Please try again later.
          </p>
        </div>
      ) : data && ((isAnnouncementRoute && isAnnouncement) || (isNewsRoute && !isAnnouncement)) ? (
        <>
          <div className="relative bg-gray-100 dark:bg-gray-800 py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <a
                  href={backPath}
                  className="flex items-center text-sm font-medium text-ahc-green-dark hover:underline"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  {backLabel}
                </a>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-ahc-dark dark:text-white mb-4 leading-tight">
                {data.title}
              </h1>
              {data.published_at && (
                <p className="text-base text-slate-500 dark:text-slate-400 mb-8">
                  {dayjs(data.published_at).format('MMMM DD, YYYY')}
                </p>
              )}
            </div>
          </div>

          {headerImg && (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 relative z-10">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={headerImg}
                  alt={data.title ?? ''}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          )}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-wrap lg:flex-nowrap -mx-4">
              <div className="w-full lg:w-3/4 px-4">
                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed overflow-hidden break-words">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.content ?? '' }}
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/4 px-4 mt-8 lg:mt-0">
                <div className="sticky top-24">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-ahc-dark dark:text-white mb-4 flex items-center">
                      <Share2 size={20} className="mr-2" />
                      Share this post
                    </h3>
                    <div className="space-y-3">
                      {shareLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center p-2 rounded-md transition-colors text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600`}
                        >
                          <span className={`${link.color} mr-3`}>
                            {link.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {link.name}
                          </span>
                        </a>
                      ))}
                      <button
                        onClick={copyLink}
                        className="w-full flex items-center p-2 rounded-md transition-colors text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                      >
                        <span className="text-gray-500 mr-3">
                          <Link size={20} />
                        </span>
                        <span className="text-sm font-medium">Copy Link</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : data ? (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-semibold">
            This {isAnnouncementRoute ? 'announcement' : 'news item'} was not found.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Please check the URL or go back to the {isAnnouncementRoute ? 'announcements' : 'news'} list.
          </p>
        </div>
      ) : (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-semibold">
            This {isAnnouncement ? 'announcement' : 'news item'} was not found.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Please check the URL or go back to the {isAnnouncement ? 'announcements' : 'news'} list.
          </p>
        </div>
      )}
    </div>
  )
}
