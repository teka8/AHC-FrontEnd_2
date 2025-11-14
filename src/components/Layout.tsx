import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatbotWidget from './chatbot/ChatbotWidget'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const topRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div ref={topRef} />
      <Header />
      <main
        className={`flex-1 pt-12 md:pt-16 overflow-x-hidden ${
          isHome ? 'bg-gradient-to-b from-ahc-green/15 to-transparent' : ''
        }`}
      >
        <div key={location.pathname} className="animate-fade">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
      <ScrollToTop topRef={topRef} />
    </div>
  )
}
