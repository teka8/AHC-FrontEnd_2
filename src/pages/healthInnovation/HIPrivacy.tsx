import { Helmet } from 'react-helmet-async'

export default function HIPrivacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Our privacy policy and data protection practices" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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
                At HealthVentures, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Name, email address, and contact information</li>
                <li>Organization details and professional information</li>
                <li>Application materials and business plans</li>
                <li>Communication preferences and feedback</li>
                <li>Usage data and analytics from our website</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Process and evaluate program applications</li>
                <li>Provide support and communicate with participants</li>
                <li>Improve our programs and services</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Analyze website usage and enhance user experience</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection and Security</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Program mentors and partners (with your consent)</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Potential investors (only with explicit permission)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> privacy@healthventures.org</p>
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
