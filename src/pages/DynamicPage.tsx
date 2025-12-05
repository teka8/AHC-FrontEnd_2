import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGetPageBySlugQuery } from "../features/pages/pagesApi";
import "../styles/Hero.css";

const DynamicPageHero: React.FC<{
  title: string;
  description?: string;
  heroImage?: string;
}> = ({ title, description, heroImage }) => {
  return (
    <div className="ahehc-banner alignfull hero-aurora pl-8">
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
                src={heroImage || "/images/hero/about.jpg"}
                className="attachment-large size-large"
                alt={title}
                style={{ objectPosition: "82% 51%" }}
              />
            </foreignObject>
          </g>
        </svg>

        <div className="ahehc-banner__content">
          <nav aria-label="Breadcrumb" className="ahehc-breadcrumb">
            <ol className="ahehc-breadcrumb__items">
              <li className="ahehc-breadcrumb__item">
                <Link to="/" className="ahehc-breadcrumb__link">
                  Home
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="ahehc-banner__title">{title}</h1>
          {description && (
            <p className="is-size-large">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: page, isLoading, error } = useGetPageBySlugQuery(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ahc-green"></div>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-ahc-green text-white rounded-lg hover:bg-ahc-green-dark transition-colors"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{page.meta_title || page.title} - AHC</title>
        {page.meta_description && (
          <meta name="description" content={page.meta_description} />
        )}
      </Helmet>

      {/* Hero Section */}
      <DynamicPageHero 
        title={page.title}
        description={page.hero_description}
        heroImage={page.hero_image}
      />

      {/* Content Section */}
      <section className="py-16 px-4 lg:px-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-ahc-green hover:prose-a:text-ahc-green-dark
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-ul:text-gray-700 dark:prose-ul:text-gray-300
              prose-ol:text-gray-700 dark:prose-ol:text-gray-300"
            dangerouslySetInnerHTML={{ __html: page.content || "" }}
          />
        </div>
      </section>
    </>
  );
};

export default DynamicPage;
