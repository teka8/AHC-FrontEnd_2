import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '@/contexts/AnalyticsContext';

/**
 * Cookie Consent Banner (BT.com style)
 * Fixed bottom banner with accept/reject/manage buttons
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const analytics = useAnalytics();
  
  useEffect(() => {
    const checkConsent = async () => {
      try {
        // Wait for analytics to initialize (waits for config to load)
        console.log('[CookieBanner] Waiting for analytics initialization...');
        await analytics.waitForInitialization();
        console.log('[CookieBanner] Analytics initialized');
        
        const consent = analytics.getConsent();
        const needsConsent = analytics.needsConsent();
        
        console.log('[CookieBanner] Needs consent:', needsConsent, 'Current consent:', consent);
        
        if (needsConsent && !consent) {
          console.log('[CookieBanner] Showing banner');
          setVisible(true);
        } else {
          console.log('[CookieBanner] Banner not needed');
        }
      } catch (error) {
        console.error('[CookieBanner] Error checking consent:', error);
      }
    };
    
    checkConsent();
  }, [analytics]);
  
  const handleAcceptAll = () => {
    analytics.setConsent(true);
    setVisible(false);
    window.location.reload(); // Reload to initialize analytics
  };
  
  const handleRejectAll = () => {
    analytics.setConsent(false);
    setVisible(false);
  };
  
  if (!visible) return null;
  
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl"
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          
          {/* Cookie Icon */}
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
              <circle cx="7" cy="7" r="1"/>
              <circle cx="10" cy="10" r="1"/>
              <circle cx="13" cy="7" r="1"/>
              <circle cx="7" cy="13" r="1"/>
            </svg>
            🍪
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We use necessary cookies to make our sites work. With your consent, we use cookies 
              to improve and personalise your online experience with us based on how you interact 
              with us. You can find more information about the cookies we use and change your 
              settings at any time by clicking 'Manage cookie settings' below.{' '}
              <Link 
                to="/cookie-preferences" 
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
              >
                Cookie Policy
              </Link>
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link
              to="/cookie-preferences"
              className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md transition-colors text-center"
            >
              Manage cookie settings
            </Link>
            <button
              onClick={handleRejectAll}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              Reject all
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
