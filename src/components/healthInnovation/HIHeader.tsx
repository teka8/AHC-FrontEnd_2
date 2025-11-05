import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Activity, Menu, X, Moon, Sun } from 'lucide-react'

export default function HIHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved) return saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

   useEffect(() => {
      const root = document.documentElement
      if (theme === 'dark') root.classList.add('dark')
      else root.classList.remove('dark')
      localStorage.setItem('theme', theme)
    }, [theme])

  

  const navItems = [
    { label: 'Home', path: '/health-innovation' },
    { label: 'Programs', path: '/health-innovation/programs' },
    { label: 'Services', path: '/health-innovation/services' },
    { label: 'Ventures', path: '/health-innovation/ventures' },
    { label: 'Blog', path: '/health-innovation/blog' },
    { label: 'About', path: '/health-innovation/about' },
    {label: 'Login', path: 'https://www.ahc.tewostech.com/admin/login' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-ahc-dark/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-ahc-dark/60 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/health-innovation" className="flex items-center space-x-2 text-ahc-green font-bold text-xl">
            <Activity className="h-6 w-6" />
            <span>HealthVentures</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <button
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      isActive
                        ? 'bg-ahc-green/10 text-ahc-green'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/">
              <button className="px-4 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                Back to AHC
              </button>
            </Link>
            <Link to="/health-innovation/demo">
              <button className="px-6 py-2 rounded-md bg-ahc-green text-white hover:bg-ahc-green/90 transition font-medium">
                Request Demo
              </button>
            </Link>

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
          </div>

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 animate-fade">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  {({ isActive }) => (
                    <button
                      className={`w-full text-left px-4 py-2 rounded-md transition ${
                        isActive
                          ? 'bg-ahc-green/10 text-ahc-green'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </NavLink>
              ))}
              <div className="pt-2 space-y-2">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    Back to AHC
                  </button>
                </Link>
                <Link to="/health-innovation/demo" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-2 rounded-md bg-ahc-green text-white hover:bg-ahc-green/90 transition font-medium">
                    Request Demo
                  </button>
                </Link>
              </div>

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
        )}
      </div>
    </nav>
  )
}
