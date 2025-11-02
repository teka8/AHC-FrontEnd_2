import { useGetFooterQuery } from '../features/navigation/navigationApi'

export default function Footer() {
  const { data } = useGetFooterQuery()

  return (
    <footer className="relative text-slate-600 dark:text-slate-300 bg-gradient-to-b from-white to-slate-50 dark:from-ahc-dark dark:to-slate-900 border-t dark:border-slate-800 overflow-x-hidden">
      <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-emerald-300 via-lime-300 to-emerald-300 opacity-70" />
      <div className="container py-12 animate-fade overflow-hidden">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/images/ahc-logo.png"
                alt="AHC Logo"
                className="h-[115%] w-8 object-contain"
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
              <span className="text-lg font-semibold dark:text-white">Africa Health Collaborative</span>
            </div>
            <p className="max-w-sm text-sm dark:text-slate-400">
              {data?.about ?? 'Promoting collaboration, knowledge exchange, and scholarship in health professions education.'}
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-full border hover:bg-white dark:hover:bg-slate-800 transition" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5 1-1.4-1.5-3.8-1.5-5.2 0-1 1-1.3 2.4-.9 3.7-3-.1-5.7-1.6-7.5-3.9-1 1.9-.5 4.2 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.2-.1 2 1.3 4.5 2 7.1 2 8.5 0 13.2-7.2 13.2-13.5v-.6c.9-.7 1.6-1.4 2.1-2.3z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border hover:bg-white dark:hover:bg-slate-800 transition" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.1C22 6.6 17.5 2.2 12 2.2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3H13.7v6.9c4.8-.7 8.5-4.8 8.5-9.8z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border hover:bg-white dark:hover:bg-slate-800 transition" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.06 5.5 3 5.5S1.02 4.6 1.02 3.5 1.94 1.5 3 1.5s1.98.9 1.98 2zM1.5 8.5h3V22h-3V8.5zM8.5 8.5h2.9v1.8h.1c.4-.7 1.4-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V22h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V22h-3V8.5z"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <div>
              <h4 className="font-semibold mb-3 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-slate-900 dark:hover:text-white transition">About</a></li>
                <li><a href="/resources" className="hover:text-slate-900 dark:hover:text-white transition">Resources</a></li>
                <li><a href="/news" className="hover:text-slate-900 dark:hover:text-white transition">News</a></li>
                <li><a href="/events" className="hover:text-slate-900 dark:hover:text-white transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 dark:text-white">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/resources#documents" className="hover:text-slate-900 dark:hover:text-white transition">Document Repository</a></li>
                <li><a href="/resources#educational" className="hover:text-slate-900 dark:hover:text-white transition">Educational Hub</a></li>
                <li><a href="/resources#others" className="hover:text-slate-900 dark:hover:text-white transition">Other Resources</a></li>
                <li><a href="/contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 dark:text-white">Contact</h4>
            <p className="max-w-sm text-sm dark:text-slate-400">{data?.contact ?? 'Addis Ababa University, Ethiopia'}</p>
            <div className="mt-4">
              <form className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 max-w-md justify-items-start">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full px-4 py-2.5 md:py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-ahc-green/40 focus:border-ahc-green/50 dark:focus:ring-ahc-green/60 dark:focus:border-ahc-green/60"
                />
                <button className="btn">Subscribe</button>
              </form>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Stay updated with news and events.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} AHC-AAU. All rights reserved.</div>
      </div>
    </footer>
  )
}
