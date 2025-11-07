
import React from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const HealthEcosystems: React.FC = () => {
  const programs = [
    {
      title: "IMIx Certificate of Effective Healthcare Management",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      title: "Introduction to Africa Health Public Policy",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      title: "Master of Biotechnology",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: false,
    },
    {
      title: "Master of Engineering, Biomedical Engineering",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      title: "Master of Financial Insurance",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      title: "Master of Health Administration",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: false,
    },
    {
      title: "Master of Health Informatics",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      title: "Master of Public Health in Occupational and Environmental Health",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
    {
      title: "Master of Public Health in Social and Behavioural Health Sciences",
      description: "A short description of the program.",
      branch: "University of Toronto",
      image: "https://placehold.co/600x400/000000/FFFFFF/png",
      active: true,
    },
  ];

  const comingSoon = [
    {
        title: "BSc. in Biological Engineering",
        description: "A short description of the program.",
        branch: "University of Toronto",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
        active: false,
      },
      {
        title: "Centre for Reimagined Africa (CRA)",
        description: "A short description of the program.",
        branch: "University of Toronto",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
        active: false,
      },
      {
        title: "Collaborative Research: Monitoring, Evaluation, Learning & Adaptation (MELA) @ 3-year external evaluation: HEMP + HECO",
        description: "A short description of the program.",
        branch: "University of Toronto",
        image: "https://placehold.co/600x400/000000/FFFFFF/png",
        active: false,
      },
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
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/pillars/health-ecosystem-hero.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-extrabold tracking-tight">Health Ecosystems</h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">Enabling professionals with advanced skills for sustainable health sector growth and transformation in Africa.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Goal Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-ahc-green-dark mb-6">Our Goal</h2>
            <p className="text-lg leading-relaxed mb-6">The Health Ecosystems Pillar (HECO) focuses on increasing the number of primary healthcare workers with stable employment by assembling essential building blocks for the African health sectors. Our goal is to train professionals across various disciplines to drive equitable and inclusive growth in Africa.</p>
            <a href="#programs" className="bg-ahc-green hover:bg-ahc-green-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Explore Our Programs</a>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/pillars/health-ecosystem-goal.jpg" alt="Health Ecosystem Goal" className="rounded-2xl shadow-2xl object-cover w-full h-full" />
          </div>
        </div>

        {/* Programs Section */}
        <div id="programs" className="mb-20 relative">
          <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Programs</h2>
          <div className="absolute top-1/2 -left-4 z-10">
            <button onClick={() => scroll('left', programsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
          <div ref={programsScrollRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
            {programs.map((program, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={program.image} alt={program.title} className="rounded-t-xl h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{program.branch}</p>
                    {program.active ? (
                      <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Active</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">Inactive</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
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

        {/* News and Events Section */}
        <div className="bg-ahc-blue-light dark:bg-ahc-blue-dark text-white p-12 rounded-2xl shadow-xl mb-20">
          <h2 className="text-4xl font-bold text-center mb-8">News & Events</h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">2026-2027 Graduate Scholarships</h3>
              <p className="mb-4">University of Toronto</p>
              <a href="#" className="text-ahc-green hover:underline font-semibold">Learn More</a>
            </div>
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">ALU Public Sector Fellowship</h3>
              <p className="mb-4">Join the next cohort of public sector leaders.</p>
              <a href="#" className="text-ahc-green hover:underline font-semibold">Apply Now</a>
            </div>
          </div>
        </div>

        {/* Key Contacts Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-ahc-green-dark mb-8">Key Contacts</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <img src="/images/pillars/tak-koguchi.jpg" alt="Tak Koguchi" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold">Tak Koguchi</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Senior Regional Lead</p>
            </div>
            <div className="text-center">
              <img src="/images/pillars/suying-hugh.jpg" alt="Suying Hugh" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold">Suying Hugh</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Program Manager, Mastercard Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthEcosystems;
