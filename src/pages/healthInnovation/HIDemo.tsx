import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, Users, Rocket, CheckCircle } from 'lucide-react'

export default function HIDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo request submitted:', formData)
    // Add form submission logic here
  }

  return (
    <>
      <Helmet>
        <title>Request Demo - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Schedule a demo to learn more about our programs" />
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
                <Calendar className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Request a Demo
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Discover how our programs can accelerate your health innovation journey
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Form */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Schedule Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      Organization/Startup Name *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="">Select your role</option>
                      <option value="founder">Founder/Co-founder</option>
                      <option value="ceo">CEO/Executive</option>
                      <option value="product">Product Manager</option>
                      <option value="investor">Investor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="">Select program interest</option>
                      <option value="accelerator">Health Innovation Accelerator</option>
                      <option value="corporate">Corporate Innovation Partnership</option>
                      <option value="fellowship">Global Health Fellowship</option>
                      <option value="bootcamp">Digital Health Bootcamp</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your venture (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Request Demo
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What to Expect</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Our team will reach out within 24 hours to schedule a personalized consultation where we'll:
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center shadow-md">
                          <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Understand Your Needs</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Learn about your venture, goals, and challenges to recommend the best program fit
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center shadow-md">
                          <Rocket className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Showcase Our Programs</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Detailed walkthrough of our accelerator, partnership, and consulting services
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center shadow-md">
                          <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Define Next Steps</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Create a clear action plan for your journey with HealthVentures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-3xl p-8 shadow-lg">
                  <h3 className="font-bold mb-6 text-xl text-gray-900 dark:text-white">Success Stories</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-teal-500 pl-6 py-2">
                      <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                        "The consultation helped us identify the perfect program. Within 6 months, we raised $2.5M Series A."
                      </p>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">- MindCare AI, 2024 Cohort</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-6 py-2">
                      <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                        "Their team's expertise in healthcare regulations saved us months of work."
                      </p>
                      <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">- BioScan Labs, Consulting Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Prefer to Talk Immediately?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  Our team is available Monday through Friday, 9am - 5pm EAT
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+251111234567" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Call Us Now
                    </button>
                  </a>
                  <a href="mailto:info@healthventures.org" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-white dark:bg-gray-700 border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 dark:hover:bg-gray-600 transition-all duration-300">
                      Send Email
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
