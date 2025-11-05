import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'

export default function PartnersStrip() {
  const partners: Array<{ name: string; url: string; logo?: string; description: string }> = [
    { name: 'Addis Ababa University', url: 'https://www.aau.edu.et/', logo: 'https://logo.clearbit.com/aau.edu.et', description: 'A leading university in Ethiopia, fostering academic excellence and research.' },
    { name: 'Welthungerhilfe', url: 'https://www.welthungerhilfe.org/', logo: 'https://logo.clearbit.com/welthungerhilfe.org', description: 'A German non-governmental organization working to fight hunger and poverty.' },
    { name: 'Ministry of Health', url: 'https://moh.gov.et/', logo: 'https://logo.clearbit.com/moh.gov.et', description: 'The national body for health in Ethiopia, dedicated to improving public health.' },
    { name: 'Partner University', url: '#', logo: '', description: 'A key academic partner in our network.' },
    { name: 'Partner Institute', url: '#', logo: '', description: 'A specialized institute contributing to our mission.' },
    { name: 'Global Health Org', url: '#', logo: '', description: 'A global organization dedicated to advancing health worldwide.' },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">In Partnership With</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We are proud to collaborate with a diverse network of organizations to advance health education and research across Africa.</p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((p, idx) => (
                <div className="flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4" key={p.name + idx}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-6 rounded-xl border bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 flex flex-col items-center text-center text-slate-700 dark:text-slate-200 hover:text-ahc-green dark:hover:text-ahc-green-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl h-full"
                  >
                    <div className="h-20 w-20 rounded-full grid place-content-center border-2 border-ahc-green-light bg-white overflow-hidden mb-4">
                      {p.logo ? (
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="h-16 w-16 object-contain"
                          loading="lazy"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                        />
                      ) : (
                        <svg className="w-10 h-10 text-ahc-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 15 2.09V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 3.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 20.4 8c.36.3.59.75.6 1.23V9a1.65 1.65 0 0 0 1 1.51c.36.15.76.23 1.17.23H23a2 2 0 1 1 0 4h-.09c-.41 0-.81.08-1.17.23A1.65 1.65 0 0 0 20.4 15z"/>
                        </svg>
                      )}
                    </div>
                    <div className="font-bold text-xl mb-2 font-display">{p.name}</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
            <ChevronLeft className="h-6 w-6 text-slate-800 dark:text-white" />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
            <ChevronRight className="h-6 w-6 text-slate-800 dark:text-white" />
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <a href="/partners" className="bg-ahc-green text-white py-3 px-8 rounded-full hover:bg-ahc-green-darker transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
            View All Partners
          </a>
        </div>
      </div>
    </section>
  )
}
