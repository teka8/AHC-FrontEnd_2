import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import PixelTransition from "../ahc/PixelTransition";

const AUTOPLAY_DELAY = 7000;

type HeroLogo = {
  src: string;
  alt: string;
  fallback?: string;
};

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    title: "Advancing Health Education",
    subtitle: "Empowering the next generation of African health leaders through collaboration and innovation.",
    tag: "Education",
    accent: "bg-ahc-green",
    textAccent: "text-ahc-green-dark",
    ctaText: "Join Our Network",
    ctaLink: "https://www.ahc.tewostech.com/admin/login",
    secondaryCtaText: "View Programs",
    secondaryCtaLink: "/programs",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2032&auto=format&fit=crop",
    title: "Transforming Healthcare",
    subtitle: "Building resilient health systems across Africa by strengthening education and workforce training.",
    tag: "Impact",
    accent: "bg-blue-600",
    textAccent: "text-blue-700",
    ctaText: "Explore Impact",
    ctaLink: "/about",
    secondaryCtaText: "Our Partners",
    secondaryCtaLink: "/partners",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Fostering Innovation",
    subtitle: "Creating a culture of entrepreneurship to solve the continent's most pressing health challenges.",
    tag: "Innovation",
    accent: "bg-amber-500",
    textAccent: "text-amber-600",
    ctaText: "Start Innovating",
    ctaLink: "/health-pillars/health-entrepreneurship",
    secondaryCtaText: "Read News",
    secondaryCtaLink: "/news",
  },
];

const logos: HeroLogo[] = [
  {
    src: `/images/logo_dark.png`,
    alt: "Africa Health Collaborative",
    fallback: `/images/ahc-logo.png`,
  },
  {
    src: `/images/partners/Addis_Ababa_University_logo.png`,
    alt: "Addis Ababa University",
    fallback: `/images/partners/addis-ababa-university.png`,
  },
  {
    src: `/images/partners/mastercard_foundation_-_logo.png`,
    alt: "Mastercard Foundation",
    fallback: `/images/partners/mastercard-foundation.svg`,
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] w-full overflow-hidden bg-white font-sans">
      {/* Carousel */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full min-w-full flex-[0_0_100%]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-linear ${selectedIndex === index ? "scale-110" : "scale-100"
                    }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* White Gradient Overlay - Reduced Opacity for Clarity */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent/10 sm:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30" />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10">
                <div className="max-w-4xl relative pt-20 md:pt-0">

                  {/* Organic Shape Decoration */}
                  <div className={`absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br ${slide.accent.replace('bg-', 'from-')} to-transparent opacity-10 rounded-full blur-3xl transition-all duration-1000 ${selectedIndex === index ? 'scale-100' : 'scale-50'}`} />

                  {/* Animated Tag */}
                  <div className="overflow-hidden mb-6 relative">
                    <div
                      className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm text-xs font-bold tracking-[0.2em] uppercase text-slate-500 transform transition-transform duration-700 ${selectedIndex === index ? 'translate-y-0' : 'translate-y-full'}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${slide.accent} animate-pulse`}></span>
                      {slide.tag}
                    </div>
                  </div>

                  {/* Title with Editorial Typography */}
                  <div className="overflow-hidden mb-6 relative">
                    <h1
                      className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight transform transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedIndex === index ? 'translate-y-0' : 'translate-y-[120%]'}`}
                    >
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={`inline-block mr-3 sm:mr-4 ${i === 1 ? 'italic font-light text-slate-600' : ''}`}>
                          {word}
                        </span>
                      ))}
                    </h1>
                  </div>

                  {/* Subtitle Fade In */}
                  <p
                    className={`text-base sm:text-lg md:text-2xl text-slate-600 mb-8 md:mb-12 max-w-xl leading-relaxed font-medium transition-all duration-1000 delay-200 ${selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Dynamic Buttons */}
                  <div
                    className={`flex flex-wrap gap-4 md:gap-5 transition-all duration-1000 delay-300 ${selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    <a
                      href={slide.ctaLink}
                      className="group relative px-6 py-3 md:px-8 md:py-4 bg-ahc-green text-white font-bold text-xs md:text-sm tracking-widest uppercase rounded-full overflow-hidden shadow-lg hover:shadow-ahc-green/30 transition-all hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        {slide.ctaText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>

                    <Link
                      to={slide.secondaryCtaLink}
                      className="group px-6 py-3 md:px-8 md:py-4 bg-transparent border border-slate-300 text-slate-700 font-bold text-xs md:text-sm tracking-widest uppercase rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center gap-2 md:gap-3 hover:-translate-y-1"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                        <Play className="w-2.5 h-2.5 md:w-3 md:h-3 fill-slate-700 ml-0.5" />
                      </div>
                      {slide.secondaryCtaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots - Vertical on Desktop */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`group relative w-3 rounded-full transition-all duration-500 ${idx === selectedIndex ? "h-12 bg-ahc-green" : "h-3 bg-slate-300 hover:bg-slate-400"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex lg:hidden gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === selectedIndex ? "bg-ahc-green w-6" : "bg-slate-300"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Strategic Partners - Pixel Transition Logos */}
      <div className="absolute top-4 left-4 right-4 md:top-8 md:right-8 md:left-auto z-30 flex flex-nowrap md:flex-wrap items-center justify-start md:justify-end gap-3 md:gap-4 pointer-events-none">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className={
              "pointer-events-auto" +
              (idx === logos.length - 1 ? " ml-auto md:ml-18" : "")
            }
          >
            <PixelTransition
              gridSize={8}
              pixelColor="rgba(255, 255, 255, 0.9)"
              animationStepDuration={0.2}
              className="rounded-lg w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:border-white/40 transition-all duration-500"
              firstContent={
                <div className="flex items-center justify-center w-full h-full p-1.5 md:p-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain drop-shadow-md"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (logo.fallback && img.dataset.fallback !== "1") {
                        img.src = logo.fallback;
                        img.dataset.fallback = "1";
                      }
                    }}
                  />
                </div>
              }
              secondContent={
                <div className="flex items-center justify-center w-full h-full p-3 md:p-4 bg-gradient-to-br from-ahc-green to-blue-600">
                  <h3 className="text-white font-bold text-center text-[10px] md:text-xs leading-tight drop-shadow-lg">
                    {logo.alt}
                  </h3>
                </div>
              }
            />
          </div>
        ))}
      </div>

    </section>
  );
}
