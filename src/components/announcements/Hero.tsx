import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import "../../styles/Hero.css";
import { getImageWithFallback } from "../../utils/imageUtils";
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
                {...getImageWithFallback('images/event/20250716_090911.jpg')}
                className="attachment-large size-large"
                alt="Leaders sharing updates"
                style={{ objectPosition: "82% 51%" }}
                srcSet="/images/event/20250716_090911.jpg"
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
            Stay up to date with official announcements, key milestones, and important updates from the Africa Health Collaborative community.
          </p>

          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" aria-hidden="true" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search announcements by title or keyword..."
              className="w-full rounded-full border border-gray-300 bg-white px-14 py-4 text-base shadow-sm transition focus:border-ahc-green focus:outline-none focus:ring-2 focus:ring-ahc-green/40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              aria-label="Search announcements"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
