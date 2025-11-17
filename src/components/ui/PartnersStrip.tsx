import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

export default function PartnersStrip() {
  const partners: Array<{
    name: string;
    url: string;
    logo?: string;
    description: string;
  }> = [
      {
        name: "Addis Ababa University",
        url: "http://localhost:5176/partners/Addis%20Ababa%20University",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-aau.png",
        description:
          "Addis Ababa University (AAU), founded in 1950 as the University College of Addis Ababa, is Ethiopia’s oldest and largest higher education and research institution.",
      },
      {
        name: "African Institute for Mathematical Sciences",
        url: "http://localhost:5176/partners/African%20Institute%20for%20Mathematical%20Sciences",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-aims.png",
        description:
          "The pan-African network of centers of excellence for training, research, and public engagement in mathematical sciences.",
      },
      {
        name: "African Leadership University",
        url: "http://localhost:5176/partners/African%20Leadership%20University",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-alu.svg",
        description:
          "Higher Education for a higher purpose: We believe young people have the potential to be the ethical, entrepreneurial leaders our world needs.",
      },
      {
        name: "Amref International University (Amref Health Africa)",
        url: "http://localhost:5176/partners/Amref%20International%20University%20(Amref%20Health%20Africa)",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-amref.png",
        description:
          "A leading Pan-African university of health sciences owned by Amref Health Africa, building on over 60 years of experience in improving community health across Africa.",
      },
      {
        name: "Ashesi University",
        url: "http://localhost:5176/partners/Ashesi%20University",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-ashesi-university.png",
        description:
          "Founded by Dr. Patrick Awuah, Ashesi University Foundation is guided by a dedicated Board of Trustees, supported by Advisory Boards in the US and Ghana.",
      },
      {
        name: "Kwame Nkrumah University of Science and Technology",
        url: "http://localhost:5176/partners/Kwame%20Nkrumah%20University%20of%20Science%20and%20Technology",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-knust.png",
        description:
          "Kwame Nkrumah University of Science and Technology (KNUST) began as Kumasi College of Technology in 1951. It opened in 1952 with 200 students and soon added the School of Engineering and the Department of Commerce.",
      },
      {
        name: "Mastercard Foundation",
        url: "http://localhost:5176/partners/Mastercard%20Foundation",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-mastercard.svg",
        description:
          "The Mastercard Foundation is a Canadian charity and one of the world’s largest foundations.",
      },
      {
        name: "Moi University",
        url: "http://localhost:5176/partners/Moi%20University",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-moi-university.png",
        description:
          "Moi University, established in 1984 by an act of parliament, is Kenya’s second public university and among the top-ranked in the country.",
      },
      {
        name: "University of Cape Town",
        url: "http://localhost:5176/partners/University%20of%20Cape%20Town",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-uct.png",
        description:
          "The University of Cape Town is a community of talented students, teachers, researchers, and staff dedicated to making the world a better place.",
      },
      {
        name: "University of Toronto",
        url: "http://localhost:5176/partners/University%20of%20Toronto",
        logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-uoft.svg",
        description:
          "Founded in 1827, the University of Toronto is one of the world’s top universities and was ranked Canada’s best and the world’s most sustainable in 2024.",
      },
    ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-16 dark:bg-slate-900 transition-colors duration-300" style={{ backgroundColor: 'rgb(255, 253, 246)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">
            In Partnership With
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are proud to collaborate with a diverse network of organizations
            to advance health education and research across Africa.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((p, idx) => (
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

                   
                    <div className="font-bold text-xl mb-2 font-display">
                      {p.name}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {p.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-slate-800 dark:text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-slate-800 dark:text-white" />
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/partners"
            className="bg-ahc-green text-white py-3 px-8 rounded-full hover:bg-ahc-green-darker transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            View All Partners
          </a>
        </div>
      </div>
    </section>
  );
}
