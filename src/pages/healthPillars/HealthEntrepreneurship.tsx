import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Rocket, ChevronDown, Lightbulb, CheckCircle, TrendingUp, MapPin, ThumbsUp, Linkedin, Twitter } from 'lucide-react';
import PillarNewsSection from '../../components/sections/PillarNewsSection';
import PillarProgramsSection from '../../components/sections/PillarProgramsSection';
import { useGetProgramsQuery } from '../../features/healthPillars/programsApi';
import { useGetVenturesQuery } from '../../features/healthInnovation/venturesApi';
import type { ProgramItem } from '../../features/healthPillars/programsApi';
import type { Venture } from '../../features/healthInnovation/types';
import Loader from '../../components/Loader';

export default function HealthEntrepreneurship() {
  // const { data: programsData = [], isLoading: isLoadingPrograms } = useGetProgramsQuery({ category: 'health_entrepreneurship' });
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
                The HENT pillar focuses on building robust entrepreneurial ecosystems within Ethiopian universities to accelerate health innovation, strengthen primary health care, and create meaningful employment particularly for youth and women. By fostering health-focused start-ups, HENT aims to address critical gaps in accessibility, affordability, and quality of care across the country.
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

        {/* Image Gallery */}
        <section className="bg-white dark:bg-gray-900 max-w-screen overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-x-hidden">
          <div className="aspect-square overflow-hidden">
            <img 
              src="/images/pillars/health-entrepreneurship-galary_1.jpg" 
              alt="Health system building in Africa" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="/images/pillars/health-entrepreneurship-galary_2.jpg" 
              alt="Healthcare professionals collaborating" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img 
              src="/images/pillars/health-entrepreneurship-galary_3.jpg" 
              alt="Community health workers" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
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
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
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
                  <p>As part of this initiative, AAU and its local implementing partner universities:</p>
                <ul className='list-disc pl-20 text-lg text-gray-700 dark:text-gray-300 pt-6'>
                  <li className='pb-2'>Establish on-campus entrepreneurial training hubs/centers that offer advanced, innovative training programs in health entrepreneurship to equip students and professionals with the skills needed to develop impactful health solutions.</li>
                  <li className='pb-2'>Develop innovation incubation hubs that provide mentorship, technical support, financial assistance, and charitable seed funding, enabling aspiring innovators to launch sustainable, community-based ventures.</li>
                  <li className='pb-2'>Build a collaborative entrepreneurial network across partner universities to strengthen knowledge exchange, resource sharing, and joint innovation, creating a vibrant ecosystem that supports health-focused start-ups from ideation to implementation.</li>
                </ul>
                <p>Through these efforts, HENT drives a culture of innovation and empowers the next generation of health entrepreneurs to deliver solutions that improve primary healthcare services nationwide.</p>
              
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
        
        {/* Pillar News Section */}
        <PillarNewsSection
          pillar="health_entrepreneurship"
          title="Latest Health Entrepreneurship News"
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
        <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Top Right */}
            <div className="absolute right-0 top-10 translate-x-1/4 w-80 h-80 opacity-[0.06]">
              <img 
                src="/images/ahc-health-symbol.png" 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
              />
            </div>
            
            {/* Large AHC Symbol - Bottom Left */}
            <div className="absolute left-0 bottom-10 -translate-x-1/4 w-72 h-72 opacity-[0.05]">
              <img 
                src="/images/ahc-health-symbol.png" 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-green-200/20 dark:from-teal-600/10 dark:to-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-200/20 to-emerald-200/20 dark:from-green-600/10 dark:to-emerald-600/10 rounded-full blur-3xl"></div>
            
            {/* Decorative Triangles */}
            <div className="absolute top-16 right-1/4 w-14 h-14 opacity-15" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute bottom-24 left-1/4 w-18 h-18 opacity-15" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
              <div className="w-full h-full bg-gradient-to-t from-green-400 to-teal-500"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]" 
              style={{ 
                backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Cohort Overview Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 order-2 lg:order-1 relative overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Cohort Overview</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-6 font-semibold">Our proven acceleration model</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">1</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-lg text-gray-900 dark:text-white">Foundation (Weeks 1-4)</div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Business model refinement, customer discovery, and market validation
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">2</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-lg text-gray-900 dark:text-white">Growth (Weeks 5-8)</div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Product development, early traction, and metrics optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">3</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-lg text-gray-900 dark:text-white">Scale (Weeks 9-12)</div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Fundraising preparation, pitch refinement, and investor introductions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 p-4 rounded-2xl overflow-hidden">
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
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* <Link to="#">
                  <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                    Apply Now <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Top Left */}
            <div className="absolute left-0 top-10 -translate-x-1/4 w-72 h-72 opacity-[0.04]">
              <img 
                src="/images/ahc-health-symbol.png" 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
              />
            </div>
            
            {/* Large AHC Symbol - Bottom Right */}
            <div className="absolute right-0 bottom-10 translate-x-1/4 w-80 h-80 opacity-[0.03]">
              <img 
                src="/images/ahc-health-symbol.png" 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-br from-teal-100/30 to-green-100/30 dark:from-teal-600/5 dark:to-green-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-green-100/30 to-emerald-100/30 dark:from-green-600/5 dark:to-emerald-600/5 rounded-full blur-3xl"></div>
            
            {/* Decorative Triangles */}
            <div className="absolute top-20 left-1/3 w-12 h-12 opacity-10" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute bottom-32 right-1/3 w-16 h-16 opacity-10" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
              <div className="w-full h-full bg-gradient-to-t from-green-400 to-teal-500"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Content Side */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-teal-400 to-teal-600 p-4 rounded-2xl overflow-hidden">
                      <Users className="w-12 h-12 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Consulting</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Strategic advisory services tailored to your unique challenges. Our experienced 
                  consultants bring deep healthcare industry expertise to help you navigate 
                  complex decisions and achieve your business objectives.
                </p>
                <div className="space-y-3 mb-8">
                  {consultingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
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

              {/* Cards Side */}
              <div className="grid gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-teal-100 dark:border-gray-700">
                  {/* Gradient accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Strategic Planning</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Develop comprehensive strategies aligned with market opportunities and your organizational capabilities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-green-100 dark:border-gray-700">
                  {/* Gradient accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-green-500"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
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
        {/* Key Contacts Section */}
              <div className="relative py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Large AHC Symbols */}
                  <div className="absolute left-0 -translate-x-1/3 w-70 h-70 opacity-[0.06]">
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
                      Get in touch with our dedicated team members who are driving the Health Entrepreneurship pillar forward.
                    </p>
                  </div>
        
                  {/* Contacts Grid */}
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Card 1 */}
                    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Avatar Container */}
                        <div className="relative mb-6">
                          <div className="relative inline-block">
                            <img 
                              src="/images/pillars/kebede-wondu.jpg" 
                              alt="Kebede Wondu" 
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
                            Kebede Wondu
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">Health Entrepreneurship Pillar Lead</p>
                          <p className="text-green-600 dark:text-green-400 font-medium mb-6">Health Entrepreneurship Pillar</p>
        
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
        
                    {/* Contact Card 2 */}
                    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Avatar Container */}
                        <div className="relative mb-6">
                          <div className="relative inline-block">
                            <img 
                              src="/images/pillars/buzeye-zegeye.jpg" 
                              alt="Buzeye Zegeye" 
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
                            Buzeye Zegeye
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">Entrepreneurship Expert</p>
                          <p className="text-green-600 dark:text-green-400 font-medium mb-6">Health Entrepreneurship Pillar</p>
        
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
                              href="mailto:suying@example.com" 
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
                    <button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center group">
                      <Link to={"/ahcleaders"} className='flex items-center'>
                      View Full Team Directory
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      </Link>
                    </button>
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
        </section>
      </div>
      </>
  );
}
