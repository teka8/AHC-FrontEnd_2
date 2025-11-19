import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Rocket, ChevronDown, Lightbulb, CheckCircle, TrendingUp, MapPin, ThumbsUp } from 'lucide-react';
import PillarNewsSection from '../../components/sections/PillarNewsSection';
import PillarProgramsSection from '../../components/sections/PillarProgramsSection';
import { useGetProgramsQuery } from '../../features/healthPillars/programsApi';
import { useGetVenturesQuery } from '../../features/healthInnovation/venturesApi';
import type { ProgramItem } from '../../features/healthPillars/programsApi';
import type { Venture } from '../../features/healthInnovation/types';
import Loader from '../../components/Loader';

export default function HealthEntrepreneurship() {
  const { data: programsData = [], isLoading: isLoadingPrograms } = useGetProgramsQuery({ category: 'health_entrepreneurship' });
  const { data: venturesData = [], isLoading: isLoadingVentures } = useGetVenturesQuery();

  const ventures = React.useMemo(() => {
    return venturesData.map((v: Venture) => ({
      id: v.id,
      title: v.name,
      description: v.description || '',
      logo: v.logo || 'https://placehold.co/600x400/000000/FFFFFF/png',
      tagline: v.tagline,
      focusArea: v.focus_area,
      stage: v.stage,
      country: v.country,
      team_size: v.team_size,
      patients_impacted: 0, // Add patients_impacted property (not in original Venture interface)
      featured: false, // Add featured property (can be updated based on actual data structure)
    }));
  }, [venturesData]);

  const openInnovationFeatures = [
    'Corporate partnership programs',
    'Innovation challenges and hackathons',
    'Technology scouting and trend analysis',
    'Pilot program facilitation',
    'IP and licensing support',
    'Co-development opportunities',
  ];

  const acceleratorFeatures = [
    '12-week intensive program',
    'Seed funding up to $150K',
    'Expert mentorship network',
    'Product-market fit workshops',
    'Investor pitch preparation',
    'Demo day presentation',
  ];

  const consultingFeatures = [
    'Strategy development and planning',
    'Market entry and expansion',
    'Regulatory pathway guidance',
    'Business model optimization',
    'Fundraising strategy and support',
    'Team building and HR consulting',
  ];

  return (
    <>
      <Helmet>
        <title>Health Entrepreneurship (HENT) - AHC</title>
        <meta name="description" content="Empowering innovation and entrepreneurship in healthcare across Africa" />
      </Helmet>

      <div className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden">
        {/* Hero Banner with AHC Health Symbol Decorations */}
        <section className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center">
          {/* Left Side Large Decorative Pattern */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-70 h-70 opacity-20 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          
          {/* Right Side Large Decorative Pattern */}
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
              {/* Centered Top Logo */}
              <div className="flex justify-center mb-6">
                <img 
                  src="/images/ahc-health-symbol.png" 
                  alt="AHC Health Symbol" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              
              <p className="text-ahc-green dark:text-ahc-green-light text-md font-semibold mb-4 uppercase tracking-wide">
                Empowering innovation and entrepreneurship in healthcare
              </p>
              <h1 className="text-3xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                Health Entrepreneurship (HENT)
              </h1>
              <p className="text-2xl md:text-3xl mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
                The Health Entrepreneurship Pillar empowers aspiring women and youth entrepreneurs with training, 
                mentorship and financial support to develop innovations, create jobs, and transform the health sector.
              </p>
              
              {/* Keep Reading with Down Arrow */}
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

        {/* Impact of Entrepreneurship Section */}
        <section id="impact" className="py-20 px-4 lg:px-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Top Left */}
            <div className="absolute left-0 top-20 -translate-x-1/4 w-80 h-80 opacity-[0.07]">
              <img 
                src="/images/ahc-health-symbol.png" 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
              />
            </div>
            
            {/* Large AHC Symbol - Bottom Right */}
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
            
            {/* Decorative Triangles - Top */}
            <div className="absolute top-10 left-1/4 w-16 h-16 opacity-15" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute top-32 right-1/3 w-12 h-12 opacity-15" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-green-400 to-teal-500"></div>
            </div>
            
            {/* Decorative Triangles - Bottom */}
            <div className="absolute bottom-20 right-1/4 w-20 h-20 opacity-15" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
              <div className="w-full h-full bg-gradient-to-t from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute bottom-40 left-1/3 w-14 h-14 opacity-15" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
              <div className="w-full h-full bg-gradient-to-t from-green-400 to-emerald-500"></div>
            </div>

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
                  Impact of Entrepreneurship on Africa
                </h3>
                <div className="space-y-4 text-2xl text-gray-700 dark:text-gray-300">
                  <p>
                    As African health sectors grow, health entrepreneurship has immense potential to accelerate that growth 
                    and support better health outcomes by creating self-sustaining market solutions that close gaps in the 
                    health sector, meet community needs, generate revenue, and provide resilience and stability, thereby 
                    creating significant employment opportunities.
                  </p>
                  <p>
                    In addressing these challenges, HENT equips and empowers aspiring entrepreneurs with essential skills and 
                    knowledge, mentorship opportunities, and direct financial support, such as seed funding, fostering a robust 
                    culture of entrepreneurship for their success.
                  </p>
                  <p>
                    Within an African-led framework where health entrepreneurship and health innovation are encouraged and 
                    sufficiently supported, aspiring entrepreneurs are then able to bring their transformative, locally 
                    generated ideas to fruition and create companies, products, services and health-related jobs that 
                    strengthens health sectors.
                  </p>
                  <p>
                    By providing youth with entrepreneurial knowledge and skills, financial support, tools, access to materials, 
                    access to markets, technology, experience and exposure, they will be able to achieve entrepreneurial 
                    self-efficacy and significantly contribute to the Health Sector Network's intertwined goals of strengthening 
                    economies through robust health sectors and employing Africa's youth in stable, dignified jobs.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="rounded-lg overflow-hidden shadow-lg sticky top-8">
                  <img 
                    src="/images/pillars/health-entrepreneurship-mission.jpg" 
                    alt="HENT Cohort" 
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '3/4' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">2022 HENT-AIC Cohort during their visit to Toronto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 lg:px-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <PillarProgramsSection
              category="health_entrepreneurship"
              title="Explore HENT Activities"
            />          </div>
        </section>

        {/* Featured Ventures Section */}
        <section className="py-20 px-4 lg:px-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-ahc-green-dark mb-12">Featured Ventures</h2>
            {isLoadingVentures ? (
              <div className="flex justify-center py-10"><Loader /></div>
            ) : ventures.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ventures.slice(0, 6).map((venture) => (
                <Link
                  key={venture.id}
                  to={`/health-pillars/health-entrepreneurship/ventures/${venture.id}`}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                >
                  {/* Gradient accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                  
                  {/* Badge */}
                  {venture.featured && ( // Assuming 'featured' property exists on Venture type
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-semibold rounded-full shadow-md">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Logo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl mb-4 flex items-center justify-center overflow-hidden shadow-md">
                    {venture.logo ? (
                      <img
                        src={venture.logo}
                        alt={venture.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                        {venture.title.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Name & Tagline */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {venture.title}
                  </h3>
                  {venture.tagline && ( // Assuming 'tagline' property exists on Venture type
                    <p className="text-sm text-teal-600 dark:text-teal-400 mb-3 font-medium">
                      {venture.tagline}
                    </p>
                  )}

                  {/* Focus Area */}
                  <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full mb-4 capitalize">
                    {venture.focusArea.replace("-", " ")}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {venture.description || "Innovative healthcare solution"}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    {venture.country && ( // Assuming 'country' property exists on Venture type
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-teal-500" />
                        <span>{venture.country}</span>
                      </div>
                    )}
                    {venture.team_size && ( // Assuming 'team_size' property exists on Venture type
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-teal-500" />
                        <span>{venture.team_size} team</span>
                      </div>
                    )}
                    {venture.patients_impacted && ( // Assuming 'patients_impacted' property exists on Venture type
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-teal-500" />
                        <span>
                          {venture.patients_impacted.toLocaleString()} patients
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn More →
                    </span>
                    {/* Vote button is removed as it's not part of the featured section interaction */}
                  </div>
                </Link>
              ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">No ventures available at the moment.</p>
            )}
            <div className="text-center mt-12">
              <Link
                to="/health-pillars/health-entrepreneurship/ventures"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-ahc-green hover:bg-ahc-green-dark transition-colors duration-300"
              >
                Show All Ventures
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pillar News Section */}
        <PillarNewsSection
          pillar="health_entrepreneurship"
          title="Health Entrepreneurship Highlights"
          description="Catch up on fresh insights, success stories, and opportunities emerging from the Health Entrepreneurship pillar."
          backgroundClassName="bg-gradient-to-br from-emerald-50 via-white to-teal-100 dark:from-[#0b1120] dark:via-[#0f1729] dark:to-[#020617]"
        />

        {/* Open Innovation Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 p-4 rounded-2xl">
                      <Lightbulb className="h-12 w-12 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Open Innovation</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Bridge the gap between established healthcare organizations and innovative startups. 
                  Our open innovation programs create collaborative ecosystems that drive breakthrough 
                  solutions through strategic partnerships.
                </p>
                <div className="space-y-3 mb-6">
                  {openInnovationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/health-pillars/health-entrepreneurship/contact">
                  <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center group">
                    Learn More <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-teal-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-t-3xl"></div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Success Story</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-3 font-semibold">MedTech Innovation Challenge 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Partnered with 5 major hospitals to identify and pilot 12 innovative solutions, 
                  resulting in 3 successful product deployments and $8M in follow-on funding.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-teal-100 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent mb-1">85+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent mb-1">12</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Pilot Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent mb-1">$8M</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Follow-on Funding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accelerators Section */}

        <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500 rounded-t-3xl"></div>

          {/* Decorative Elements - Right */}
          <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
          </div>

          {/* Decorative Elements - left */}
          <div className="absolute left-0 top-0 w-96 h-96 opacity-20">
            <div className="absolute left-0 top-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 order-2 lg:order-1">
                {/* Gradient accent border */}
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Cohort Overview</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-6 font-semibold">Our proven acceleration model</p>
                <div className="space-y-6">
                  <div>
                    <div className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Phase 1: Foundation (Weeks 1-4)</div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Business model refinement, customer discovery, and market validation
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Phase 2: Growth (Weeks 5-8)</div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Product development, early traction, and metrics optimization
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">Phase 3: Scale (Weeks 9-12)</div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Fundraising preparation, pitch refinement, and investor introductions
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 p-4 rounded-2xl relative overflow-hidden">
                      <Rocket className="w-12 h-12 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Accelerators</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Transform your healthcare startup from early-stage to investment-ready. Our 
                  intensive accelerator program provides the funding, mentorship, and connections 
                  needed to scale rapidly.
                </p>
                <div className="space-y-3 mb-8">
                  {acceleratorFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/health-pillars/health-entrepreneurship/apply">
                  <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                    Apply Now <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative Elements - Right */}
          <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
          </div>

          {/* Decorative Elements - left */}
          <div className="absolute left-0 top-0 w-96 h-96 opacity-20">
            <div className="absolute left-0 top-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 p-4 rounded-2xl relative overflow-hidden">
                      <Users className="w-12 h-12 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Consulting</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Strategic advisory services tailored to your unique challenges. Our experienced 
                  consultants bring deep healthcare industry expertise to help you navigate 
                  complex decisions and achieve your business objectives.
                </p>
                <div className="space-y-3 mb-8">
                  {consultingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/health-pillars/health-entrepreneurship/contact">
                  <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                    Schedule Consultation <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Strategic Planning</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Develop comprehensive strategies aligned with market opportunities and your organizational capabilities.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Growth Advisory</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Scale your operations efficiently with data-driven insights and proven growth frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Center Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
              <img 
                src="/images/ahc-health-symbol.png" 
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Main CTA Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                
                {/* Small decorative AHC Symbol - Top Right */}
                <div className="absolute -top-6 -right-6 w-32 h-32 opacity-5">
                  <img 
                    src="/images/ahc-health-symbol.png" 
                    alt="" 
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center relative z-10">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Ready to Get Started?
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss how our services can accelerate your healthcare innovation journey 
                    and transform your ideas into impactful solutions.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/health-pillars/health-entrepreneurship/contact" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group">
                        Contact Us 
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    
                    <Link to="/health-pillars/health-entrepreneurship/demo" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-white dark:bg-gray-700 border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 dark:hover:bg-gray-600 transition-all duration-300 inline-flex items-center justify-center group">
                        Request Demo 
                        <Rocket className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </Link>
                  </div>

                  {/* Stats or Trust Indicators */}
                  <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">150+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Startups Supported</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">$50M+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Funding Raised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">95%</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </>
  );
}
