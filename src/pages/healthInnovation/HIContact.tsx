import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { useSubmitContactMessageMutation } from '../../features/contact/contactApi'

export default function HIContact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [submitContact, { isLoading }] = useSubmitContactMessageMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await submitContact(formData).unwrap()
      setSuccessMessage(response.message)
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error: any) {
      if (error?.data?.message) {
        setErrorMessage(error.data.message)
      } else if (error?.data?.errors) {
        const errors = Object.values(error.data.errors).flat()
        setErrorMessage(errors.join(' '))
      } else {
        setErrorMessage('Something went wrong. Please try again later.')
      }
    }
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
                
                {/* Success Message */}
                {successMessage && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-green-800 dark:text-green-300">{successMessage}</p>
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800 dark:text-red-300">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-base font-semibold mb-2 text-gray-900 dark:text-white">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-base font-semibold mb-2 text-gray-900 dark:text-white">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        disabled={isLoading}
                      />
                    </div>
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
                      disabled={isLoading}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
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

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
