/**
 * Google Analytics Configuration
 * Fetched from backend API
 */
export interface GoogleAnalyticsConfig {
  enabled: boolean;
  measurement_id: string;
  anonymize_ip: boolean;
  cookie_consent_required: boolean;
}

/**
 * User consent preferences
 * Stored in localStorage
 */
export interface ConsentPreferences {
  analytics: boolean;
  timestamp: number;
  expiresAt: number; // Consent expires after 12 months
}

/**
 * Custom event parameters
 */
export interface EventParams {
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Page view parameters
 */
export interface PageViewParams {
  page_path: string;
  page_title?: string;
  page_location?: string;
}
