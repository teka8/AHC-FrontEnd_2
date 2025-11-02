export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-3.5rem)] md:min-h-[calc(100dvh-4rem)] hero-aurora">
      <div className="h-full flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/15 to-transparent" />

      {/* Africa outline watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/images/africa-map.png" 
          alt="Africa map" 
          className="h-[110%] w-auto object-cover dark:opacity-5 opacity-10"
          style={{
            animation: 'float 8s ease-in-out infinite',
            filter: 'brightness(1.5)'
          }}
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement
            if (img.dataset.fallback !== '1') { 
              img.src = '/images/africa-map.jpg';
              img.dataset.fallback = '1';
            } else {
              img.src = '/images/ahc-logo.png';
            }
          }}
        />
      </div>

      {/* Africa health network overlay */}
      <div className="hero-network" aria-hidden="true">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <path className="net-link" stroke="rgba(122,201,67,.85)" fill="none" d="M300,380 C420,340 520,300 640,320 S900,380 980,360" />
          <path className="net-link" stroke="rgba(56,189,248,.6)" fill="none" d="M260,320 C380,280 520,260 700,300 S960,360 1100,340" />
          <path className="net-link" stroke="rgba(148,163,184,.6)" fill="none" d="M340,420 C480,380 600,360 760,380 S980,420 1120,400" />
          <circle className="net-node" cx="300" cy="380" r="3" fill="rgba(122,201,67,.9)" />
          <circle className="net-node" cx="480" cy="330" r="3" fill="rgba(122,201,67,.9)" />
          <circle className="net-node" cx="640" cy="320" r="3" fill="rgba(56,189,248,.9)" />
          <circle className="net-node" cx="760" cy="360" r="3" fill="rgba(56,189,248,.9)" />
          <circle className="net-node" cx="900" cy="380" r="3" fill="rgba(122,201,67,.9)" />
          <circle className="net-node" cx="1040" cy="350" r="3" fill="rgba(148,163,184,.95)" />
        </svg>
      </div>

      {/* Decorative wave */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 140" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(122,201,67,0.9)" />
              <stop offset="50%" stopColor="rgba(56,189,248,0.7)" />
              <stop offset="100%" stopColor="rgba(122,201,67,0.9)" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(122,201,67,0.6)" />
              <stop offset="60%" stopColor="rgba(148,163,184,0.5)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.6)" />
            </linearGradient>
          </defs>
          <path className="wave-1" fill="url(#wave-grad-1)" d="M0,100 C150,80 300,110 450,95 C600,80 750,120 900,100 C1050,80 1200,110 1350,95 L1350,140 L0,140 Z" />
          <path className="wave-2" fill="url(#wave-grad-2)" d="M0,115 C160,95 320,125 480,110 C640,95 800,135 960,115 C1120,95 1280,125 1440,110 L1440,140 L0,140 Z" />
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
            style={{ fontFamily: 'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Advancing Health Professions Education in Africa
          </h1>
          <p className="mt-4 sm:mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg">
            Collaboration, knowledge exchange, and scholarship across Addis Ababa University and partner universities.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="/resources" className="btn px-6 py-3 text-sm sm:text-base hover:shadow-md transition-all duration-300">
              Explore Resources
            </a>
            <a href="/events" className="px-6 py-3 text-sm sm:text-base font-medium border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-center">
              Upcoming Events
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
            <img
              src="/images/ahc-logo.png"
              alt="AHC Logo"
              className="h-[115%] relative z-10 w-24 sm:w-28 md:w-32 lg:w-36 object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-110"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.dataset.fallback !== '1') {
                  img.src = '/ahc-logo.svg';
                  img.dataset.fallback = '1';
                } else {
                  img.src = '/favicon.svg';
                }
              }}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
