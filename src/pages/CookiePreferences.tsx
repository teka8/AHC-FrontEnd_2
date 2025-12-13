import { useState, useEffect } from 'react';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { Link } from 'react-router-dom';

/**
 * Cookie Preferences Page
 * Dedicated page for managing cookie preferences (BT.com style)
 */
export function CookiePreferences() {
  const analytics = useAnalytics();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [consentDate, setConsentDate] = useState<Date | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  
  useEffect(() => {
    const consent = analytics.getConsent();
    if (consent) {
      setAnalyticsEnabled(consent.analytics);
      setConsentDate(new Date(consent.timestamp));
      setExpiryDate(new Date(consent.expiresAt));
    }
  }, [analytics]);
  
  const handleAcceptAll = () => {
    analytics.setConsent(true);
    setAnalyticsEnabled(true);
    window.scrollTo(0, 0);
    alert('✅ All cookies accepted. Preferences saved.');
    
    // Refresh consent dates
    const consent = analytics.getConsent();
    if (consent) {
      setConsentDate(new Date(consent.timestamp));
      setExpiryDate(new Date(consent.expiresAt));
    }
  };
  
  const handleRejectAll = () => {
    analytics.setConsent(false);
    setAnalyticsEnabled(false);
    setConsentDate(null);
    setExpiryDate(null);
    window.scrollTo(0, 0);
    alert('🚫 All optional cookies rejected. Preferences saved.');
  };
  
  const handleSubmit = () => {
    analytics.setConsent(analyticsEnabled);
    window.scrollTo(0, 0);
    alert('✅ Your preferences have been saved.');
    
    // Refresh consent dates
    const consent = analytics.getConsent();
    if (consent) {
      setConsentDate(new Date(consent.timestamp));
      setExpiryDate(new Date(consent.expiresAt));
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        
        {/* Header */}
        <div className="mb-8">
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our cookie policy
          </h1>
          <button 
            onClick={() => document.getElementById('manage-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Edit your cookie settings
          </button>
        </div>
        
        {/* Current Consent Status */}
        {consentDate && (
          <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              📅 Your Current Consent
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              <strong>Status:</strong> {analyticsEnabled ? 'Analytics Enabled' : 'Analytics Disabled'}
              <br />
              <strong>Consent given on:</strong> {consentDate.toLocaleDateString()} at {consentDate.toLocaleTimeString()}
              <br />
              <strong>Expires on:</strong> {expiryDate?.toLocaleDateString()} (12 months)
              <br />
              <span className="text-xs">You will be asked to renew your consent after 12 months.</span>
            </p>
          </div>
        )}
        
        {/* What are cookies */}
        <section className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What are cookies and why do we use them?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cookies and similar technologies allow small pieces of information to be read from 
            and/or placed onto your device when you visit a website or application. This allows 
            websites to recognise you or your device on each subsequent visit.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cookies are very useful and do lots of different jobs. For example, they enable you 
            to move between our web pages efficiently, remember your preferences, and generally 
            improve your experience when browsing with us.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You can find information about how we process your personal data in our{' '}
            <Link to="/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-400">
              privacy policy
            </Link>.
          </p>
        </section>
        
        {/* Your choices */}
        <section className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Your choices
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We will only place cookies for the preference level you set. Your preference level 
            can be changed at any time on this page.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Please note that cookies set before you changed your settings will still be on your 
            device. You can remove them using your browser settings. Your consent is valid for 
            12 months, after which you will be asked to renew it.
          </p>
        </section>
        
        {/* Cookie Categories */}
        <section id="manage-section" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            The cookies we use
          </h2>
          
          {/* Strictly Necessary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Strictly Necessary Cookies
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300 rounded-full">
                  Always active
                </span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies and similar technologies are strictly necessary and are required to 
              enable core functionality. They cannot be disabled.
            </p>
            <details className="text-sm text-gray-600 dark:text-gray-400">
              <summary className="cursor-pointer font-medium hover:text-blue-600">
                Cookie details ▼
              </summary>
              <ul className="mt-2 ml-4 space-y-1 list-disc">
                <li>Session management and authentication</li>
                <li>Security and fraud prevention</li>
                <li>Cookie consent preferences storage</li>
              </ul>
            </details>
          </div>
          
          {/* Analytical Cookies */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Analytical Cookies
                </h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies collect information about how you use our services. For example, 
              which pages you visit and if you experience any errors. They are important to us 
              being able to operate and maintain our services.
            </p>
            <details className="text-sm text-gray-600 dark:text-gray-400">
              <summary className="cursor-pointer font-medium hover:text-blue-600">
                Cookie details ▼
              </summary>
              <ul className="mt-2 ml-4 space-y-1 list-disc">
                <li>Google Analytics (GA4) - Website usage statistics</li>
                <li>Page view tracking and navigation patterns</li>
                <li>Performance monitoring and error detection</li>
              </ul>
            </details>
          </div>
          
        </section>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-md transition-colors font-medium"
          >
            Reject all
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
          >
            Submit preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
          >
            Accept all
          </button>
        </div>
        
      </div>
    </div>
  );
}
