import { Outlet, ScrollRestoration } from 'react-router-dom'
import HIHeader from './HIHeader'
import HIFooter from './HIFooter'
import ScrollToTop from '../ScrollToTop'
import { useRef } from 'react'

export default function HILayout() {
  const topRef = useRef(null)
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-ahc-dark min-w-fit overflow-x-auto">
      <div ref={topRef} />
      <HIHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <HIFooter />
      <ScrollToTop topRef={topRef} />
    </div>
  )
}
