import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const pillars = [
    {
        id: "hemp",
        title: "Health Employment",
        shortTitle: "Employment",
        description: "Expand capacity to train primary health care workers to meet growing demand.",
        image: "/images/HEMP.jpg",
        link: "https://africahealthcollaborative.org/health-pillars/health-employment/",
        color: "bg-orange-500",
        accent: "from-orange-500 to-red-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
        )
    },
    {
        id: "hent",
        title: "Health Entrepreneurship",
        shortTitle: "Entrepreneurship",
        description: "Implement and sustain entrepreneurial ecosystems that launch health start-ups, generate revenue, and create meaningful employment.",
        image: "/images/HENT.jpg",
        link: "https://africahealthcollaborative.org/health-pillars/health-entrepreneurship/",
        color: "bg-teal-500",
        accent: "from-teal-500 to-emerald-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
        )
    },
    {
        id: "heco",
        title: "Health Ecosystems",
        shortTitle: "Ecosystems",
        description: "Enabling the growth and transformation of Africa’s health sector through robust partnerships and systems.",
        image: "/images/HECO.jpg",
        link: "https://africahealthcollaborative.org/health-pillars/health-ecosystem/",
        color: "bg-yellow-500",
        accent: "from-yellow-500 to-amber-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
        )
    }
];

export default function PillarsAccordion() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle one active

    return (
        <section className="py-16 md:py-24 bg-[#FFF9E9] overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Explore our Pillars</h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                    Preparing diverse youth for the meaningful work of transforming health and wellbeing in Africa through contextually appropriate and sustainable primary healthcare.
                </p>
            </div>

            <div className="h-[600px] md:h-[500px] w-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-2 md:gap-0 px-4 md:px-0">
                {pillars.map((pillar, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={pillar.id}
                            onClick={() => setActiveIndex(index)}
                            className={`
                relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer group rounded-2xl md:rounded-none
                ${isActive ? 'flex-[3] md:flex-[3]' : 'flex-[1] hover:flex-[1.2]'}
                md:first:rounded-l-2xl md:last:rounded-r-2xl
                border border-white/20 shadow-xl
              `}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className={`
                    h-full w-full object-cover transition-transform duration-[10000ms] ease-linear
                    ${isActive ? 'scale-110' : 'scale-100 grayscale-[0.3] group-hover:grayscale-0'}
                  `}
                                />

                                {/* Overlays */}
                                <div className={`
                  absolute inset-0 transition-opacity duration-500
                  ${isActive ? 'bg-slate-900/40' : 'bg-slate-900/60 group-hover:bg-slate-900/50'}
                `} />

                                {/* Active Gradient */}
                                <div className={`
                  absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500
                  ${isActive ? 'opacity-100' : ''}
                `} />
                            </div>

                            {/* Content Container */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">

                                {/* ACTIVE STATE CONTENT */}
                                <div className={`
                  transition-all duration-500 transform
                  ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-4 absolute bottom-0 left-0 right-0 p-8 pointer-events-none'}
                `}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${pillar.accent} shadow-lg`}>
                                        {pillar.icon}
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-slate-100 mb-6 max-w-lg leading-relaxed font-medium drop-shadow-md hidden md:block">
                                        {pillar.description}
                                    </p>

                                    <a
                                        href={pillar.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                      inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm tracking-wide uppercase transition-all hover:scale-105
                      bg-gradient-to-r ${pillar.accent} shadow-lg hover:shadow-xl
                    `}
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* INACTIVE STATE CONTENT (Vertical Text) */}
                                <div className={`
                  absolute inset-0 flex items-center justify-center transition-all duration-500
                  ${isActive ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100 delay-200'}
                `}>
                                    <h3 className="text-xl md:text-3xl font-black text-white/90 tracking-widest uppercase md:[writing-mode:vertical-rl] md:rotate-180 drop-shadow-xl whitespace-nowrap">
                                        {pillar.shortTitle}
                                    </h3>
                                    <div className={`
                    absolute bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-8 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm
                    md:hidden
                  `}>
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
