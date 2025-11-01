import { Link, NavLink } from 'react-router-dom'
import { useGetNavigationQuery } from '../features/navigation/navigationApi'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { data } = useGetNavigationQuery()
  const links: Array<{ label: string; path: string }> = data?.links || [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'News', path: '/news' },
    { label: 'Events', path: '/events' },
    { label: 'Media', path: '/media' },
    { label: 'Contact', path: '/contact' },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved) return saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b animate-fade ${
      scrolled
        ? 'bg-white/95 dark:bg-ahc-dark/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-ahc-dark/60 border-slate-200 dark:border-slate-800'
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/ahc-logo.png"
            alt="AHC Logo"
            className="h-8 w-8 object-contain"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement
              if (img.dataset.fallback !== '1') { img.src = '/ahc-logo.svg'; img.dataset.fallback = '1'; }
              else { img.src = '/favicon.svg'; }
            }}
          />
          <span className="font-semibold">Africa Health Collaborative</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `text-sm link-underline transition-colors duration-200 ${isActive ? 'text-ahc-green font-semibold' : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md border text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800 transition"
            onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </nav>
        <button className="md:hidden px-3 py-2 rounded-md border transition hover:bg-slate-50" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 animate-fade" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-ahc-dark shadow-xl p-4 animate-page" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between h-12">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">×</button>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              {links.map((l) => (
                <NavLink key={l.path} to={l.path} onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{l.label}</NavLink>
              ))}
              <button
                className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md border text-left hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
                <span>Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
