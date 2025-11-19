import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";

const Hero: React.FC = () => {
  return (
   <div className="ahehc-banner alignfull hero-aurora pl-8 min-h-[600px] md:min-h-[650px] lg:min-h-[720px]">

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
                src="/images/hero/about.jpg"
                className="attachment-large size-large"
                alt=""
                style={{ objectPosition: "82% 51%" }}
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
