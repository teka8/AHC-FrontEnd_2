import { Helmet } from 'react-helmet-async'
import React from 'react'
import { Users, Target, Heart, Globe, Award, TrendingUp } from 'lucide-react'

export default function HIAbout() {
  const teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'Founder & CEO', description: '20+ years in healthcare innovation' },
    { name: 'Michael Chen', role: 'Chief Investment Officer', description: 'Former VP at leading health fund' },
    { name: 'Dr. Emily Rodriguez', role: 'Head of Programs', description: 'PhD in Public Health' },
    { name: 'David Kim', role: 'Director of Operations', description: 'Healthcare consultant' },
  ]

  const values = [
    { icon: <Heart className="h-12 w-12 text-ahc-green" />, title: 'Patient-Centered', description: 'Every innovation must improve patient outcomes' },
    { icon: <Globe className="h-12 w-12 text-ahc-green" />, title: 'Global Impact', description: 'Healthcare solutions that transcend borders' },
    { icon: <Award className="h-12 w-12 text-ahc-green" />, title: 'Excellence', description: 'Supporting only the highest quality ventures' },
    { icon: <Users className="h-12 w-12 text-ahc-green" />, title: 'Collaboration', description: 'Building a supportive ecosystem together' },
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Learn about our mission to empower health innovation" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
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
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                About HealthVentures
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Pioneering the future of healthcare through strategic investment, 
                innovation support, and ecosystem development since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen">
          {/* Decorative Elements - Right */}
          <div className="absolute right-0 bottom-0 w-96 h-96 opacity-20">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
          </div>

          {/* Decorative Elements - left */}
          <div className="absolute left-0 top-0 w-96 h-96 opacity-20">
            <div className="absolute left-0 top-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:py-20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col items-start gap-4">
                  {/* Icon with decorative triangles */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Target className="w-10 h-10 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      To accelerate breakthrough healthcare innovations that address the world's 
                      most pressing health challenges by providing capital, expertise, and a 
                      supportive ecosystem for visionary entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:py-20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col items-start gap-4">
                  {/* Icon with decorative triangles */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <TrendingUp className="w-10 h-10 text-white relative z-10" />
                      {/* Small decorative triangles around icon */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-400 opacity-70" style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      A world where every promising healthcare innovation has the resources and 
                      support needed to reach patients, creating a healthier, more equitable 
                      future for all communities globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
                  {/* Gradient accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(value.icon as React.ReactElement, { 
                        className: "h-8 w-8 text-teal-600 dark:text-teal-400" 
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-green-500 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 text-center mb-3 font-semibold">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: '9+', label: 'Years of Impact' },
                { value: '150+', label: 'Ventures Supported' },
                { value: '$50M+', label: 'Capital Deployed' },
                { value: '45+', label: 'Countries Reached' },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
