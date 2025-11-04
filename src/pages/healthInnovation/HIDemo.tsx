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
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Demo</h1>
              <p className="text-xl opacity-90">
                Discover how our programs can accelerate your health innovation journey
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Schedule Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition flex items-center justify-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Request Demo
                  </button>
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Our team will reach out within 24 hours to schedule a personalized consultation where we'll:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="bg-ahc-green/10 p-3 rounded-lg h-fit">
                      <Users className="h-6 w-6 text-ahc-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Understand Your Needs</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Learn about your venture, goals, and challenges to recommend the best program fit
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-ahc-green/10 p-3 rounded-lg h-fit">
                      <Rocket className="h-6 w-6 text-ahc-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Showcase Our Programs</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Detailed walkthrough of our accelerator, partnership, and consulting services
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-ahc-green/10 p-3 rounded-lg h-fit">
                      <CheckCircle className="h-6 w-6 text-ahc-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Define Next Steps</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Create a clear action plan for your journey with HealthVentures
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-ahc-green/10 to-green-600/10 border-2 border-ahc-green/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Success Stories</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-ahc-green pl-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        "The consultation helped us identify the perfect program. Within 6 months, we raised $2.5M Series A."
                      </p>
                      <p className="text-xs font-semibold">- MindCare AI, 2024 Cohort</p>
                    </div>
                    <div className="border-l-4 border-ahc-green pl-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        "Their team's expertise in healthcare regulations saved us months of work."
                      </p>
                      <p className="text-xs font-semibold">- BioScan Labs, Consulting Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Prefer to Talk Immediately?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our team is available Monday through Friday, 9am - 5pm EAT
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+251111234567">
                  <button className="bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition">
                    Call Us Now
                  </button>
                </a>
                <a href="mailto:info@healthventures.org">
                  <button className="border-2 border-ahc-green text-ahc-green px-8 py-3 rounded-lg font-medium hover:bg-ahc-green hover:text-white transition">
                    Send Email
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
