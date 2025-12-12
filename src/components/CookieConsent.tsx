import { useState, useEffect } from 'react';
import { useAnalytics } from '@/contexts/AnalyticsContext';

/**
 * Cookie Consent Banner
 * Shows a banner asking for cookie consent
 * Only appears if consent is required and not yet given
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const analytics = useAnalytics();

  useEffect(() => {
    // Wait for analytics to initialize and check consent
    const checkConsent = async () => {
      // Give time for analytics to initialize
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const consent = analytics.getConsent();
      const needsConsent = analytics.needsConsent();
      
      console.log('[CookieConsent] Needs consent:', needsConsent, 'Current consent:', consent);
      
      setIsReady(true);
      
      if (needsConsent && !consent) {
        console.log('[CookieConsent] Showing banner');
        setVisible(true);
      } else {
        console.log('[CookieConsent] Not showing banner');
      }
    };

    checkConsent();
  }, [analytics]);

  const handleAccept = () => {
    analytics.setConsent(true);
    setVisible(false);
    
    // Reload to initialize analytics
    window.location.reload();
  };

  const handleReject = () => {
    analytics.setConsent(false);
    setVisible(false);
  };

  console.log('[CookieConsent] Render - visible:', visible, 'isReady:', isReady);

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg dark:bg-gray-900 dark:border-gray-800 animate-slide-up"
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start gap-3">
              {/* Cookie Icon */}
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                  <circle cx="7" cy="7" r="1"/>
                  <circle cx="10" cy="10" r="1"/>
                  <circle cx="13" cy="7" r="1"/>
                  <circle cx="7" cy="13" r="1"/>
                </svg>
              </div>
              
              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  🍪 We Use Cookies
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use cookies to understand how you use our site and improve your experience. 
                  This includes analytics cookies to help us analyze website traffic and usage patterns. 
                  Your privacy is important to us.
                </p>
                <a 
                  href="/privacy-policy" 
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline mt-1 inline-block"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more about our privacy policy →
                </a>
              </div>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={handleReject}
              className="flex-1 md:flex-initial px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-initial px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
