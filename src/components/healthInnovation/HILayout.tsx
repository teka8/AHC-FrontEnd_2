import { Outlet, ScrollRestoration } from 'react-router-dom'
import HIHeader from './HIHeader'
import HIFooter from './HIFooter'

export default function HILayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-ahc-dark">
      <HIHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <HIFooter />
      <ScrollRestoration />
    </div>
  )
}
