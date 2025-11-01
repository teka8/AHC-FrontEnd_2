export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/15 to-transparent" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm tracking-wider uppercase text-ahc-green font-semibold mb-2 sm:mb-3">
              Africa Health Collaborative
            </div>
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              style={{fontFamily: 'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}
            >
              Advancing Health Professions Education in Africa
            </h1>
            <p className="mt-4 sm:mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg">
              Collaboration, knowledge exchange, and scholarship across Addis Ababa University and partner universities.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a 
                href="/resources" 
                className="btn px-6 py-3 text-sm sm:text-base hover:shadow-md transition-all duration-300"
              >
                Explore Resources
              </a>
              <a 
                href="/events" 
                className="px-6 py-3 text-sm sm:text-base font-medium border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-center"
              >
                Upcoming Events
              </a>
            </div>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center mt-8 md:mt-0">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full bg-white dark:bg-slate-800/80 border-2 border-slate-200/80 dark:border-slate-600/80 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 grid place-content-center backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/50 dark:hover:shadow-slate-900/70 hover:scale-[1.02] group">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ahc-green/10 via-white/10 to-ahc-green/10 dark:from-ahc-green/30 dark:via-slate-800/40 dark:to-ahc-green/30 animate-pulse"></div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-40 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-40 transition-opacity"></div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_2px_12px_rgba(0,0,0,0.4)]"></div>
              
              <img
                src="/ahc-logo.png"
                alt="AHC Logo"
                className="relative z-10 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-110 scale-100 group-hover:scale-105"
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
  )
}
