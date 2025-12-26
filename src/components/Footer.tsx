import { FormEvent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetFooterQuery } from '../features/navigation/navigationApi'
import { useSubscribeMutation } from '../features/subscriptions/subscriptionApi'
import { useGetFooterPagesQuery } from '../features/pages/pagesApi'
import { useGetCompanyInfoQuery } from '../features/settings/companyInfoApi'
import { getImageWithFallback } from '../utils/imageUtils'

export default function Footer() {
  const { data } = useGetFooterQuery()
  const { data: companyInfo } = useGetCompanyInfoQuery()
  const { data: fetchedFooterPages } = useGetFooterPagesQuery(undefined, {
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: true,
  })
  const [subscribe, { isLoading }] = useSubscribeMutation()
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // Use state to persist footer pages
  const [footerPages, setFooterPages] = useState<Array<{
    id: number;
    title: string;
    slug: string;
  }>>([])

  useEffect(() => {
    if (fetchedFooterPages && fetchedFooterPages.length > 0) {
      setFooterPages(fetchedFooterPages)
    }
  }, [fetchedFooterPages])

  return (
    <footer className="relative text-gray-300 bg-gray-800 border-t border-gray-700 overflow-x-hidden">
      <div className="absolute inset-x-0 -top-1 h-1.5 bg-gradient-to-r from-ahc-green-light via-ahc-green to-ahc-green-dark" />
      <div className="container py-16 animate-fade overflow-hidden">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                {...getImageWithFallback('images/ahc-logo.png')}
                alt="AHC Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-xl font-bold text-white">Africa Health Collaborative</span>
            </div>
            <p className="max-w-sm text-sm text-gray-400">
              {data?.about ?? 'Promoting collaboration, knowledge exchange, and scholarship in health professions education.'}
            </p>
            <div className="flex gap-3 pt-2">
              {companyInfo?.social_twitter && (
                <a href={companyInfo.social_twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5 1-1.4-1.5-3.8-1.5-5.2 0-1 1-1.3 2.4-.9 3.7-3-.1-5.7-1.6-7.5-3.9-1 1.9-.5 4.2 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.2-.1 2 1.3 4.5 2 7.1 2 8.5 0 13.2-7.2 13.2-13.5v-.6c.9-.7 1.6-1.4 2.1-2.3z" /></svg>
                </a>
              )}
              {companyInfo?.social_facebook && (
                <a href={companyInfo.social_facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.1C22 6.6 17.5 2.2 12 2.2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3H13.7v6.9c4.8-.7 8.5-4.8 8.5-9.8z" /></svg>
                </a>
              )}
              {companyInfo?.social_linkedin && (
                <a href={companyInfo.social_linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.06 5.5 3 5.5S1.02 4.6 1.02 3.5 1.94 1.5 3 1.5s1.98.9 1.98 2zM1.5 8.5h3V22h-3V8.5zM8.5 8.5h2.9v1.8h.1c.4-.7 1.4-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V22h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V22h-3V8.5z" /></svg>
                </a>
              )}
              {companyInfo?.social_instagram && (
                <a href={companyInfo.social_instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              )}
              {companyInfo?.social_youtube && (
                <a href={companyInfo.social_youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 md:col-span-2">
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/about" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">About</a></li>
                <li><a href="/resources" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">Resources</a></li>
                <li><a href="/news" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">News</a></li>
                <li><a href="/events" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/resources#documents" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">Document Repository</a></li>
                <li><a href="/resources#educational" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">Educational Hub</a></li>
                <li><a href="/resources#others" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">Other Resources</a></li>
                <li><a href="/contact" className="hover:text-ahc-green-dark dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-display font-semibold text-lg mb-4 h-7 text-white"></div>
              <ul className="space-y-3 text-sm">

                {/* Dynamic Footer Pages */}
                {footerPages.map(page => (
                  <li key={page.id}>
                    <Link
                      to={`/pages/${page.slug}`}
                      className="hover:text-ahc-green-dark dark:hover:text-white transition-colors"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Stay Connected</h4>
            <p className="max-w-sm text-sm text-gray-400">{companyInfo?.company_address || data?.contact || 'Addis Ababa University, Ethiopia'}</p>
            <div className="mt-4">
              <form
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 max-w-md justify-items-start"
                onSubmit={async (event: FormEvent<HTMLFormElement>) => {
                  event.preventDefault()
                  setFeedback(null)

                  try {
                    await subscribe({ email: email.trim() }).unwrap()
                    setFeedback({ type: 'success', message: 'Thanks for subscribing! We will keep you posted with new updates.' })
                    setEmail('')
                  } catch (error: any) {
                    const message =
                      error?.data?.message ??
                      (error?.status === 422
                        ? 'Please enter a valid email address.'
                        : 'We could not complete your subscription right now. Please try again later.')

                    setFeedback({ type: 'error', message })
                  }
                }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-full px-4 py-3 bg-gray-700 border border-gray-600 shadow-sm placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-ahc-green/40 focus:border-ahc-green/50 transition-all"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="btn bg-ahc-green hover:bg-ahc-green-dark text-white font-semibold rounded-full px-6 py-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-400">Get the latest news, events, and scholarship updates from AHC.</p>
              {feedback && (
                <p
                  className={`mt-2 text-sm ${feedback.type === 'success' ? 'text-ahc-green-light' : 'text-red-300'}`}
                  role="status"
                  aria-live="polite"
                >
                  {feedback.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} AHC-AAU. All rights reserved.</p>
          <p className="mt-1">Designed & Developed by Tewos Technology</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            {' • '}
            <Link to="/cookie-preferences" className="hover:text-white hover:underline">
              Manage Cookie Settings
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
