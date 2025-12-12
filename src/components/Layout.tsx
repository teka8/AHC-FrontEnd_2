import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatbotWidget from './chatbot/ChatbotWidget'
import ScrollToTop from './ScrollToTop'
import { AnalyticsProvider } from '@/contexts/AnalyticsContext'
import { CookieConsent } from '@/components/CookieConsent'
import { usePageTracking } from '@/hooks/usePageTracking'

function LayoutContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const topRef = useRef<HTMLDivElement>(null)

  // Auto-track page views
  usePageTracking()

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div ref={topRef} />
      <Header />
      <main
        className={`flex-1 overflow-x-hidden ${isHome ? 'pt-12 md:pt-16 bg-gradient-to-b from-ahc-green/15 to-transparent' : ''
          }`}
      >
        <div key={location.pathname} className="animate-fade">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
      <ScrollToTop topRef={topRef} />
      <CookieConsent />
    </div>
  )
}

export default function Layout() {
  return (
    <AnalyticsProvider>
      <LayoutContent />
    </AnalyticsProvider>
  )
}
