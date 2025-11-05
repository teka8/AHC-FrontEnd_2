import { Link, NavLink } from "react-router-dom";
import { useGetNavigationQuery } from "../features/navigation/navigationApi";
import { useEffect, useState } from "react";
import { Moon, Sun, ChevronDown, Home, Menu, X } from "lucide-react";

export default function Header() {
  const { data } = useGetNavigationQuery();
  const links: Array<{ label: string; path: string }> = data?.links || [
    { label: "About", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Scholarships", path: "/scholarship" },
    { label: "Media", path: "/media" },
    { label: "Contact", path: "/contact" },
  ];
  const hPath = "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLatestDropdown, setShowLatestDropdown] = useState(false);
  const [showMobileLatestDropdown, setShowMobileLatestDropdown] =
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
    { label: "Announcement", path: "/announcement" },
    { label: "News", path: "/news" },
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b animate-fade ${
        scrolled || open
          ? "bg-white dark:bg-ahc-dark shadow-md border-slate-200 dark:border-slate-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/ahc-logo.png"
            alt="AHC Logo"
            className="h-10 w-10 object-contain"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (img.dataset.fallback !== "1") {
                img.src = "/images/ahc-logo.jpg";
                img.dataset.fallback = "1";
              } else {
                img.src = "/images/favicon.png";
              }
            }}
          />
          <span className="font-display text-xl font-bold">
            Africa Health Collaborative
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to={hPath}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-ahc-green-dark font-semibold"
                  : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
              }`
            }
          >
            {hPath === "/" ? <Home className="h-5 w-5" /> : "Home"}
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setShowLatestDropdown(true)}
            onMouseLeave={() => setShowLatestDropdown(false)}
          >
            <button className="text-sm font-medium transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white flex items-center gap-1">
              <span className="inline-block">Latest</span>
              <span
                className={`inline-block transition-transform duration-200 ${
                  showLatestDropdown ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {showLatestDropdown && (
              <div className="absolute top-full left-0 pt-3">
                <div className="w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 animate-fade">
                  {latestLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm transition-colors ${
                          isActive
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

          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
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
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`md:hidden fixed inset-0 z-60 bg-white dark:bg-ahc-dark transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-ahc-green-dark font-semibold"
                      : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="relative">
              <button
                onClick={() =>
                  setShowMobileLatestDropdown(!showMobileLatestDropdown)
                }
                className="text-2xl font-medium transition-colors duration-200 text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white flex items-center gap-1"
              >
                <span>Latest</span>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-200 ${
                    showMobileLatestDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showMobileLatestDropdown && (
                <div className="mt-4 flex flex-col items-center gap-4">
                  {latestLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-xl font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-ahc-green-dark font-semibold"
                            : "text-slate-700 hover:text-ahc-green-dark dark:text-slate-300 dark:hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
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
    </header>
  );
}
