import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, TrendingUp, Award, Globe, Heart, Rocket } from 'lucide-react'

export default function HIHome() {
  return (
    <>
      <Helmet>
        <title>Health Innovation & Entrepreneurship - AHC</title>
        <meta name="description" content="Empowering health startups and ventures across Africa" />
      </Helmet>

      <div>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-ahc-green to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                Transforming Healthcare Through Innovation
              </h1>
              <p className="text-xl mb-8">
                Supporting African health startups to scale their impact and reach millions
              </p>
              <div className="flex gap-4">
                <Link
                  to="/health-innovation/apply"
                  className="bg-white text-ahc-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Apply Now
                </Link>
                <Link
                  to="/health-innovation/ventures"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ahc-green transition"
                >
                  View Ventures
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-ahc-green mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Ventures Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ahc-green mb-2">$5M+</div>
                <div className="text-gray-600 dark:text-gray-400">Total Funding Raised</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ahc-green mb-2">100K+</div>
                <div className="text-gray-600 dark:text-gray-400">Patients Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ahc-green mb-2">15</div>
                <div className="text-gray-600 dark:text-gray-400">Countries Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Comprehensive support for health ventures at every stage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green hover:shadow-lg transition">
                <Heart className="h-12 w-12 text-ahc-green mb-4" />
                <h3 className="text-xl font-semibold mb-3">Health-Focused Accelerator</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Specialized programs designed for healthcare innovations with expert mentorship
                </p>
              </div>
              <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green hover:shadow-lg transition">
                <Award className="h-12 w-12 text-ahc-green mb-4" />
                <h3 className="text-xl font-semibold mb-3">Funding & Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Financial support and educational opportunities for aspiring health entrepreneurs
                </p>
              </div>
              <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green hover:shadow-lg transition">
                <Users className="h-12 w-12 text-ahc-green mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with mentors, advisors, and partners across the healthcare ecosystem
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-ahc-green to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Healthcare?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our ecosystem of innovators and make a lasting impact on global health
            </p>
            <Link to="/health-innovation/apply">
              <button className="bg-white text-ahc-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center">
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
