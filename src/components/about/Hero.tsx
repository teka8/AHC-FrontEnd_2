import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";
import { getImageWithFallback } from "../../utils/imageUtils";

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
                {...getImageWithFallback('images/about/DSC03923.jpg')}
                className="attachment-large size-large"
                alt=""
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
          <h1 className="ahehc-banner__title">About Us</h1>
          <p className="is-size-large">
            The Africa Health Collaborative (AHC) strengthens primary healthcare
            across Africa by empowering youth. AHC–AAU leads this work in
            Ethiopia, partnering with local universities to equip young people,
            especially women, to drive health sector transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
