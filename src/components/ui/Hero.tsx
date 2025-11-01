export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center hero-aurora">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/15 to-transparent" />

      {/* Africa outline watermark */}
      <div className="hero-africa" aria-hidden="true">
        <svg viewBox="0 0 1000 1000" role="img" aria-label="Africa outline">
          <path d="M384 72l64 34 64-6 40 28 38 8 36 64 70 28 42 74-18 48 12 46-36 56-22 44-62 24-24 28-24 34-44-6-34 20-18 42-52 10-20 40 26 40-6 44-40 20-34-8-20-30-34-10-18-26-48-14-30-28-40-18-38-58-26-86 14-66 40-46 22-58 66-58 44-62 30-34 38-20 20-30z" />
        </svg>
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
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid gap-8 md:grid-cols-2 items-center">
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
        <div className="flex justify-center mt-8 md:mt-0">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full bg-white dark:bg-slate-800/80 border-2 border-slate-200/80 dark:border-slate-600/80 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 grid place-content-center backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 dark:hover:shadow-slate-900/70 hover:scale-[1.02] group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ahc-green/10 via-white/10 to-ahc-green/10 dark:from-ahc-green/30 dark:via-slate-800/40 dark:to-ahc-green/30 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-40 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_2px_12px_rgba(0,0,0,0.4)]"></div>
            <img
              src="/ahc-logo.png"
              alt="AHC Logo"
              className="relative z-10 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-110"
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
    </section>
  );
}
