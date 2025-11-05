import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Rocket, Target, Users, TrendingUp, Award, Globe, CheckCircle, ArrowRight } from 'lucide-react'

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
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
              <p className="text-xl opacity-90">
                Comprehensive support for health innovators at every stage of their journey
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-ahc-green mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Programs</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Our flagship programs designed to accelerate your health innovation
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {programs.filter(p => p.featured).map((program) => (
                <div key={program.id} className="border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green transition-all hover:shadow-xl p-6">
                  <div className="mb-4">{program.icon}</div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold">{program.name}</h3>
                    <span className="bg-ahc-green text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span>⏱️ {program.duration}</span>
                    <span>📊 {program.commitment}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{program.description}</p>
                  
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
                      <p className="text-sm mb-2"><strong>Ideal for:</strong> {program.ideal}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"><strong>Applications:</strong> {program.applications}</p>
                      <Link to="/health-innovation/apply" className="block w-full">
                        <button className="w-full bg-ahc-green text-white px-6 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition flex items-center justify-center">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
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
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">All Programs</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Additional programs to support your specific needs
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.filter(p => !p.featured).map((program) => (
                <div key={program.id} className="border border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green transition-all hover:shadow-lg p-6">
                  <div className="mb-3">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                  <div className="flex gap-3 text-xs text-gray-600 dark:text-gray-400 mb-2">
                    <span>⏱️ {program.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                  
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
                    
                    <Link to="/health-innovation/apply">
                      <button className="w-full border border-ahc-green text-ahc-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-ahc-green hover:text-white transition">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-ahc-green/10 to-green-600/10 border-2 border-ahc-green rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Not Sure Which Program is Right for You?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our team to find the perfect fit for your venture
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/health-innovation/demo">
                  <button className="bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition">
                    Schedule Consultation
                  </button>
                </Link>
                <Link to="/health-innovation/apply">
                  <button className="border-2 border-ahc-green text-ahc-green px-8 py-3 rounded-lg font-medium hover:bg-ahc-green hover:text-white transition">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
