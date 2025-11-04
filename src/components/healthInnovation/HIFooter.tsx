import { Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

export default function HIFooter() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/health-innovation" className="flex items-center space-x-2 text-ahc-green font-bold text-xl">
              <Activity className="h-6 w-6" />
              <span>HealthVentures</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Empowering health innovation and entrepreneurship across Africa
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5 1-1.4-1.5-3.8-1.5-5.2 0-1 1-1.3 2.4-.9 3.7-3-.1-5.7-1.6-7.5-3.9-1 1.9-.5 4.2 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.2-.1 2 1.3 4.5 2 7.1 2 8.5 0 13.2-7.2 13.2-13.5v-.6c.9-.7 1.6-1.4 2.1-2.3z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.1C22 6.6 17.5 2.2 12 2.2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3H13.7v6.9c4.8-.7 8.5-4.8 8.5-9.8z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.06 5.5 3 5.5S1.02 4.6 1.02 3.5 1.94 1.5 3 1.5s1.98.9 1.98 2zM1.5 8.5h3V22h-3V8.5zM8.5 8.5h2.9v1.8h.1c.4-.7 1.4-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V22h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V22h-3V8.5z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/health-innovation/programs" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Our Programs</Link></li>
              <li><Link to="/health-innovation/ventures" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Venture Showcase</Link></li>
              <li><Link to="/health-innovation/updates" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Progress Updates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/health-innovation/services" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Open Innovation</Link></li>
              <li><Link to="/health-innovation/services" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Accelerators</Link></li>
              <li><Link to="/health-innovation/services" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/health-innovation/about" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">About Us</Link></li>
              <li><Link to="/health-innovation/blog" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Blog</Link></li>
              <li><Link to="/health-innovation/contact" className="text-slate-600 dark:text-slate-400 hover:text-ahc-green transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Africa Health Collaborative. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/health-innovation/privacy" className="hover:text-ahc-green transition">Privacy Policy</Link>
            <Link to="/health-innovation/terms" className="hover:text-ahc-green transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
