export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/15 to-transparent" />
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
            <a href="/resources" className="btn">Explore Resources</a>
            <a href="/events" className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-slate-50">Upcoming Events</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-56 w-56 md:h-64 md:w-64 rounded-full bg-white border shadow-xl grid place-content-center">
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
