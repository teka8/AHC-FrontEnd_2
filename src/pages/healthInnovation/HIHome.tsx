import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Rocket, ChevronDown } from 'lucide-react'
import PillarNewsSection from '../../components/sections/PillarNewsSection'
import PillarProgramsSection from '../../components/sections/PillarProgramsSection'

export default function HIHome() {
  return (
    <>
      <Helmet>
        <title>Health Entrepreneurship (HENT) - AHC</title>
        <meta name="description" content="Empowering innovation and entrepreneurship in healthcare across Africa" />
      </Helmet>

      <div className="overflow-x-hidden max-w-screen box-sizing:border-box">
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

        {/* Image Gallery */}
        <section className="bg-white dark:bg-gray-900 max-w-screen overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-x-hidden">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop" 
                alt="Health entrepreneurs in training" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop" 
                alt="Youth entrepreneurs collaborating" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" 
                alt="Healthcare innovation showcase" 
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

        {/* Partnership Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen">
          
          {/* Decorative Elements - Right */}
          <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
          </div>

          {/* Decorative Elements - left */}
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
                  {/* Icon with decorative triangles */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Target className="w-16 h-16 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Goal</h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      Implement and sustain entrepreneurial ecosystems that launch health start-ups, generate revenue, 
                      and create meaningful employment.
                    </p>
                  </div>
                </div>
              </div>

              {/* How HENT Works Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  {/* Icon with decorative triangles */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Users className="w-16 h-16 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How HENT and Partners work together</h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      Under the Health Entrepreneurship Pillar, Health Collaborative Partners work to co-create, train and 
                      empower a generation of youth and women entrepreneurs to launch health start-ups, generate revenue, 
                      and create meaningful employment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 lg:px-20 bg-white dark:bg-gray-900 relative overflow-hidden min-h-screen">
          
          
          <div className="container mx-auto px-4">
          
            
            <PillarProgramsSection
              category="health_entrepreneurship"
              title="Explore HENT Activities"
            />          </div>
        </section>

        <PillarNewsSection
          pillar="health_entrepreneurship"
          title="Health Entrepreneurship Highlights"
          description="Catch up on fresh insights, success stories, and opportunities emerging from the Health Entrepreneurship pillar."
          backgroundClassName="bg-gradient-to-br from-emerald-50 via-white to-teal-100 dark:from-[#0b1120] dark:via-[#0f1729] dark:to-[#020617]"
        />

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
                    Ready to Transform Healthcare in Africa?
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Join our ecosystem of innovators and entrepreneurs making a lasting impact on health sectors across the continent. 
                    Be part of the change that Africa needs.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/health-pillars/health-entrepreneurship/apply" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group">
                        Apply to Programs 
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    
                    <Link to="/health-pillars/health-entrepreneurship/ventures" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-white dark:bg-gray-700 border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 dark:hover:bg-gray-600 transition-all duration-300 inline-flex items-center justify-center group">
                        Explore Ventures 
                        <Rocket className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </Link>
                  </div>

                  {/* Stats or Trust Indicators */}
                  <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">500+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Entrepreneurs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">50+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">15</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
