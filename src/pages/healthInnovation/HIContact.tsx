import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

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

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
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
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green dark:bg-gray-800"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-ahc-green text-white px-8 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Whether you're looking to apply to our programs, partner with us, or just want to learn more about what we do, we're here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-ahc-green/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-ahc-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">info@healthventures.org</p>
                      <p className="text-gray-600 dark:text-gray-400">apply@healthventures.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-ahc-green/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-ahc-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+251 11 123 4567</p>
                      <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9am - 5pm EAT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-ahc-green/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-ahc-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Addis Ababa University<br />
                        College of Health Sciences<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-ahc-green/5 rounded-lg border border-ahc-green/20">
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
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
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-ahc-dark">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
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
