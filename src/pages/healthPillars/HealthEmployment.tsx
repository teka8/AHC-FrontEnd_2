
import React from 'react';
import { ChevronRight, ChevronLeft, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGetScholarshipsQuery } from '../../features/scholarship/scholarshipsApi';
import { useGetProgramsQuery } from '../../features/healthPillars/programsApi';
import ScholarshipCard from '../../components/cards/ScholarshipCard';

const HealthEmployment: React.FC = () => {
  const { data: scholarships = [] } = useGetScholarshipsQuery();
  const { data: programsData = [], isLoading } = useGetProgramsQuery();

  // Filter active and paused programs
  const programs = programsData
    .filter(p => p.state === 'active' || p.state === 'paused')
    .map(p => ({
      title: p.title,
      description: p.description || '',
      branch: p.host,
      image: p.image || 'https://placehold.co/600x400/000000/FFFFFF/png',
      state: p.state,
    }));

  // Filter upcoming programs only (coming soon)
  const comingSoon = programsData
    .filter(p => p.state === 'upcoming')
    .map(p => ({
      title: p.title,
      description: p.description || '',
      branch: p.host,
      image: p.image || 'https://placehold.co/600x400/000000/FFFFFF/png',
      active: false,
    }));

  const successStories = [
    {
      name: "John Doe",
      story: "The AHC program helped me land my dream job in the health sector. I am now able to make a real difference in my community.",
      image: "https://placehold.co/100x100/000000/FFFFFF/png",
    },
    {
      name: "Jane Doe",
      story: "I am so grateful for the opportunity to be a part of the AHC. The program has given me the skills and confidence to pursue my career goals.",
      image: "https://placehold.co/100x100/000000/FFFFFF/png",
    },
  ];

  const programsScrollRef = React.useRef<HTMLDivElement>(null);
  const comingSoonScrollRef = React.useRef<HTMLDivElement>(null);
  const scholarshipsScrollRef = React.useRef<HTMLDivElement>(null);

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
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/pillars/health-employment-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-extrabold tracking-tight">Health Employment</h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">Creating a new generation of health leaders to drive equitable and inclusive growth in Africa.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Why Health Employment Matters Section */}
        
        <section className="py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 p-4">
            <img src="/images/pillars/impact-of-employment.jpg" alt="Impact of Employment on Africa" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-3xl font-bold text-ahc-blue mb-4">Impact of Employment on Africa</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Health Employment Pillar (HEMP) addresses the chronic mismatch between the demand for healthcare and the supply of a skilled health workforce in Africa, aiming to bridge this crucial gap.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the HEMP pillar, our university partners initially identify critical skills gaps within national health systems, subsequently developing and delivering bespoke academic and professional training for primary healthcare workers and health professionals.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The inclusion of community health workers in these capacity-building programs remains a key strategy for supporting improved health delivery services at all levels. A focal point of HEMP is enhancing the leadership capacities of women in the health and public health sectors, thereby addressing gender inequities in Africa’s health human resources.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The diverse array of programs collaboratively created and implemented under HEMP plays a crucial role in cultivating an empowered and proficient health workforce, pivotal for responsive and efficient health systems.
            </p>
          </div>
        </div>
      </section>

      {/* The Power of Partnership Section */}
      <section className="py-12">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-ahc-blue mb-4">The Power of Partnership</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ahc-green-dark mb-2">Our Goal</h3>
              <p className="text-gray-700 leading-relaxed">
                Expand capacity to train primary health care workers to meet growing demand.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-ahc-green-dark mb-2">How HEMP and Partners work together</h3>
              <p className="text-gray-700 leading-relaxed">
                Under the Health Employment Pillar, Health Collaborative Partners co-create medical residencies, and academic and professional programs, leveraging a ‘Train the Trainers’ (ToT) approach to significantly expand the number of skilled primary healthcare professionals.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/images/pillars/power-of-partnership.jpg" alt="The Power of Partnership" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

        {/* Programs Section */}
        <div id="programs" className="mb-20 relative">
          <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Programs</h2>
          <div className="absolute top-1/2 -left-4 z-10">
            <button onClick={() => scroll('left', programsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
          <div ref={programsScrollRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
            {isLoading ? (
              <div className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ) : programs.length > 0 ? (
              programs.map((program, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={program.image} alt={program.title} className="rounded-t-xl h-48 w-full object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{program.branch}</p>
                      {program.state === 'active' ? (
                        <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Active</span>
                      ) : program.state === 'paused' ? (
                        <span className="px-2 py-1 text-xs font-semibold text-orange-800 bg-orange-200 rounded-full">Paused</span>
                      ) : (
                        <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">Inactive</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <div 
                      className="text-gray-600 dark:text-gray-400 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: program.description || 'A short description of the program.' }}
                    />
                  </div>
                </div>
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
          <div ref={comingSoonScrollRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
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

        {/* Scholarships Section */}
        <div className="mb-20 relative">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold text-center text-ahc-green-dark">Scholarships</h2>
                <Link to="/scholarship" className="text-ahc-green hover:underline font-semibold">View All</Link>
            </div>
          <div className="absolute top-1/2 -left-4 z-10">
            <button onClick={() => scroll('left', scholarshipsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
          <div ref={scholarshipsScrollRef} className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
            {scholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
          <div className="absolute top-1/2 -right-4 z-10">
            <button onClick={() => scroll('right', scholarshipsScrollRef)} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-gray-100 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
                  <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mr-8" />
                  <div>
                    <p className="text-lg mb-4">{story.story}</p>
                    <p className="text-xl font-bold">{story.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Contacts Section */}
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold text-ahc-green-dark mb-8">Key Contacts</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <img src="/images/pillars/tak-koguchi.jpg" alt="Tak Koguchi" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold">Tak Koguchi</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Senior Regional Lead</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-ahc-green-dark"><Linkedin /></a>
                <a href="#" className="text-gray-400 hover:text-ahc-green-dark"><Twitter /></a>
              </div>
            </div>
            <div className="text-center">
              <img src="/images/pillars/suying-hugh.jpg" alt="Suying Hugh" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h3 className="text-2xl font-bold">Suying Hugh</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Program Manager, Mastercard Foundation</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-ahc-green-dark"><Linkedin /></a>
                <a href="#" className="text-gray-400 hover:text-ahc-green-dark"><Twitter /></a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-ahc-green text-white text-center py-20 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to make a difference?</h2>
            <p className="text-xl mb-8">Join us in building a healthier future for Africa.</p>
            <a href="/contact" className="bg-white text-ahc-green font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300">Get Involved</a>
        </div>

      </div>
    </div>
  );
};

export default HealthEmployment;
