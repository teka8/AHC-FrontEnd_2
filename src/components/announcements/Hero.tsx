import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import "../../styles/Hero.css";

interface HeroProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function Hero({ search, setSearch }: HeroProps) {
  return (
    <div className="ahehc-banner alignfull hero-aurora pl-8 ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ahc-green/30 to-transparent" />
      <div className="ahehc-banner__inner">
        <svg
          width="1450"
          height="855"
          viewBox="0 0 1450 855"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="ahehc-banner__poster"
        >
          <path
            className="has-accent-teal"
            d="M1454.46,-40 L258.172,-40 L856.318,855 L1454.46,-40 L258.172,-40 L856.318,855 L1454.46,-40 Z"
          />
          <clipPath id="announcement-hero-poster">
            <path d="M1454.46,-40 L258.172,-40 L856.318,855 L1454.46,-40 L258.172,-40 L856.318,855 L1454.46,-40 Z" />
          </clipPath>
          <g clipPath="url(#announcement-hero-poster)">
            <foreignObject x="284" y="0" width="1145" height="900">
              <img
                decoding="async"
                width="1320"
                height="880"
                src="https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1320x880.jpg"
                className="attachment-large size-large"
                alt="Leaders sharing updates"
                style={{ objectPosition: "82% 51%" }}
                srcSet="https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1320x880.jpg 1320w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-760x507.jpg 760w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-150x100.jpg 150w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-768x512.jpg 768w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1536x1024.jpg 1536w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-2048x1365.jpg 2048w"
                sizes="(max-width: 1320px) 100vw, 1320px"
              />
            </foreignObject>
          </g>
        </svg>

        <div className="ahehc-banner__content px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="ahehc-breadcrumb">
            <ol className="ahehc-breadcrumb__items">
              <li className="ahehc-breadcrumb__item">
                <Link to="/" className="ahehc-breadcrumb__link">
                  Home
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="ahehc-banner__title">Announcements</h1>
          <p className="is-size-large">
            Stay informed with official statements, milestones, and updates from
            the Africa Health Collaborative community.
          </p>

          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search announcements by title or keyword..."
              className="w-full rounded-full border border-gray-300 bg-white px-14 py-4 text-base shadow-sm transition focus:border-ahc-green focus:outline-none focus:ring-2 focus:ring-ahc-green/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
