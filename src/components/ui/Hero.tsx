import { useEffect, useMemo, useState } from "react";

const LOGO_ROTATION_INTERVAL = 3500;

type HeroLogo = {
  src: string;
  alt: string;
  fallback?: string;
};

export default function Hero() {
  const logos = useMemo<HeroLogo[]>(
    () => [
      {
        src: "/images/ahc-logo.png",
        alt: "Africa Health Collaborative",
        fallback: "/ahc-logo.svg",
      },
      {
        src: "/images/partners/Addis_Ababa_University_logo.png",
        alt: "Addis Ababa University",
      },
      {
        src: "/images/partners/mastercard_foundation_-_logo.jpg",
        alt: "Mastercard Foundation",
      },
    ],
    [],
  );

  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    if (logos.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveLogo((current) => (current + 1) % logos.length);
    }, LOGO_ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [logos.length]);

  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-3.5rem)] md:min-h-[calc(100dvh-4rem)] hero-aurora">
      <div className="h-full flex flex-col">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/15 to-transparent" />

        {/* Africa outline watermark  */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/africa-map.png"
            alt="Africa map"
            className="h-[110%] w-auto object-cover dark:opacity-5 opacity-10"
            style={{
              animation: "float 8s ease-in-out infinite",
              filter: "brightness(1.5)",
            }}
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (img.dataset.fallback !== "1") {
                img.src = "/images/africa-map.jpg";
                img.dataset.fallback = "1";
              } else {
                img.src = "/images/ahc-logo.png";
              }
            }}
          />
        </div>

        {/* Africa health network overlay */}
        <div className="hero-network" aria-hidden="true">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <path
              className="net-link"
              stroke="rgba(122,201,67,.85)"
              fill="none"
              d="M300,380 C420,340 520,300 640,320 S900,380 980,360"
            />
            <path
              className="net-link"
              stroke="rgba(56,189,248,.6)"
              fill="none"
              d="M260,320 C380,280 520,260 700,300 S960,360 1100,340"
            />
            <path
              className="net-link"
              stroke="rgba(148,163,184,.6)"
              fill="none"
              d="M340,420 C480,380 600,360 760,380 S980,420 1120,400"
            />
            <circle
              className="net-node"
              cx="300"
              cy="380"
              r="3"
              fill="rgba(122,201,67,.9)"
            />
            <circle
              className="net-node"
              cx="480"
              cy="330"
              r="3"
              fill="rgba(122,201,67,.9)"
            />
            <circle
              className="net-node"
              cx="640"
              cy="320"
              r="3"
              fill="rgba(56,189,248,.9)"
            />
            <circle
              className="net-node"
              cx="760"
              cy="360"
              r="3"
              fill="rgba(56,189,248,.9)"
            />
            <circle
              className="net-node"
              cx="900"
              cy="380"
              r="3"
              fill="rgba(122,201,67,.9)"
            />
            <circle
              className="net-node"
              cx="1040"
              cy="350"
              r="3"
              fill="rgba(148,163,184,.95)"
            />
          </svg>
        </div>

        {/* Decorative wave */}
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1200 140" preserveAspectRatio="none">
            <defs>
              <linearGradient
                id="wave-grad-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(122,201,67,0.9)" />
                <stop offset="50%" stopColor="rgba(56,189,248,0.7)" />
                <stop offset="100%" stopColor="rgba(122,201,67,0.9)" />
              </linearGradient>
              <linearGradient
                id="wave-grad-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(122,201,67,0.6)" />
                <stop offset="60%" stopColor="rgba(148,163,184,0.5)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0.6)" />
              </linearGradient>
            </defs>
            <path
              className="wave-1"
              fill="url(#wave-grad-1)"
              d="M0,100 C150,80 300,110 450,95 C600,80 750,120 900,100 C1050,80 1200,110 1350,95 L1350,140 L0,140 Z"
            />
            <path
              className="wave-2"
              fill="url(#wave-grad-2)"
              d="M0,115 C160,95 320,125 480,110 C640,95 800,135 960,115 C1120,95 1280,125 1440,110 L1440,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-12 md:pb-20 grid gap-6 md:grid-cols-2 items-start flex-grow">
          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm tracking-wider uppercase text-ahc-green font-semibold mb-2 sm:mb-3">
              Africa Health Collaborative
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              style={{
                fontFamily:
                  'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Advancing Health Professions Education in Africa
            </h1>
            <p className="mt-4 sm:mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg">
              Collaboration, knowledge exchange, and scholarship across Addis
              Ababa University and partner universities.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="https://www.ahc.tewostech.com/admin/login"
                className="btn px-6 py-3 text-sm sm:text-base hover:shadow-md transition-all duration-300"
              >
                Portal
              </a>
              <a
                href="/health-innovation"
                className="px-6 py-3 text-sm sm:text-base font-medium border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-center"
              >
                Health Innovation & Entrepreneurship
              </a>
            </div>
          </div>

          {/* Logo section */}
          <div className="flex justify-center mt-4 md:mt-0">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200/80 dark:border-slate-600/80 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 grid place-content-center backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-ahc-green/20 dark:hover:shadow-ahc-green/30 hover:scale-[1.02] group glow-border">
              {/* Pulsing gradient background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ahc-green/20 via-white/20 to-ahc-green/20 dark:from-ahc-green/30 dark:via-slate-800/40 dark:to-ahc-green/30 animate-pulse"></div>

              {/* Glow effect - visible in both light and dark modes */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ahc-green/20 via-transparent to-ahc-green/20 dark:from-ahc-green/30 dark:via-transparent dark:to-ahc-green/30 opacity-50 dark:opacity-50 group-hover:opacity-80 dark:group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Shine effect - enhanced for better visibility */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-transparent opacity-50 dark:opacity-30 group-hover:opacity-70 dark:group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_12px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_12px_rgba(0,0,0,0.4)]"></div>
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                {logos.map((logo, index) => {
                  const isActive = index === activeLogo;

                  return (
                    <img
                      key={`${logo.alt}-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      className={`absolute top-1/2 left-1/2 h-[70%] w-auto max-w-[80%] -translate-x-1/2 -translate-y-1/2 transform object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.18)] transition-all duration-700 ease-out ${
                        isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10 pointer-events-none'
                      }`}
                      loading="eager"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        if (logo.fallback && img.dataset.fallback !== '1') {
                          img.src = logo.fallback;
                          img.dataset.fallback = '1';
                        } else if (img.src.includes('Addis_Ababa_University_logo')) {
                          img.src = '/images/ahc-logo.png';
                        } else {
                          img.src = '/favicon.svg';
                        }
                      }}
                    />
                  );
                })}
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {logos.map((logo, index) => (
                  <span
                    key={`${logo.alt}-dot-${index}`}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === activeLogo
                        ? "bg-ahc-green-dark scale-125"
                        : "bg-white/50"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
