import { Link, NavLink } from "react-router-dom";
import { useGetNavigationQuery } from "../features/navigation/navigationApi";
import { useGetNavigationPagesQuery } from "../features/pages/pagesApi";
import { useEffect, useState, useMemo } from "react";
import { Moon, Sun, ChevronDown, Home, Menu, X } from "lucide-react";
import { getImageWithFallback } from "../utils/imageUtils";

export default function Header() {
  const { data } = useGetNavigationQuery();
  const { data: fetchedPages, isLoading: isLoadingPages } = useGetNavigationPagesQuery(undefined, {
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: true,
  });
  
  // Use state to persist pages and prevent disappearing on re-render
  const [dynamicPages, setDynamicPages] = useState<Array<{
    id: number;
    title: string;
    slug: string;
    section: string;
    is_custom_section: boolean;
  }>>([]);
  
  useEffect(() => {
    if (fetchedPages && fetchedPages.length > 0) {
      setDynamicPages(fetchedPages);
    }
  }, [fetchedPages]);
  
  const links: Array<{ label: string; path: string }> = data?.links || [
    // { label: "About", path: "/about" },
    // { label: "Partners", path: "/partners" },
    { label: "Resources", path: "/resources" },
    { label: "Media", path: "/media" },
    { label: "Contact", path: "/contact" },
  ];
  const hPath = "/";
  const aboutPath = "/about";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLatestDropdown, setShowLatestDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMobileAboutDropdown, setShowMobileAboutDropdown] = useState(false);
  const [showMobileLatestDropdown, setShowMobileLatestDropdown] =
    useState(false);
  const [showPillarsDropdown, setShowPillarsDropdown] = useState(false);
  const [showMobilePillarsDropdown, setShowMobilePillarsDropdown] =
    useState(false);
  const [showPartnerDropdown, setShowPartnerDropdown] = useState(false);
  const [showMobilePartnersDropdown, setShowMobilePartnersDropdown] =
    useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const latestLinks = [
    { label: "Events", path: "/events" },
    { label: "Announcements", path: "/announcement" },
    { label: "News", path: "/news" },
  ];
  // Predefined About links
  const predefinedAboutLinks = [
    { label: "About Us", path: "/about" },
    {
      label: "About AAU",
      path: "/partners/addisababauniversity"
    },
    { label: "Values & Principles", path: "/valuesandprinciples" },
    { label: "AHC Leaders", path: "/ahcleaders" },
    
  ];

  // Merge predefined About links with dynamic pages from 'about' section
  const AboutLinks = useMemo(() => {
    const dynamicAboutPages = dynamicPages
      .filter(page => page.section === 'about')
      .map(page => ({
        label: page.title,
        path: `/pages/${page.slug}`,
      }));
    return [...predefinedAboutLinks, ...dynamicAboutPages];
  }, [dynamicPages]);

  //partner link
  const partnerLinks = [
    { label: "Founder Partners", path: "/partners" },
    { label: "Local Partners", path: "/local-partners" },


  ];

  const healthPillarsLinks = [
    { label: "Health Employment", path: "/health-pillars/health-employment" },
    {
      label: "Health Entrepreneurship",
      path: "/health-pillars/health-entrepreneurship",
    },
    { label: "Health Ecosystems", path: "/health-pillars/health-ecosystems" },
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out mt-3 mx-4 md:mx-8 lg:mx-12 ${scrolled
          ? 'rounded-[20px] backdrop-blur-2xl bg-gradient-to-r from-white/70 via-white/60 to-white/70 dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-white/40 dark:border-slate-700/40 ring-1 ring-ahc-green/20 dark:ring-ahc-green/30'
          : 'rounded-2xl backdrop-blur-lg bg-white/60 dark:bg-slate-900/60 shadow-md border-2 border-white/30 dark:border-slate-800/30'
          }`}
      >
        <div className={`mx-auto max-w-7xl px-6 md:px-8 lg:px-12 flex items-center justify-between transition-all duration-700 ${scrolled ? 'h-14' : 'h-12 md:h-14'
          }`}>
          <Link to="/" className="flex items-center gap-3">
            {/* <img
              {...getImageWithFallback('images/ahc-logo.png')}
              alt="AHC Logo"
              className="h-10 w-10 object-contain"
            /> */}
            <span className="font-display text-xl font-bold">
              AHC - AAU
            </span>
          </Link>
          <nav className="hidden min-[1061px]:flex items-center gap-8">
            <NavLink
              to={hPath}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive
                  ? "text-ahc-green-dark font-semibold"
                  : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                }`
              }
            >
              {hPath === "/" ? <Home className="h-5 w-5" /> : "Home"}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button
                className="text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={showAboutDropdown}
                aria-controls="header-about-menu"
              >
                <span className="inline-block">About</span>
                <span
                  className={`inline-block transition-transform duration-200 ${showAboutDropdown ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              {showAboutDropdown && (
                <div className="absolute top-full left-0 pt-3" id="header-about-menu">
                  <div className="w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 animate-fade">
                    {AboutLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${isActive
                            ? "bg-ahc-green/10 text-ahc-green-dark font-semibold"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowLatestDropdown(true)}
              onMouseLeave={() => setShowLatestDropdown(false)}
            >
              <button
                className="text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={showLatestDropdown}
                aria-controls="header-latest-menu"
              >
                <span className="inline-block">Latest</span>
                <span
                  className={`inline-block transition-transform duration-200 ${showLatestDropdown ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              {showLatestDropdown && (
                <div className="absolute top-full left-0 pt-3" id="header-latest-menu">
                  <div className="w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 animate-fade">
                    {latestLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${isActive
                            ? "bg-ahc-green/10 text-ahc-green-dark font-semibold"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowPillarsDropdown(true)}
              onMouseLeave={() => setShowPillarsDropdown(false)}
            >
              <button
                className="text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={showPillarsDropdown}
                aria-controls="header-pillars-menu"
              >
                <span className="inline-block">Health Pillars</span>
                <span
                  className={`inline-block transition-transform duration-200 ${showPillarsDropdown ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              {showPillarsDropdown && (
                <div className="absolute top-full left-0 pt-3" id="header-pillars-menu">
                  <div className="w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 animate-fade">
                    {healthPillarsLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${isActive
                            ? "bg-ahc-green/10 text-ahc-green-dark font-semibold"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setShowPartnerDropdown(true)}
              onMouseLeave={() => setShowPartnerDropdown(false)}
            >
              <button
                className="text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={showPartnerDropdown}
                aria-controls="header-partners-menu"
              >
                <span className="inline-block">Partners</span>
                <span
                  className={`inline-block transition-transform duration-200 ${showPartnerDropdown ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              {showPartnerDropdown && (
                <div className="absolute top-full left-0 pt-3" id="header-partners-menu">
                  <div className="w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 animate-fade">
                    {partnerLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${isActive
                            ? "bg-ahc-green/10 text-ahc-green-dark font-semibold"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Custom Section Links (direct clickable links) */}
            {dynamicPages
              .filter(page => page.is_custom_section)
              .map(page => (
                <NavLink
                  key={page.slug}
                  to={`/pages/${page.slug}`}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${isActive
                      ? "text-ahc-green-dark font-semibold"
                      : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                    }`
                  }
                >
                  {page.title}
                </NavLink>
              ))}

            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${isActive
                    ? "text-ahc-green-dark font-semibold"
                    : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                  }`
                }
              >
                {l.path === "/" ? <Home className="h-5 w-5" /> : l.label}
              </NavLink>
            ))}

            <button
              className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              title={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </nav>
          <button
            className="min-[1061px]:hidden z-[60] relative"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      <div
        className={`min-[1061px]:hidden fixed inset-y-0 right-0 z-[55] w-80 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full invisible"
          }`}
      >
        <button
          className="absolute top-6 right-6 z-[60] p-2 text-slate-700 dark:text-slate-200"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="h-full w-full flex flex-col items-start justify-start pt-24 pb-8 overflow-y-auto px-6">
          <nav className="flex flex-col items-start gap-2 w-full">
            {/* home */}
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                  ? "text-ahc-green-dark font-semibold"
                  : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </div>
            </NavLink>

            <div className="w-full">
              <button
                onClick={() =>
                  setShowMobileAboutDropdown(!showMobileAboutDropdown)
                }
                className="text-lg font-medium w-full flex items-center justify-between py-2 transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                aria-haspopup="menu"
                aria-expanded={showMobileAboutDropdown}
                aria-controls="header-mobile-about-menu"
              >
                <span>About</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${showMobileAboutDropdown ? "rotate-180" : ""
                    }`}
                  aria-hidden="true"
                />
              </button>
              {showMobileAboutDropdown && (
                <div className="mt-2 flex flex-col items-start gap-2 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 w-full animate-fade-in" id="header-mobile-about-menu">
                  {AboutLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                          ? "text-ahc-green-dark font-semibold"
                          : "text-slate-600 hover:text-ahc-green-dark dark:text-slate-400 dark:hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>



            {/* latest */}
            {/* latest */}
            <div className="w-full">
              <button
                onClick={() =>
                  setShowMobileLatestDropdown(!showMobileLatestDropdown)
                }
                className="text-lg font-medium w-full flex items-center justify-between py-2 transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                aria-haspopup="menu"
                aria-expanded={showMobileLatestDropdown}
                aria-controls="header-mobile-latest-menu"
              >
                <span>Latest</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${showMobileLatestDropdown ? "rotate-180" : ""
                    }`}
                  aria-hidden="true"
                />
              </button>
              {showMobileLatestDropdown && (
                <div className="mt-2 flex flex-col items-start gap-2 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 w-full animate-fade-in" id="header-mobile-latest-menu">
                  {latestLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                          ? "text-ahc-green-dark font-semibold"
                          : "text-slate-600 hover:text-ahc-green-dark dark:text-slate-400 dark:hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full">
              <button
                onClick={() =>
                  setShowMobilePillarsDropdown(!showMobilePillarsDropdown)
                }
                className="text-lg font-medium w-full flex items-center justify-between py-2 transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                aria-haspopup="menu"
                aria-expanded={showMobilePillarsDropdown}
                aria-controls="header-mobile-pillars-menu"
              >
                <span>Health Pillars</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${showMobilePillarsDropdown ? "rotate-180" : ""
                    }`}
                  aria-hidden="true"
                />
              </button>
              {showMobilePillarsDropdown && (
                <div className="mt-2 flex flex-col items-start gap-2 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 w-full animate-fade-in" id="header-mobile-pillars-menu">
                  {healthPillarsLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                          ? "text-ahc-green-dark font-semibold"
                          : "text-slate-600 hover:text-ahc-green-dark dark:text-slate-400 dark:hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                onClick={() =>
                  setShowMobilePartnersDropdown(!showMobilePartnersDropdown)
                }
                className="text-lg font-medium w-full flex items-center justify-between py-2 transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                aria-haspopup="menu"
                aria-expanded={showMobilePartnersDropdown}
                aria-controls="header-mobile-partners-menu"
              >
                <span>Partners</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${showMobilePartnersDropdown ? "rotate-180" : ""
                    }`}
                  aria-hidden="true"
                />
              </button>
              {showMobilePartnersDropdown && (
                <div className="mt-2 flex flex-col items-start gap-2 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 w-full animate-fade-in" id="header-mobile-partners-menu">
                  {partnerLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                          ? "text-ahc-green-dark font-semibold"
                          : "text-slate-600 hover:text-ahc-green-dark dark:text-slate-400 dark:hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Custom Section Links (direct clickable links) */}
            {dynamicPages
              .filter(page => page.is_custom_section)
              .map(page => (
                <NavLink
                  key={page.slug}
                  to={`/pages/${page.slug}`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                      ? "text-ahc-green-dark font-semibold"
                      : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                    }`
                  }
                >
                  {page.title}
                </NavLink>
              ))}

            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium w-full text-left py-2 transition-colors duration-200 ${isActive
                    ? "text-ahc-green-dark font-semibold"
                    : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <button
              className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full border text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Moon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
