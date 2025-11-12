import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Activity, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'

export default function HIHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', path: '/health-pillars/health-entrepreneurship' },
    { label: 'Programs', path: '/health-pillars/health-entrepreneurship/programs' },
    { label: 'Services', path: '/health-pillars/health-entrepreneurship/services' },
    { label: 'Ventures', path: '/health-pillars/health-entrepreneurship/ventures' },
    { label: 'Blog', path: '/health-pillars/health-entrepreneurship/blog' },
    { label: 'About', path: '/health-pillars/health-entrepreneurship/about' },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 dark:bg-gray-900/98 shadow-lg backdrop-blur-md' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
    } border-b border-slate-200/50 dark:border-slate-700/50`}>
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo with AHC Symbol */}
          <Link to="/health-pillars/health-entrepreneurship" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 p-2 rounded-xl border border-teal-200/50 dark:border-teal-700/50">
                <img 
                  src="/images/ahc-health-symbol.png" 
                  alt="AHC Health Symbol" 
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent">
                HealthVentures
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <button
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 relative group ${
                      isActive
                        ? 'text-teal-600 dark:text-teal-400'
                        : 'text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></span>
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-full group-hover:w-6 transition-all duration-200"></span>
                    )}
                  </button>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/">
              <button className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium">
                Back to AHC
              </button>
            </Link>
            
            <Link to="/health-pillars/health-entrepreneurship/demo">
              <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                Request Demo
              </button>
            </Link>

            <button
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  {({ isActive }) => (
                    <button
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 text-teal-600 dark:text-teal-400 font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-green-400"></div>
                      )}
                    </button>
                  )}
                </NavLink>
              ))}
              
              <div className="pt-4 space-y-2 border-t border-slate-200/50 dark:border-slate-700/50 mt-4">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium text-left">
                    Back to AHC
                  </button>
                </Link>
                
                <Link to="/health-pillars/health-entrepreneurship/demo" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                    Request Demo
                  </button>
                </Link>
              </div>

              <button
                className="mt-4 w-full inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
                aria-label="Toggle theme"
              >
                <span className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-5 w-5" aria-hidden="true" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" aria-hidden="true" />
                      Dark Mode
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
