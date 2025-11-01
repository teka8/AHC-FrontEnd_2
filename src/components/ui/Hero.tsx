export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-aurora">
      <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/10 to-transparent" />
      {/* Africa outline watermark */}
      <div className="hero-africa" aria-hidden="true">
        <svg viewBox="0 0 1000 1000" role="img" aria-label="Africa outline">
          <path d="M384 72l64 34 64-6 40 28 38 8 36 64 70 28 42 74-18 48 12 46-36 56-22 44-62 24-24 28-24 34-44-6-34 20-18 42-52 10-20 40 26 40-6 44-40 20-34-8-20-30-34-10-18-26-48-14-30-28-40-18-38-58-26-86 14-66 40-46 22-58 66-58 44-62 30-34 38-20 20-30z" />
        </svg>
      </div>
      {/* Africa health network overlay */}
      <div className="hero-network" aria-hidden="true">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Links */}
          <path className="net-link" stroke="rgba(122,201,67,.85)" fill="none" d="M300,380 C420,340 520,300 640,320 S900,380 980,360" />
          <path className="net-link" stroke="rgba(56,189,248,.6)" fill="none" d="M260,320 C380,280 520,260 700,300 S960,360 1100,340" />
          <path className="net-link" stroke="rgba(148,163,184,.6)" fill="none" d="M340,420 C480,380 600,360 760,380 S980,420 1120,400" />
          {/* Nodes */}
          <circle className="net-node" cx="300" cy="380" r="3" fill="rgba(122,201,67,.9)" />
          <circle className="net-node" cx="480" cy="330" r="3" fill="rgba(122,201,67,.9)" />
          <circle className="net-node" cx="640" cy="320" r="3" fill="rgba(56,189,248,.9)" />
          <circle className="net-node" cx="760" cy="360" r="3" fill="rgba(56,189,248,.9)" />
          <circle className="net-node" cx="900" cy="380" r="3" fill="rgba(122,201,67,.9)" />
          <circle className="net-node" cx="1040" cy="350" r="3" fill="rgba(148,163,184,.95)" />
        </svg>
      </div>
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
      <div className="relative container grid gap-8 md:grid-cols-2 items-center py-12 md:py-20">
        <div>
          <div className="text-xs tracking-wider uppercase text-ahc-green font-semibold">Africa Health Collaborative</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-black leading-tight" style={{fontFamily:'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>
            Advancing Health Professions Education in Africa
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            Collaboration, knowledge exchange, and scholarship across Addis Ababa University and partner universities.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/resources" className="btn btn-sweep">Explore Resources</a>
            <a href="/events" className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-slate-50 btn-sweep">Upcoming Events</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-56 w-56 md:h-64 md:w-64 rounded-full bg-white border shadow-xl grid place-content-center logo-aurora">
            <img
              src="/ahc-logo.png"
              alt="AHC"
              className="h-28 w-28 object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement
                if (img.dataset.fallback !== '1') { img.src = '/ahc-logo.svg'; img.dataset.fallback = '1'; }
                else { img.src = '/favicon.svg'; }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
