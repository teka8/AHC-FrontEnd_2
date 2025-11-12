import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
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
        <title>{data?.title ?? 'News'} – AHC</title>
      </Helmet>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : isError ? (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-semibold text-red-600">
            Failed to load this news item.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Please try again later.
          </p>
        </div>
      ) : data ? (
        <>
          <div className="relative bg-gray-100 dark:bg-gray-800 py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <a
                  href="/news"
                  className="text-sm font-medium text-ahc-green-dark hover:underline flex items-center"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  All news
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
          <SectionHeader eyebrow="News" title={data.title ?? 'News'} />
          {(() => {
            const m = (data.content ?? '').match(/<img[^>]+src=["']([^"']+)["']/i)
            const headerImg = data.featured_image
            return headerImg ? (
              <img src={headerImg} alt={data.title ?? ''} className="w-full rounded-xl border dark:border-slate-800 mb-8 shadow-lg" />
            ) : null
          })()}
          {data.published_at && (
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">Published on {dayjs(data.published_at).format('MMMM DD, YYYY')}</div>
          )}
          <article className="prose prose-lg max-w-none dark:prose-invert prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-headings:font-display prose-headings:text-ahc-dark dark:prose-headings:text-white">
            <div className="break-words whitespace-normal overflow-x-auto" dangerouslySetInnerHTML={{ __html: data.content ?? '' }} />
          </article>
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
