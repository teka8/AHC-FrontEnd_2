import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Lightbulb, Rocket, Users, TrendingUp, Target, CheckCircle, ArrowRight } from 'lucide-react'

export default function HIServices() {
  const openInnovationFeatures = [
    'Corporate partnership programs',
    'Innovation challenges and hackathons',
    'Technology scouting and trend analysis',
    'Pilot program facilitation',
    'IP and licensing support',
    'Co-development opportunities',
  ]

  const acceleratorFeatures = [
    '12-week intensive program',
    'Seed funding up to $150K',
    'Expert mentorship network',
    'Product-market fit workshops',
    'Investor pitch preparation',
    'Demo day presentation',
  ]

  const consultingFeatures = [
    'Strategy development and planning',
    'Market entry and expansion',
    'Regulatory pathway guidance',
    'Business model optimization',
    'Fundraising strategy and support',
    'Team building and HR consulting',
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Comprehensive support solutions for healthcare innovation" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl opacity-90">
                Comprehensive support solutions designed to accelerate healthcare innovation 
                from concept to market impact
              </p>
            </div>
          </div>
        </section>

        {/* Open Innovation Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-12 w-12 text-ahc-green" />
                  <h2 className="text-3xl md:text-4xl font-bold">Open Innovation</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Bridge the gap between established healthcare organizations and innovative startups. 
                  Our open innovation programs create collaborative ecosystems that drive breakthrough 
                  solutions through strategic partnerships.
                </p>
                <div className="space-y-3 mb-6">
                  {openInnovationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-ahc-green mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/health-innovation/contact">
                  <button className="bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-ahc-green transition">
                <h3 className="text-xl font-bold mb-2">Success Story</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">MedTech Innovation Challenge 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Partnered with 5 major hospitals to identify and pilot 12 innovative solutions, 
                  resulting in 3 successful product deployments and $8M in follow-on funding.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-2xl font-bold text-ahc-green">85+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Applications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ahc-green">12</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Pilot Programs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ahc-green">$8M</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Follow-on Funding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accelerators Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-ahc-green transition order-2 lg:order-1">
                <h3 className="text-xl font-bold mb-2">Cohort Overview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Our proven acceleration model</p>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-1">Phase 1: Foundation (Weeks 1-4)</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Business model refinement, customer discovery, and market validation
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phase 2: Growth (Weeks 5-8)</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Product development, early traction, and metrics optimization
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phase 3: Scale (Weeks 9-12)</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fundraising preparation, pitch refinement, and investor introductions
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="h-12 w-12 text-ahc-green" />
                  <h2 className="text-3xl md:text-4xl font-bold">Accelerators</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Transform your healthcare startup from early-stage to investment-ready. Our 
                  intensive accelerator program provides the funding, mentorship, and connections 
                  needed to scale rapidly.
                </p>
                <div className="space-y-3 mb-6">
                  {acceleratorFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-ahc-green mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/health-innovation/apply">
                  <button className="bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition inline-flex items-center">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-12 w-12 text-ahc-green" />
                  <h2 className="text-3xl md:text-4xl font-bold">Consulting</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Strategic advisory services tailored to your unique challenges. Our experienced 
                  consultants bring deep healthcare industry expertise to help you navigate 
                  complex decisions and achieve your business objectives.
                </p>
                <div className="space-y-3 mb-6">
                  {consultingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-ahc-green mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/health-innovation/contact">
                  <button className="bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition inline-flex items-center">
                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="grid gap-4">
                <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-ahc-green transition">
                  <Target className="h-8 w-8 text-ahc-green mb-2" />
                  <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Develop comprehensive strategies aligned with market opportunities and your organizational capabilities.
                  </p>
                </div>
                <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-ahc-green transition">
                  <TrendingUp className="h-8 w-8 text-ahc-green mb-2" />
                  <h3 className="text-xl font-bold mb-2">Growth Advisory</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Scale your operations efficiently with data-driven insights and proven growth frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-ahc-green to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our services can accelerate your healthcare innovation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/health-innovation/contact">
                <button className="bg-white text-ahc-green px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                  Contact Us
                </button>
              </Link>
              <Link to="/health-innovation/demo">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-ahc-green transition">
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
