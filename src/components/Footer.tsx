import { FormEvent, useState } from 'react'
import { useGetFooterQuery } from '../features/navigation/navigationApi'
import { useSubscribeMutation } from '../features/subscriptions/subscriptionApi'

export default function Footer() {
  const { data } = useGetFooterQuery()
  const [subscribe, { isLoading }] = useSubscribeMutation()
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  return (
    <footer className="relative text-gray-300 bg-gray-800 border-t border-gray-700 overflow-x-hidden">
      <div className="absolute inset-x-0 -top-1 h-1.5 bg-gradient-to-r from-ahc-green-light via-ahc-green to-ahc-green-dark" />
      <div className="container py-16 animate-fade overflow-hidden">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/ahc-logo.png"
                alt="AHC Logo"
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  if (img.dataset.fallback !== '1') { 
                    img.src = '/images/ahc-logo.jpg'; 
                    img.dataset.fallback = '1'; 
                  }
                  else { 
                    img.src = '/images/favicon.png'; 
                  }
                }}
              />
              <span className="font-display text-xl font-bold text-white">Africa Health Collaborative</span>
            </div>
            <p className="max-w-sm text-sm text-gray-400">
              {data?.about ?? 'Promoting collaboration, knowledge exchange, and scholarship in health professions education.'}
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5 1-1.4-1.5-3.8-1.5-5.2 0-1 1-1.3 2.4-.9 3.7-3-.1-5.7-1.6-7.5-3.9-1 1.9-.5 4.2 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.2-.1 2 1.3 4.5 2 7.1 2 8.5 0 13.2-7.2 13.2-13.5v-.6c.9-.7 1.6-1.4 2.1-2.3z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.1C22 6.6 17.5 2.2 12 2.2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3H13.7v6.9c4.8-.7 8.5-4.8 8.5-9.8z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.06 5.5 3 5.5S1.02 4.6 1.02 3.5 1.94 1.5 3 1.5s1.98.9 1.98 2zM1.5 8.5h3V22h-3V8.5zM8.5 8.5h2.9v1.8h.1c.4-.7 1.4-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V22h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V22h-3V8.5z"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
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
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Stay Connected</h4>
            <p className="max-w-sm text-sm text-gray-400">{data?.contact ?? 'Addis Ababa University, Ethiopia'}</p>
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
        </div>
      </div>
    </footer>
  )
}
