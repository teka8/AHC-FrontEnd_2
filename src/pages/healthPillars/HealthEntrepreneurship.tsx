
import React from 'react';
import { Zap, Briefcase, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const HealthEntrepreneurship: React.FC = () => {
  const programs = [
    {
      name: "Venture Incubation Program",
      icon: <Briefcase className="h-8 w-8 text-ahc-green" />,
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      name: "Health Tech Accelerator",
      icon: <Zap className="h-8 w-8 text-ahc-green" />,
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      name: "Seed Funding Initiative",
      icon: <DollarSign className="h-8 w-8 text-ahc-green" />,
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: false,
    },
  ];

  const comingSoon = [
    {
        title: "New Program 1",
        description: "A short description of the program.",
        branch: "University of Toronto",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
        active: false,
      },
      {
        title: "New Program 2",
        description: "A short description of the program.",
        branch: "University of Toronto",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
        active: false,
      },
  ];

  const featuredVentures = [
    { name: "AfyaRekod", description: "A blockchain-based health data platform." },
    { name: "mPharma", description: "A technology-driven pharmacy benefits manager." },
  ];

  const programsScrollRef = React.useRef<HTMLDivElement>(null);
  const comingSoonScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/pillars/health-entrepreneurship-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-extrabold tracking-tight">Health Entrepreneurship</h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">Fostering a vibrant and sustainable health entrepreneurship ecosystem in Africa.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-ahc-green-dark mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">The Health Entrepreneurship Pillar (HENT) is dedicated to identifying, nurturing, and scaling innovative health startups across the continent. We provide entrepreneurs with the resources, mentorship, and network they need to succeed and make a lasting impact on the health of their communities.</p>
            <a href="#programs" className="bg-ahc-green hover:bg-ahc-green-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Discover Our Programs</a>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/pillars/health-entrepreneurship-mission.jpg" alt="Health Entrepreneurship Mission" className="rounded-2xl shadow-2xl object-cover w-full h-full" />
          </div>
        </div>

        {/* Our Programs Section */}
        <div id="programs" className="mb-20 relative">
          <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Our Programs</h2>
          <div className="absolute top-1/2 -left-4 z-10">
            <button onClick={() => scroll('left', programsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
          <div ref={programsScrollRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
            {programs.map((program, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={program.image} alt={program.name} className="rounded-t-xl h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{program.branch}</p>
                    {program.active ? (
                      <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Active</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">Inactive</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 -right-4 z-10">
            <button onClick={() => scroll('right', programsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-20 relative">
          <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Coming Soon</h2>
          <div className="absolute top-1/2 -left-4 z-10">
            <button onClick={() => scroll('left', comingSoonScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
          <div ref={comingSoonScrollRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
            {comingSoon.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={item.image} alt={item.title} className="rounded-t-xl h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.branch}</p>
                    {item.active ? (
                      <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Active</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">Coming Soon</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 -right-4 z-10">
            <button onClick={() => scroll('right', comingSoonScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </div>

        {/* Featured Ventures Section */}
        <div className="bg-gray-100 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Featured Ventures</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredVentures.map((venture, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-3xl font-bold mb-4">{venture.name}</h3>
                  <p className="text-lg">{venture.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HealthEntrepreneurship;
