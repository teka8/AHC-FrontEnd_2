import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import { useUnsubscribeMutation } from '../features/subscriptions/subscriptionApi'

type Status = 'idle' | 'missing' | 'success' | 'error'

export default function Unsubscribe() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')?.trim()
  const [unsubscribe, { isLoading }] = useUnsubscribeMutation()
  const hasTriggered = useRef(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      setStatus('missing')
      setMessage('This unsubscribe link is missing the required token. Please ensure you opened the full link from your email or contact support for assistance.')
      return
    }

    if (hasTriggered.current) {
      return
    }
    hasTriggered.current = true

    unsubscribe({ token })
      .unwrap()
      .then((response) => {
        setStatus('success')
        setMessage(response.message ?? 'You have been unsubscribed successfully.')
      })
      .catch((error: any) => {
        setStatus('error')
        const fallback = 'We were unable to process your request. The link may have expired or already been used.'
        setMessage(error?.data?.message ?? fallback)
      })
  }, [token, unsubscribe])

  const showLoader = isLoading && status === 'idle'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-4 py-16">
      <Helmet>
        <title>Manage Subscription | Africa Health Collaborative</title>
      </Helmet>
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl shadow-xl border border-slate-200/70 dark:border-gray-800 p-8 sm:p-10">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.5a2.25 2.25 0 0 1-2.26 0l-7.5-4.5a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Manage your email updates</h1>
        <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
          {showLoader && 'Processing your request...'}
          {!showLoader && message}
        </p>

        <div className="mt-8 space-y-4 text-center">
          {status === 'success' && (
            <div className="rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 px-4 py-3 text-sm">
              {message}
            </div>
          )}

          {status === 'missing' && (
            <div className="rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 px-4 py-3 text-sm">
              {message}
            </div>
          )}

          {status === 'error' && (
            <div className="rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300 px-4 py-3 text-sm">
              {message}
            </div>
          )}

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ahc-green px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-ahc-green-dark"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
