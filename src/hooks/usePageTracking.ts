import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/contexts/AnalyticsContext';

/**
 * Hook to automatically track page views
 * Tracks whenever the route changes
 */
export function usePageTracking() {
  const location = useLocation();
  const analytics = useAnalytics();

  useEffect(() => {
    // Track page view on route change
    const path = location.pathname + location.search;
    
    // Get page title from document or generate from path
    const title = document.title;
    
    analytics.trackPageView(path, title);
  }, [location, analytics]);
}
