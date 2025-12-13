import { Link } from 'react-router-dom';
import { useGetCompanyInfoQuery } from '../features/settings/companyInfoApi';

/**
 * Privacy Policy Page
 * Basic privacy policy template
 */
export function PrivacyPolicy() {
  const { data: companyInfo } = useGetCompanyInfoQuery();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated: December 13, 2024
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 space-y-6">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Personal information (name, email address)</li>
              <li>Usage data via cookies and analytics</li>
              <li>Device information (browser type, IP address)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Understand how you use our website</li>
              <li>Communicate with you about updates and announcements</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Cookies and Analytics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              We use cookies to improve your experience on our website. With your consent, 
              we use Google Analytics to understand how visitors interact with our site.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For more information about cookies, please see our{' '}
              <Link to="/cookie-preferences" className="text-blue-600 hover:underline dark:text-blue-400">
                Cookie Policy
              </Link>.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We use the following third-party services:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li><strong>Google Analytics:</strong> Website analytics and usage tracking</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Your Rights (GDPR)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to data portability</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your cookie consent is stored for 12 months, after which you will be asked to 
              renew your preferences. You can withdraw or change your consent at any time via 
              our{' '}
              <Link to="/cookie-preferences" className="text-blue-600 hover:underline dark:text-blue-400">
                Cookie Preferences
              </Link> page.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a 
                href={`mailto:${companyInfo?.company_email || 'info@healthventures.org'}`} 
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {companyInfo?.company_email || 'info@healthventures.org'}
              </a>
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
}
