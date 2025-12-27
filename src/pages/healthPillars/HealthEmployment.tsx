import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, ChevronDown, ChevronLeft, ChevronRight, Linkedin, Twitter } from 'lucide-react';
import { useGetProgramsQuery } from '../../features/healthPillars/programsApi';
import { useGetScholarshipsQuery } from '../../features/scholarship/scholarshipsApi';
import ScholarshipCard from '../../components/cards/ScholarshipCard';
import PillarNewsSection from '../../components/sections/PillarNewsSection';
import { getImageWithFallback } from "../../utils/imageUtils";

const HealthEmployment: React.FC = () => {
  const { data: scholarships = [] } = useGetScholarshipsQuery();
  const { data: programsData = [], isLoading } = useGetProgramsQuery({ category: 'health_employment' });

  const extractCountries = React.useCallback((value?: string | null) => {
    if (!value) {
      return [] as string[];
    }
    return Array.from(
      new Set(
        value
          .split(/[\n,|]/)
          .map((item) => item.trim())
          .filter(Boolean)
      )
    );
  }, []);

  // Filter active and paused programs
  const programs = programsData
    .filter(p => p.state === 'active' || p.state === 'paused')
    .map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description || '',
      branch: p.host,
      image: p.image_thumb || p.image || 'https://placehold.co/600x400/000000/FFFFFF/png',
      state: p.state,
      countries: extractCountries(p.country),
    }));

  const scholarshipsScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Success stories data
  const successStories = [
    {
      name: "John Doe",
      story: "The AHC program helped me land my dream job in the health sector. I am now able to make a real difference in my community.",
      image: "/images/pillars/jesusmiracle-chiadika.jpeg",
    },
    {
      name: "Jane Doe",
      story: "I am so grateful for the opportunity to be a part of the AHC. The program has given me the skills and confidence to pursue my career goals.",
      image: "/images/pillars/jesusmiracle-chiadika.jpeg",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Decorative Background Elements - Similar to HIHome */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-70 h-70 opacity-20 pointer-events-none">
          <img 
            {...getImageWithFallback('images/ahc-health-symbol.png')} 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
          />
        </div>
        <div className="absolute right-0 top-3/4 -translate-y-1/2 translate-x-1/4 w-70 h-70 opacity-20 pointer-events-none">
          <img 
            {...getImageWithFallback('images/ahc-health-symbol.png')} 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <img 
                {...getImageWithFallback('images/ahc-health-symbol.png')} 
                alt="AHC Health Symbol" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-ahc-green dark:text-ahc-green-light text-md font-semibold mb-4 uppercase tracking-wide">
              Enhancing the skilled healthcare workforce in Africa
            </p>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Health Employment (HEMP)
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
HEMP aims at equipping the primary healthcare workforce in Ethiopia with relevant skills that productively match the health and well-being needs of the Ethiopian population.</p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="#impact"
                className="text-gray-700 dark:text-gray-300 font-medium text-lg hover:text-ahc-green transition"
              >
                Keep Reading
              </a>
              <ChevronDown className="w-6 h-6 text-gray-700 dark:text-gray-300 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white dark:bg-gray-900 max-w-screen overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-x-hidden">
          <div className="aspect-square overflow-hidden">
            <img 
              {...getImageWithFallback('images/pillars/health_employment_1.jpg')} 
              alt="Health worker training in Africa" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              {...getImageWithFallback('images/pillars/health_employment_2.jpg')} 
              alt="Medical professionals collaborating" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              {...getImageWithFallback('images/pillars/health_employment_4.jpg')} 
              alt="Graduating healthcare students" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Impact of Employment Section - Redesigned */}
      <section id="impact" className="py-20 px-4 lg:px-20 bg-white dark:bg-gray-900 relative overflow-hidden min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-20 -translate-x-1/4 w-80 h-80 opacity-[0.07]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          <div className="absolute right-0 bottom-20 translate-x-1/4 w-96 h-96 opacity-[0.06]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Impact of Employment on Africa
              </h3>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                
                <p>
                The diverse array of programs collaboratively created and implemented under HEMP 
                plays a crucial role in cultivating an empowered and proficient health workforce, pivotal for responsive and efficient health systems.
                </p>
                <p> As part of this initiatives, AAU:</p>
              </div>
              <ul className='list-disc pl-20 text-lg text-gray-700 dark:text-gray-300 pt-6'>
                  <li>Establishes scholarship development, health employment, and health and wellness program desks at AAU – CHS.</li>
                  <li>Provides soft skills and leadership trainings to health sciences students to equip them with effective communication, empathy and teamwork abilities.</li>
                  <li>Fosters academic collaboration of students and faculty members to co-teach and develop innovative health programs and curricula through faculty and student exchange programs with Moi University and KNUST.</li>
                </ul>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg sticky top-8">
                <img 
                  {...getImageWithFallback('images/pillars/health-ecosystem-galery_3.jpg')} 
                  alt="Healthcare workers in Africa" 
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Community health workers receiving training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Partnership Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen">
        {/* Decorative Elements */}
        <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
        </div>
        <div className="absolute left-0 top-0 w-96 h-96 opacity-20">
          <div className="absolute left-0 top-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white">
            The Power of Partnership
          </h2>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Our Goal Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Target className="w-16 h-16 text-white relative z-10" />
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Goal</h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Expand capacity to train primary health care workers to meet growing demand.
                  </p>
                </div>
              </div>
            </div>

            {/* How HEMP Works Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Users className="w-16 h-16 text-white relative z-10" />
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How HEMP and Partners work together</h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Through coordinated scholarship support, and academic exchange programs with partner institutions, 
                    the partnership strengthens institutional capacity and equips health professionals with the competencies required for responsive and effective health systems.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <PillarNewsSection
        pillar="health_employment"
        title="Latest Health Employment News"
        description="Discover recent updates, initiatives, and stories from across the Health Employment pillar."
        backgroundClassName="bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-[#0b1120] dark:via-[#0f1729] dark:to-[#020617]"
      />

      {/* Scholarships Section */}
      <div className="mb-20 relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large AHC Symbol - Top Right */}
          <div className="absolute right-0 top-10 translate-x-1/4 w-70 h-70 opacity-[0.07]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          
          {/* Large AHC Symbol - Bottom Left */}
          <div className="absolute left-0 bottom-10 -translate-x-1/4 w-80 h-80 opacity-[0.06]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-teal-200/15 to-green-200/15 dark:from-teal-600/10 dark:to-green-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-green-200/15 to-emerald-200/15 dark:from-green-600/10 dark:to-emerald-600/10 rounded-full blur-3xl"></div>
          
          {/* Decorative Triangles */}
          <div className="absolute top-16 left-16 w-12 h-12 opacity-10" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
          </div>
          <div className="absolute bottom-16 right-20 w-16 h-16 opacity-10" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
            <div className="w-full h-full bg-gradient-to-t from-green-400 to-teal-500"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.015]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Scholarships</h2>
            <Link to="/scholarship" className="text-ahc-green hover:text-ahc-green-dark hover:underline font-semibold text-lg transition-colors">
              View All
            </Link>
          </div>
          <div className="absolute top-1/2 -left-4 z-20">
            <button 
              onClick={() => scroll('left', scholarshipsScrollRef)} 
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll scholarships left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" aria-hidden="true" />
            </button>
          </div>
          <div
            ref={scholarshipsScrollRef}
            className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {scholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
          <div className="absolute top-1/2 -right-4 z-20">
            <button 
              onClick={() => scroll('right', scholarshipsScrollRef)} 
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll scholarships right"
            >
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="relative py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large AHC Symbols */}
          <div className="absolute left-0 top-1/4 -translate-x-1/3 w-80 h-80 opacity-[0.05]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          <div className="absolute right-0 bottom-1/4 translate-x-1/3 w-96 h-96 opacity-[0.04]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-green-200/20 dark:from-teal-600/10 dark:to-green-600/10 rounded-full blur-4xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 dark:from-green-600/10 dark:to-emerald-600/10 rounded-full blur-4xl"></div>

          {/* Floating Triangles */}
          <div className="absolute top-20 left-20 w-16 h-16 opacity-10 animate-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
          </div>
          <div className="absolute bottom-32 right-32 w-12 h-12 opacity-10 animate-float" style={{ animationDelay: '2s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-b from-green-400 to-teal-500"></div>
          </div>
          <div className="absolute top-32 right-20 w-14 h-14 opacity-10 animate-float" style={{ animationDelay: '1s', clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
            <div className="w-full h-full bg-gradient-to-t from-teal-400 to-green-500"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how our programs are transforming lives and creating lasting impact across Africa's healthcare sector.
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Card Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="relative">
                      <img 
                        {...getImageWithFallback('images/pillars/jesusmiracle-chiadika.jpeg')} 
                        alt={story.name} 
                        className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/20 to-green-500/20 group-hover:from-teal-400/30 group-hover:to-green-500/30 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Story Text */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      "{story.story}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</p>
                        <p className="text-green-600 dark:text-green-400 font-medium">Program Graduate</p>
                      </div>
                      <div className="text-teal-500 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Key Contacts Section */}
      <div className="relative py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large AHC Symbols */}
          <div className="absolute left-0 -translate-x-1/3 w-70 h-70 opacity-[0.06]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          <div className="absolute right-0 bottom-1/3 translate-x-1/3 w-80 h-80 opacity-[0.05]">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-8 h-8 opacity-10 animate-float" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
          </div>
          <div className="absolute bottom-20 left-20 w-6 h-6 opacity-10 animate-float" style={{ animationDelay: '1.5s', clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
            <div className="w-full h-full bg-gradient-to-t from-green-400 to-teal-500"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.012] dark:opacity-[0.018]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Key Contacts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get in touch with our dedicated team members who are driving the Health Employment pillar forward.
            </p>
          </div>

          {/* Contacts Grid */}
          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
            {/* Contact Card 1 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Avatar Container */}
                <div className="relative mb-6">
                  <div className="relative inline-block">
                    <img 
                      {...getImageWithFallback('images/pillars/Anteneh-Belete.jpg')} 
                      alt="Prof. Anteneh Belete" 
                      className="w-32 h-32 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/20 to-green-500/20 group-hover:from-teal-400/30 group-hover:to-green-500/30 transition-all duration-300"></div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Prof. Anteneh Belete
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">Health Employment Pillar Lead</p>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-6">Health Employment Pillar</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 group/social"
                    >
                      <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 group/social"
                    >
                      <Twitter className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="mailto:tak@example.com" 
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 group/social"
                    >
                      <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

           
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">Looking for someone else on our team?</p>
            <a href="/ahcleaders">
              <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                View Full Team Directory
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </a>
            
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large AHC Symbol - Center Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Decorative Triangles */}
          <div className="absolute top-10 left-10 w-16 h-16 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
          </div>
          <div className="absolute bottom-10 right-10 w-20 h-20 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-b from-green-400 to-teal-500"></div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HealthEmployment;