import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";

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
                src="https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1320x880.jpg"
                className="attachment-large size-large"
                alt=""
                style={{ objectPosition: "82% 51%" }}
                srcSet="https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1320x880.jpg 1320w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-760x507.jpg 760w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-150x100.jpg 150w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-768x512.jpg 768w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-1536x1024.jpg 1536w, https://africahealthcollaborative.org/wp-content/uploads/2023/12/0118TCB00919-2048x1365.jpg 2048w"
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
          <h1 className="ahehc-banner__title">Our Partners</h1>
          <p className="is-size-large">
            Uniting a diverse array of universities, healthcare institutions,
            and organizations, we collectively create health sector solutions,
            harnessing our combined expertise for impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
