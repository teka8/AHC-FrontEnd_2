
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGetProgramsQuery } from '../../features/healthPillars/programsApi';

const HealthEntrepreneurship: React.FC = () => {
  const { data: programsData = [], isLoading } = useGetProgramsQuery({ category: 'health_entrepreneurship' });

  // Filter active and paused programs
  const programs = programsData
    .filter((p) => p.state === 'active' || p.state === 'paused')
    .map((p) => ({
      id: p.id,
      name: p.title,
      icon: <Briefcase className="h-8 w-8 text-ahc-green" />,
      description: p.description || '',
      branch: p.host,
      image: p.image_thumb || p.image || 'https://placehold.co/600x400/000000/FFFFFF/png',
      state: p.state,
    }));

  // Filter upcoming programs only (coming soon)
  const comingSoon = programsData
    .filter(p => p.state === 'upcoming')
    .map(p => ({
      title: p.title,
      description: p.description || '',
      branch: p.host,
      image: p.image_thumb || p.image || 'https://placehold.co/600x400/000000/FFFFFF/png',
      active: false,
    }));

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
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/ahc-health-symbol.png')" }}>
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
            <img src="/images/ahc-health-symbol.png" alt="Health Entrepreneurship Mission" className="rounded-2xl shadow-2xl object-cover w-full h-full" />
          </div>
        </div>

        {/* Our Programs Section */}
        <div id="programs" className="mb-20 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <h2 className="text-4xl font-bold text-ahc-green-dark text-center md:text-left">Our Programs</h2>
            <Link
              to="/programs?category=health_entrepreneurship"
              className="inline-flex items-center justify-center px-6 py-2 bg-ahc-green text-white rounded-lg font-semibold shadow-md hover:bg-ahc-green-dark transition-colors"
            >
              See All Programs
            </Link>
          </div>
          <div className="absolute top-1/2 -left-4 z-10">
            <button onClick={() => scroll('left', programsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
          <div
            ref={programsScrollRef}
            className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {isLoading ? (
              <div className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ) : programs.length > 0 ? (
              programs.map((program) => (
                <Link
                  key={program.id}
                  to={`/programs/${program.id}`}
                  className="flex-shrink-0 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ahc-green"
                >
                  <img src={program.image} alt={program.name} className="rounded-t-xl h-48 w-full object-cover" />
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{program.branch}</p>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        program.state === 'active'
                          ? 'text-green-800 bg-green-200'
                          : program.state === 'paused'
                            ? 'text-orange-800 bg-orange-200'
                            : 'text-red-800 bg-red-200'
                      }`}>
                        {program.state === 'active' ? 'Active' : program.state === 'paused' ? 'Paused' : 'Inactive'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{program.name}</h3>
                    <div
                      className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: program.description || 'A short description of the program.' }}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex-shrink-0 w-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No active programs available at the moment.</p>
              </div>
            )}
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
          <div
            ref={comingSoonScrollRef}
            className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {isLoading ? (
              <div className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ) : comingSoon.length > 0 ? (
              comingSoon.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={item.image} alt={item.title} className="rounded-t-xl h-48 w-full object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.branch}</p>
                      <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">Coming Soon</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div 
                      className="text-gray-600 dark:text-gray-400 line-clamp-3 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.description || 'A short description of the program.' }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex-shrink-0 w-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No upcoming programs at the moment.</p>
              </div>
            )}
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
