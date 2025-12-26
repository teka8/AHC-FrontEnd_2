import { Helmet } from 'react-helmet-async'
import { Shield, ScrollText } from 'lucide-react'
import { getImageWithFallback } from "../../utils/imageUtils";

export default function HITerms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Terms and conditions for using our services" />
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          
          <div className="absolute right-0 top-1/4 translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              {...getImageWithFallback('images/ahc-health-symbol.png')} 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <ScrollText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Terms of Use</h1>
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
                Please read these Terms of Use carefully before using HealthVentures services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <div className="space-y-12">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    By accessing and using HealthVentures' website and services, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">2. Program Participation</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Participation in HealthVentures programs is subject to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                <li>Successful completion of the application process</li>
                <li>Acceptance into a specific program</li>
                <li>Compliance with program-specific requirements and guidelines</li>
                    <li>Execution of program agreements and contracts</li>
                    <li>Adherence to our code of conduct and ethical standards</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">3. Intellectual Property</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    All content on this website, including text, graphics, logos, and software, is the property of HealthVentures or its content suppliers and is protected by intellectual property laws. You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                <li>Reproduce, distribute, or create derivative works without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Access or use our services for competitive purposes</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">4. Venture Intellectual Property</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Participants retain ownership of their intellectual property. However, by participating in our programs, you grant HealthVentures a limited license to showcase your venture for promotional and educational purposes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">5. User Conduct</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    You agree to use our services responsibly and not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Submit false or misleading information</li>
                    <li>Harass, abuse, or harm other participants or staff</li>
                    <li>Interfere with the operation of our services</li>
                    <li>Attempt unauthorized access to our systems</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">6. Funding and Investment</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Any funding or investment provided through HealthVentures programs is subject to separate agreements. These terms do not constitute an offer or guarantee of funding. Investment decisions are made at our sole discretion.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">7. Disclaimer of Warranties</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee program outcomes, funding success, or business results. Participation in our programs does not guarantee venture success.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">8. Limitation of Liability</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, HealthVentures shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or participation in our programs.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">9. Confidentiality</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We respect the confidentiality of your business information. However, information shared during program activities may be disclosed to mentors, partners, and other participants as necessary for program delivery.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">10. Termination</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We reserve the right to terminate or suspend access to our services for violations of these terms, fraudulent activity, or other reasons at our discretion. Participants may also withdraw from programs subject to program-specific terms.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">11. Governing Law</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    These Terms of Use are governed by the laws of Ethiopia. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of Ethiopian courts.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">12. Changes to Terms</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify participants of significant changes via email.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 dark:from-gray-750 dark:to-gray-800 rounded-2xl p-8 shadow-xl border-2 border-teal-300 dark:border-teal-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
                    <Shield className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                    13. Contact Information
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    For questions about these Terms of Use, please contact us:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-3">
                    <p className="text-lg text-gray-700 dark:text-gray-300"><strong className="text-teal-600 dark:text-teal-400">Email:</strong> legal@healthventures.org</p>
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
