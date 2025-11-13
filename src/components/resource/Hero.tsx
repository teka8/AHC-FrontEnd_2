import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import "../../styles/Hero.css";

interface HeroProps {
  search: string;
  setSearch: (search: string) => void;
}

const Hero: React.FC<HeroProps> = ({ search, setSearch }) => {
  return (
    <div className="ahehc-banner alignfull hero-aurora">
      <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/30 to-transparent -z-10" />
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
          ></path>
          <clipPath id="poster-image">
            <path d="M1454.46,-40 L258.172,-40 L856.318,855 L1454.46,-40 L258.172,-40 L856.318,855 L1454.46,-40 Z"></path>
          </clipPath>
          <g clipPath="url(#poster-image)">
            <foreignObject x="284" y="0" width="1145" height="900">
              <img
                decoding="async"
                width="1320"
                height="880"
                src="https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1320x880.jpg"
                className="attachment-large size-large"
                alt=""
                style={{ objectPosition: "82% 51%" }}
                srcSet="https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1320x880.jpg 1320w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-760x507.jpg 760w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-150x100.jpg 150w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-768x512.jpg 768w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1536x1024.jpg 1536w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-2048x1365.jpg 2048w"
                sizes="(max-width: 1320px) 100vw, 1320px"
              />
            </foreignObject>
          </g>
          <path
            className="has-accent-green"
            d="M153.824,-8.438 L0,-8.438 L76.912,106.188 L153.824,-8.438 L0,-8.438 L76.912,106.188 L153.824,-8.438 Z"
          ></path>
          <path
            className="has-accent-teal"
            d="M112.671,124.39 L266.494,124.39 L189.582,9.764 L112.671,124.39 L266.494,124.39 L189.582,9.764 L112.671,124.39 Z"
          ></path>
          <path
            className="has-accent-green"
            d="M712.824,489.052 L559,489.052 L635.912,603.678 L712.824,489.052 L559,489.052 L635.912,603.678 L712.824,489.052 Z"
          ></path>
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
          <h1 className="ahehc-banner__title">Resources</h1>
          <p className="is-size-large">
            Explore our comprehensive collection of documents, educational
            materials, and research resources designed to support health
            professionals in Africa.
          </p>

          {/* Search Bar */}
          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources by title, author, or keyword..."
              className="w-full pl-14 pr-5 py-4 text-base border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 focus:ring-2 focus:ring-ahc-green focus:border-ahc-green transition-shadow shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
