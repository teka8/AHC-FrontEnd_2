export default function PartnersStrip() {
  const partners: Array<{ name: string; url: string; logo?: string }> = [
    { name: 'Addis Ababa University', url: 'https://www.aau.edu.et/', logo: 'https://logo.clearbit.com/aau.edu.et' },
    { name: 'Welthungerhilfe', url: 'https://www.welthungerhilfe.org/', logo: 'https://logo.clearbit.com/welthungerhilfe.org' },
    { name: 'Ministry of Health', url: 'https://moh.gov.et/', logo: 'https://logo.clearbit.com/moh.gov.et' },
    { name: 'Partner University', url: '#', logo: '' },
    { name: 'Partner Institute', url: '#', logo: '' },
    { name: 'Global Health Org', url: '#', logo: '' },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-xs tracking-wider uppercase text-center text-slate-500">In partnership with</div>
        <div className="mt-6 marquee">
          <div className="marquee-inner gap-6">
            {[...partners, ...partners].map((p, idx) => (
              <a
                key={p.name + idx}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mx-3 h-16 px-4 rounded-xl border bg-white/80 backdrop-blur grid grid-cols-[auto,1fr] items-center gap-3 text-sm text-slate-700 hover:text-ahc-green card-hover"
              >
                <div className="h-10 w-10 rounded-full grid place-content-center border bg-white overflow-hidden">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                  ) : (
                    <svg className="w-5 h-5 text-ahc-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6 1.65 1.65 0 0 0 9 2.09V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 3.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 20.4 8c.36.3.59.75.6 1.23V9a1.65 1.65 0 0 0 1 1.51c.36.15.76.23 1.17.23H23a2 2 0 1 1 0 4h-.09c-.41 0-.81.08-1.17.23A1.65 1.65 0 0 0 20.4 15z"/>
                    </svg>
                  )}
                </div>
                <div className="whitespace-nowrap pr-6">{p.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
