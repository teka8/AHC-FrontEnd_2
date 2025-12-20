import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { localPartners } from "../../data/localPartners";

export default function LocalPartnersStrip() {
  const partners = localPartners.map(lp => ({
    name: lp.name,
    url: `/local-partners/${lp.name.replace(/\s+/g, "").toLowerCase()}`,
    logo: lp.logo,
    description: lp.description.descriptionTitle,
  }));
  const slides = partners.length < 6 ? [...partners, ...partners] : partners;

  const autoplay = Autoplay({
    delay: 3000,
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnFocusIn: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps' }, [autoplay]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.reset();
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">
            Local Implementing Partners
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are proud to collaborate with leading local universities, fostering innovation, education, and community health initiatives across Ethiopia.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((p, idx) => (
                <div
                  className="flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
                  key={p.name + idx}
                >
                  <a
                    href={p.url}
                    rel="noreferrer"
                    className="p-6 rounded-xl border bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 flex flex-col items-center text-center text-slate-700 dark:text-slate-200 hover:text-ahc-green dark:hover:text-ahc-green-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl h-full shadow-xl shadow-black/5"
                  >
                    <div className="w-32 h-24 md:w-40 md:h-28 lg:w-48 lg:h-32  
                     overflow-hidden flex items-center justify-center mb-4">
                      {p.logo ? (
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <svg
                          className="w-12 h-12 text-ahc-green"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 15 2.09V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 3.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 20.4 8c.36.3.59.75.6 1.23V9a1.65 1.65 0 0 0 1 1.51c.36.15.76.23 1.17.23H23a2 2 0 1 1 0 4h-.09c-.41 0-.81.08-1.17.23A1.65 1.65 0 0 0 20.4 15z" />
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
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous partners"
          >
            <ChevronLeft className="h-6 w-6 text-slate-800 dark:text-white" aria-hidden="true" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next partners"
          >
            <ChevronRight className="h-6 w-6 text-slate-800 dark:text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/local-partners"
            className="bg-ahc-green text-white py-3 px-8 rounded-full hover:bg-ahc-green-darker transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            View All Local Partners
          </a>
        </div>
      </div>
    </section>
  );
}
