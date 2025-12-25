import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Target, Users, ChevronDown } from "lucide-react";
import { useGetProgramsQuery } from "../../features/healthPillars/programsApi";
import CountryBadge from "../../components/CountryBadge";
import PillarNewsSection from "../../components/sections/PillarNewsSection";
import PillarProgramsSection from "../../components/sections/PillarProgramsSection";

const HealthEcosystems: React.FC = () => {
  const { data: programsData = [], isLoading } = useGetProgramsQuery({ category: "health_ecosystems" });

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
    .filter((p) => p.state === "active" || p.state === "paused")
    .map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description || "",
      branch: p.host,
      image: p.image_thumb || p.image || "https://placehold.co/600x400/000000/FFFFFF/png",
      state: p.state,
      countries: extractCountries(p.country),
    }));

  const programsScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Banner - Improved */}
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-70 h-70 opacity-20 pointer-events-none">
          <img 
            src="/images/ahc-health-symbol.png" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
          />
        </div>
        <div className="absolute right-0 top-3/4 -translate-y-1/2 translate-x-1/4 w-70 h-70 opacity-20 pointer-events-none">
          <img 
            src="/images/ahc-health-symbol.png" 
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
                src="/images/ahc-health-symbol.png" 
                alt="AHC Health Symbol" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-ahc-green dark:text-ahc-green-light text-md font-semibold mb-4 uppercase tracking-wide">
              Enabling the growth and transformation of Africa’s health sector
            </p>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Health Ecosystems (HECO)
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
              HECO aims at developing a dynamic and sustainable health ecosystem network that integrates local knowledge, supports policy development, and equips actors with the skills needed for sustainable health sector growth, transformation, and job creation across Africa.</p>
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
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=800&fit=crop" 
              alt="Health system building in Africa" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="/images/pillars/health-ecosystem-goal.jpg" 
              alt="Healthcare professionals collaborating" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=800&h=800&fit=crop" 
              alt="Community health workers" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Impact of Health Ecosystems Section */}
      <section id="impact" className="py-20 px-4 lg:px-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-20 -translate-x-1/4 w-80 h-80 opacity-[0.07]">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          <div className="absolute right-0 bottom-20 translate-x-1/4 w-96 h-96 opacity-[0.06]">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-green-200/20 dark:from-teal-600/10 dark:to-green-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 dark:from-green-600/10 dark:to-emerald-600/10 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Impact of Ecosystems on Africa
              </h3>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  To enhance the stability and growth of African health sectors, HECO focuses on increasing the number of primary
                  healthcare workers with stable employment by assembling essential building blocks for these sectors.                
                </p>
                <p>
                  The purpose of the Health Ecosystems Pillar is to train and prepare a new generation of talented
                  health professionals with the broad sets of skills required to drive equitable and inclusive growth in Africa.   
                </p>
                <p>
                  The Health Collaborative develops these building blocks to ensure that there are always sufficient numbers of highly skilled, 
                  work-ready graduates across a spectrum of disciplines responding to Africa’s needs.               
                </p>
                <p>
                  Programs under the Health Ecosystem Pillar are tailored to equip young leaders with the perspective, skills, training, and 
                  credentials essential for developing innovative, sustainable, and equitable health sectors.                
                </p>
                <p>As part of these initiatives AAU</p>
                <ul className='list-disc pl-20 text-lg text-gray-700 dark:text-gray-300 pt-6'>
                  <li>Establishes an African Hub for Innovation and Critical Scholarship in Health Professions Education and Policy Studies to amplify regional health education initiatives.</li>
                  <li>Fosters a conducive policy environment for primary healthcare development.</li>
                  <li>Supports the design and development of new health graduate program in indigenous health and health law in AAU; and three new health graduate programs programsother (one program in each of the three local implementing partner universities).
                  </li>
                  <li>Undertakes a comprehensive evaluation of the capacities of Ethiopian Higher Education Institutions in areas encompassing teaching, research and community engagement within the realm of primary healthcare.</li>
                  <li>Creates awareness on emerging health issue through mass media</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg sticky top-8">
                <img 
                  src="/images/pillars/health-ecosystem-goal.jpg" 
                  alt="Health Ecosystem Building" 
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Health system strengthening workshop with African partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Partnership Section */}
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
Train professionals across a broad range of disciplines critical for sustainable and equitable health-sector growth.                  </p>
                </div>
              </div>
            </div>

            {/* How HECO Works Card */}
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How HECO and Partners Work Together</h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Under the Health Ecosystems Pillar, Health Collaborative Partners work to co-create and train a new generation of talented health 
                    professionals with advanced skills required to drive equitable and inclusive growth in Africa.                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <PillarNewsSection
        pillar="health_ecosystems"
        title="Latest Health Ecosystems News"
        description="Read the most recent developments strengthening health ecosystems across Africa."
        backgroundClassName="bg-gradient-to-br from-teal-50 via-white to-green-100 dark:from-[#0b1120] dark:via-[#0f1729] dark:to-[#020617]"
      />

      {/* Key Contacts Section - Improved */}
      <div className="relative py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/3 -translate-x-1/3 w-70 h-70 opacity-[0.06]">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          <div className="absolute right-0 bottom-1/3 translate-x-1/3 w-80 h-80 opacity-[0.05]">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-200/15 to-green-200/15 dark:from-teal-600/08 dark:to-green-600/08 rounded-full blur-4xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-88 h-88 bg-gradient-to-br from-green-200/15 to-emerald-200/15 dark:from-green-600/08 dark:to-emerald-600/08 rounded-full blur-4xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Key Contacts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get in touch with our dedicated team members driving the Health Ecosystems pillar forward.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Contact Card 1 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="relative mb-6">
                  <div className="relative inline-block">
                    <img 
                      src="/images/pillars/Damen-H-Mariam.jpg" 
                      alt="Prof. Damen H/Mariam" 
                      className="w-32 h-32 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/20 to-green-500/20 group-hover:from-teal-400/30 group-hover:to-green-500/30 transition-all duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Prof. Damen H/Mariam
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">Health Ecosystem Lead</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Health Ecosystems Pillar</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HealthEcosystems;