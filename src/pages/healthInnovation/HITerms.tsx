import { Helmet } from 'react-helmet-async'

export default function HITerms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Terms and conditions for using our services" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
              <p className="text-xl opacity-90">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Please read these Terms of Use carefully before using HealthVentures services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                By accessing and using HealthVentures' website and services, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Program Participation</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Participation in HealthVentures programs is subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Successful completion of the application process</li>
                <li>Acceptance into a specific program</li>
                <li>Compliance with program-specific requirements and guidelines</li>
                <li>Execution of program agreements and contracts</li>
                <li>Adherence to our code of conduct and ethical standards</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All content on this website, including text, graphics, logos, and software, is the property of HealthVentures or its content suppliers and is protected by intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Reproduce, distribute, or create derivative works without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Access or use our services for competitive purposes</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Venture Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Participants retain ownership of their intellectual property. However, by participating in our programs, you grant HealthVentures a limited license to showcase your venture for promotional and educational purposes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. User Conduct</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You agree to use our services responsibly and not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Submit false or misleading information</li>
                <li>Harass, abuse, or harm other participants or staff</li>
                <li>Interfere with the operation of our services</li>
                <li>Attempt unauthorized access to our systems</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Funding and Investment</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Any funding or investment provided through HealthVentures programs is subject to separate agreements. These terms do not constitute an offer or guarantee of funding. Investment decisions are made at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee program outcomes, funding success, or business results. Participation in our programs does not guarantee venture success.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                To the maximum extent permitted by law, HealthVentures shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or participation in our programs.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Confidentiality</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We respect the confidentiality of your business information. However, information shared during program activities may be disclosed to mentors, partners, and other participants as necessary for program delivery.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Termination</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We reserve the right to terminate or suspend access to our services for violations of these terms, fraudulent activity, or other reasons at our discretion. Participants may also withdraw from programs subject to program-specific terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                These Terms of Use are governed by the laws of Ethiopia. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of Ethiopian courts.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify participants of significant changes via email.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> legal@healthventures.org</p>
                <p className="mb-2"><strong>Phone:</strong> +251 11 123 4567</p>
                <p><strong>Address:</strong> Addis Ababa University, College of Health Sciences, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
