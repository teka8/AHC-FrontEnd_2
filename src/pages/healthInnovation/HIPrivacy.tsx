import { Helmet } from 'react-helmet-async'
import { Shield, Lock } from 'lucide-react'

export default function HIPrivacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Our privacy policy and data protection practices" />
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
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                At HealthVentures, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <div className="space-y-12">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>Name, email address, and contact information</li>
                    <li>Organization details and professional information</li>
                    <li>Application materials and business plans</li>
                    <li>Communication preferences and feedback</li>
                    <li>Usage data and analytics from our website</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>Process and evaluate program applications</li>
                    <li>Provide support and communicate with participants</li>
                    <li>Improve our programs and services</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Analyze website usage and enhance user experience</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Data Protection and Security</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Information Sharing</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>Program mentors and partners (with your consent)</li>
                    <li>Service providers who assist our operations</li>
                    <li>Legal authorities when required by law</li>
                    <li>Potential investors (only with explicit permission)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Withdraw consent for marketing communications</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Cookies and Tracking</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Data Retention</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Children's Privacy</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Changes to This Policy</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 dark:from-gray-750 dark:to-gray-800 rounded-2xl p-8 shadow-xl border-2 border-teal-300 dark:border-teal-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <Shield className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                    Contact Us
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-3">
                    <p className="text-lg text-gray-700 dark:text-gray-300"><strong className="text-teal-600 dark:text-teal-400">Email:</strong> privacy@healthventures.org</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"><strong className="text-teal-600 dark:text-teal-400">Phone:</strong> +251 11 123 4567</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"><strong className="text-teal-600 dark:text-teal-400">Address:</strong> Addis Ababa University, College of Health Sciences, Addis Ababa, Ethiopia</p>
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
