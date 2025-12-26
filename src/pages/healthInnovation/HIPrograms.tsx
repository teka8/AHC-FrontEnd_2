import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Rocket, Target, Users, TrendingUp, Award, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import { getImageWithFallback } from "../../utils/imageUtils";

const programs = [
  {
    id: 1,
    name: 'Health Innovation Accelerator',
    icon: <Rocket className="h-12 w-12 text-ahc-green" />,
    duration: '12 weeks',
    commitment: 'Full-time',
    description: 'Intensive program for early-stage health startups ready to scale',
    benefits: [
      '$50K-$150K funding',
      'Expert mentorship network',
      'Office space & resources',
      'Demo day with investors',
      'Go-to-market strategy',
    ],
    ideal: 'Pre-seed to Seed stage startups with MVP',
    applications: 'Rolling admissions',
    featured: true,
  },
  {
    id: 2,
    name: 'Corporate Innovation Partnership',
    icon: <Target className="h-12 w-12 text-ahc-green" />,
    duration: '6-12 months',
    commitment: 'Flexible',
    description: 'Connect health startups with corporate partners for pilots and POCs',
    benefits: [
      'Corporate partnership matching',
      'Pilot funding support',
      'Technical integration help',
      'Contract negotiation support',
      'Scale-up opportunities',
    ],
    ideal: 'Growth stage startups seeking enterprise clients',
    applications: 'Quarterly cohorts',
    featured: true,
  },
  {
    id: 3,
    name: 'Global Health Fellowship',
    icon: <Globe className="h-12 w-12 text-ahc-green" />,
    duration: '6 months',
    commitment: 'Part-time',
    description: 'Support for health solutions addressing global health challenges',
    benefits: [
      'International network access',
      'Regulatory guidance',
      'Field testing support',
      'Impact measurement tools',
      'Grant writing assistance',
    ],
    ideal: 'Ventures focused on emerging markets',
    applications: 'Applications open Jan & July',
    featured: false,
  },
  {
    id: 4,
    name: 'Digital Health Bootcamp',
    icon: <Users className="h-12 w-12 text-ahc-green" />,
    duration: '8 weeks',
    commitment: 'Part-time',
    description: 'Learn the fundamentals of building a digital health business',
    benefits: [
      'Curriculum from industry experts',
      'Peer learning community',
      'Business model development',
      'Pitch practice sessions',
      'Certificate of completion',
    ],
    ideal: 'First-time founders and early ideas',
    applications: 'Monthly cohorts',
    featured: false,
  },
  {
    id: 5,
    name: 'Scale-Up Program',
    icon: <TrendingUp className="h-12 w-12 text-ahc-green" />,
    duration: '6 months',
    commitment: 'Flexible',
    description: 'Growth-focused support for proven health ventures',
    benefits: [
      'Series A+ fundraising prep',
      'Executive coaching',
      'Strategic partnerships',
      'International expansion support',
      'Talent recruitment help',
    ],
    ideal: 'Post-revenue companies raising Series A+',
    applications: 'Rolling admissions',
    featured: false,
  },
  {
    id: 6,
    name: 'Student Innovation Lab',
    icon: <Award className="h-12 w-12 text-ahc-green" />,
    duration: 'Ongoing',
    commitment: 'Flexible',
    description: 'University partnerships fostering next-gen health innovators',
    benefits: [
      'Project funding up to $10K',
      'Mentorship from professionals',
      'Access to university resources',
      'Scholarship opportunities',
      'Career development support',
    ],
    ideal: 'University students with health tech ideas',
    applications: 'Open year-round',
    featured: false,
  },
]

const stats = [
  { label: 'Ventures Supported', value: '500+' },
  { label: 'Total Funding Raised', value: '$250M+' },
  { label: 'Countries Reached', value: '45+' },
  { label: 'Success Rate', value: '78%' },
]

export default function HIPrograms() {
  return (
    <>
      <Helmet>
        <title>Our Programs - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Comprehensive support for health innovators at every stage" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Programs
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Comprehensive support for health innovators at every stage of their journey. 
                From ideation to scale, we're here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-100 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20 bg-gradient-to-br from-teal-50/50 via-white to-green-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Featured Programs</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our flagship programs designed to accelerate your health innovation from concept to market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
              {programs.filter(p => p.featured).map((program) => (
                <div key={program.id} className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden border border-teal-100 dark:border-gray-700">
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-400"></div>
                  
                  {/* Icon with decorative styling */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 p-4 rounded-2xl">
                      {program.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{program.name}</h3>
                    <span className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Featured</span>
                  </div>
                  
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">⏱️ {program.duration}</span>
                    <span className="flex items-center gap-1">📊 {program.commitment}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Program Benefits:</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-ahc-green mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 mb-4">
                        <p className="text-sm mb-2"><strong className="text-teal-700 dark:text-teal-300">Ideal for:</strong> {program.ideal}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"><strong className="text-teal-700 dark:text-teal-300">Applications:</strong> {program.applications}</p>
                      </div>
                      
                      <Link to="/health-pillars/health-entrepreneurship/apply" className="block w-full">
                        <button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
                          Apply Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">All Programs</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Additional specialized programs designed to support your unique needs at every stage
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {programs.filter(p => !p.featured).map((program) => (
                <div key={program.id} className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all hover:shadow-xl p-6">
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl">
                      {program.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{program.name}</h3>
                  
                  <div className="flex gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">⏱️ {program.duration}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {program.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-xs">
                            <CheckCircle className="h-3 w-3 text-ahc-green mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to="/health-pillars/health-entrepreneurship/apply">
                      <button className="w-full border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                
                {/* Small decorative AHC Symbol */}
                <div className="absolute -top-6 -right-6 w-32 h-32 opacity-5">
                  <img 
                    {...getImageWithFallback('images/ahc-health-symbol.png')} 
                    alt="" 
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center relative z-10">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Not Sure Which Program is Right for You?
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Schedule a consultation with our team to find the perfect fit for your venture. 
                    We're here to guide you on your health innovation journey.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/health-pillars/health-entrepreneurship/demo" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group">
                        Schedule Consultation 
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    
                    <Link to="/health-pillars/health-entrepreneurship/apply" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-white dark:bg-gray-700 border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 dark:hover:bg-gray-600 transition-all duration-300">
                        Apply Now
                      </button>
                    </Link>
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
