import { createContext, useContext, useEffect, ReactNode } from 'react';
import { analyticsService } from '@/services/analytics';

/**
 * Analytics Context
 * Provides analytics service throughout the app
 */
const AnalyticsContext = createContext(analyticsService);

interface AnalyticsProviderProps {
  children: ReactNode;
}

/**
 * Analytics Provider Component
 * Initializes analytics and provides service to children
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize analytics on mount
    analyticsService.initialize().catch(error => {
      console.error('Failed to initialize analytics:', error);
    });
  }, []);

  return (
    <AnalyticsContext.Provider value={analyticsService}>
      {children}
    </AnalyticsContext.Provider>
  );
}

/**
 * Hook to access analytics service
 * @returns Analytics service instance
 */
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  
  return context;
}
