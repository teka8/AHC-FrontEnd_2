import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function HIContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Get in touch with our team" />
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          
          <div className="absolute right-0 top-1/4 translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-3xl p-8 shadow-xl">
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold mb-2 text-gray-900 dark:text-white">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold mb-2 text-gray-900 dark:text-white">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-base font-semibold mb-2 text-gray-900 dark:text-white">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-base font-semibold mb-2 text-gray-900 dark:text-white">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
                  <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Whether you're looking to apply to our programs, partner with us, or just want to learn more about what we do, we're here to help.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-700 dark:to-gray-750 hover:shadow-md transition-shadow">
                      <div className="bg-gradient-to-br from-teal-400 to-green-500 p-3 rounded-xl shadow-md">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-700 dark:text-gray-300">info@healthventures.org</p>
                        <p className="text-gray-700 dark:text-gray-300">apply@healthventures.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-750 hover:shadow-md transition-shadow">
                      <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-xl shadow-md">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-700 dark:text-gray-300">+251 11 123 4567</p>
                        <p className="text-gray-700 dark:text-gray-300">Mon-Fri: 9am - 5pm EAT</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-700 dark:to-gray-750 hover:shadow-md transition-shadow">
                      <div className="bg-gradient-to-br from-teal-400 to-green-500 p-3 rounded-xl shadow-md">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Address</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Addis Ababa University<br />
                          College of Health Sciences<br />
                          Addis Ababa, Ethiopia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 dark:from-gray-750 dark:to-gray-800 rounded-3xl p-8 shadow-xl border-2 border-teal-300 dark:border-teal-700">
                  <h3 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white">Office Hours</h3>
                  <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                    <p className="flex justify-between"><span className="font-semibold">Monday - Friday:</span> <span>9:00 AM - 5:00 PM</span></p>
                    <p className="flex justify-between"><span className="font-semibold">Saturday:</span> <span>10:00 AM - 2:00 PM</span></p>
                    <p className="flex justify-between"><span className="font-semibold">Sunday:</span> <span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50 to-green-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute left-0 bottom-0 w-96 h-96 opacity-20">
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-teal-600" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 0)' }}></div>
          </div>
          <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
            <div className="absolute right-0 top-0 w-64 h-64 bg-green-600" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: 'How do I apply to your programs?',
                    answer: 'You can apply through our application portal. Visit the Programs page to see all available programs and their specific requirements.',
                  },
                  {
                    question: 'What types of ventures do you support?',
                    answer: 'We support health technology startups across various stages, from early-stage ideas to growth-stage companies looking to scale.',
                  },
                  {
                    question: 'Do you provide funding?',
                    answer: 'Yes, selected programs include funding ranging from $10K to $150K depending on the stage and program type.',
                  },
                  {
                    question: 'Can international startups apply?',
                    answer: 'Absolutely! We welcome applications from health innovators across Africa and globally.',
                  },
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500 hover:border-green-500"
                  >
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
