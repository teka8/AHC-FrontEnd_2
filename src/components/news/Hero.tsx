import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";
import { getImageWithFallback } from "@/utils/imageUtils";

const Hero: React.FC = () => {
  return (
    <div className="ahehc-banner alignfull hero-aurora pl-8 ">
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
                {...getImageWithFallback('images/event/WhatsApp-Image-2025-11-14-at-17.40.06_3d0b9c95.jpg')}
                className="attachment-large size-large"
                alt=""
                style={{ objectPosition: "82% 51%" }}
                srcSet="/images/event/WhatsApp-Image-2025-11-14-at-17.40.06_3d0b9c95.jpg"
                sizes="(max-width: 1320px) 100vw, 1320px"
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
          <h1 className="ahehc-banner__title">News</h1>
          <p className="is-size-large">
            Discover the latest developments and upcoming events of the
            Collaborative.
          </p>
          <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
            <div className="wp-block-button mt-20">
              <Link
                to="/contact"
                className="wp-block-button__link wp-element-button"
              >
                Contribute an Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
