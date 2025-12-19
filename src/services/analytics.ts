import ReactGA from 'react-ga4';
import type { GoogleAnalyticsConfig, ConsentPreferences, EventParams } from '@/types/analytics';

const CONSENT_STORAGE_KEY = 'ahc_analytics_consent';
const CONFIG_CACHE_KEY = 'ahc_ga_config'; // Changed to v2 to force fresh fetch
const CONFIG_CACHE_DURATION = 3600000; // 1 hour in milliseconds
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // 12 months in milliseconds

/**
 * Analytics Service
 * Handles Google Analytics 4 initialization and event tracking
 */
class AnalyticsService {
  private initialized = false;
  private config: GoogleAnalyticsConfig | null = null;
  private configTimestamp: number = 0;
  private initializationPromise: Promise<void> | null = null;
  private isInitializing = false;

  /**
   * Initialize Google Analytics
   * Fetches config from backend and sets up GA4
   */
  async initialize(): Promise<void> {
    // If already initializing, return existing promise
    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    // Create initialization promise
    this.initializationPromise = this.performInitialization();
    return this.initializationPromise;
  }

  /**
   * Perform actual initialization
   */
  private async performInitialization(): Promise<void> {
    if (this.isInitializing) return;
    
    this.isInitializing = true;

    try {
      // Fetch config from backend
      const config = await this.fetchConfig();
      this.config = config;

      if (!config.enabled || !config.measurement_id) {
        console.log('[Analytics] Tracking is disabled or measurement ID is missing');
        return;
      }

      // Check if consent is required
      if (config.cookie_consent_required) {
        const consent = this.getConsent();
        if (!consent || !consent.analytics) {
          console.log('[Analytics] Waiting for user consent');
          return;
        }
      }

      // Initialize GA4
      this.initializeGA(config);
    } catch (error) {
      console.error('[Analytics] Failed to initialize:', error);
    } finally {
      this.isInitializing = false;
    }
  }

  /**
   * Wait for initialization to complete
   */
  async waitForInitialization(): Promise<void> {
    if (this.initializationPromise) {
      await this.initializationPromise;
    }
  }

  /**
   * Check if service is ready (config loaded)
   */
  isReady(): boolean {
    return this.config !== null;
  }

  /**
   * Fetch GA configuration from backend
   */
  private async fetchConfig(): Promise<GoogleAnalyticsConfig> {
    // Check cache first
    const cached = this.getCachedConfig();
    if (cached) {
      return cached;
    }

    const apiBaseUrl = import.meta.env.DEV 
      ? '/api/v1' 
      : (import.meta.env.VITE_API_BASE_URL || 'https://ahc.tewostech.com/api/v1');

    const response = await fetch(`${apiBaseUrl}/public/google-analytics-config`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch analytics configuration');
    }

    const data = await response.json();
    const config = data.data || data;

    // Cache the config
    this.cacheConfig(config);

    return config;
  }

  /**
   * Get cached configuration
   */
  private getCachedConfig(): GoogleAnalyticsConfig | null {
    try {
      const cached = localStorage.getItem(CONFIG_CACHE_KEY);
      if (!cached) return null;

      const { config, timestamp } = JSON.parse(cached);
      
      // Check if cache is still valid (1 hour)
      if (Date.now() - timestamp < CONFIG_CACHE_DURATION) {
        return config;
      }

      // Cache expired
      localStorage.removeItem(CONFIG_CACHE_KEY);
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Cache configuration
   */
  private cacheConfig(config: GoogleAnalyticsConfig): void {
    try {
      const cacheData = {
        config,
        timestamp: Date.now()
      };
      localStorage.setItem(CONFIG_CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.warn('[Analytics] Failed to cache config:', error);
    }
  }

  /**
   * Initialize Google Analytics 4
   */
  private initializeGA(config: GoogleAnalyticsConfig): void {
    try {
      ReactGA.initialize(config.measurement_id, {
        gaOptions: {
          anonymizeIp: config.anonymize_ip,
        },
      });
      
      this.initialized = true;
      console.log('[Analytics] Google Analytics 4 initialized successfully');
    } catch (error) {
      console.error('[Analytics] Failed to initialize GA4:', error);
    }
  }

  /**
   * Check if analytics is initialized
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Get consent preferences from localStorage
   */
  getConsent(): ConsentPreferences | null {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!stored) return null;
      
      const consent: ConsentPreferences = JSON.parse(stored);
      const now = Date.now();
      
      // Check if expired (12 months passed)
      if (consent.expiresAt && now > consent.expiresAt) {
        console.log('[Analytics] Consent expired after 12 months, removing...');
        localStorage.removeItem(CONSENT_STORAGE_KEY);
        return null; // Banner will show again
      }
      
      // Handle old format (no expiresAt field) - migration
      if (!consent.expiresAt) {
        console.log('[Analytics] Old consent format detected, removing...');
        localStorage.removeItem(CONSENT_STORAGE_KEY);
        return null; // Banner will show again
      }
      
      return consent;
    } catch (error) {
      console.error('[Analytics] Error reading consent:', error);
      return null;
    }
  }

  /**
   * Set consent preferences
   */
  setConsent(analytics: boolean): void {
    const now = Date.now();
    const preferences: ConsentPreferences = {
      analytics,
      timestamp: now,
      expiresAt: now + CONSENT_DURATION, // Expires in 12 months
    };
    
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));

      // Initialize GA if consent given and not yet initialized
      if (analytics && !this.initialized && this.config) {
        this.initializeGA(this.config);
      }
    } catch (error) {
      console.error('[Analytics] Failed to save consent:', error);
    }
  }

  /**
   * Check if consent is needed
   */
  needsConsent(): boolean {
    return this.config?.cookie_consent_required ?? true;  // Default to true for privacy
  }

  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    if (!this.initialized) return;
    
    try {
      ReactGA.send({
        hitType: 'pageview',
        page: path,
        title: title || document.title,
      });
      
      console.log('[Analytics] Page view tracked:', path);
    } catch (error) {
      console.error('[Analytics] Failed to track page view:', error);
    }
  }

  /**
   * Track custom event
   */
  trackEvent(eventName: string, params?: EventParams): void {
    if (!this.initialized) return;

    try {
      ReactGA.event(eventName, params);
      console.log('[Analytics] Event tracked:', eventName, params);
    } catch (error) {
      console.error('[Analytics] Failed to track event:', error);
    }
  }

  /**
   * Track event registration
   */
  trackEventRegistration(eventId: string, eventTitle: string): void {
    this.trackEvent('event_registration_started', {
      event_id: eventId,
      event_title: eventTitle,
      category: 'Events',
    });
  }

  /**
   * Track event registration completion
   */
  trackEventRegistrationComplete(eventId: string, eventTitle: string): void {
    this.trackEvent('event_registration_completed', {
      event_id: eventId,
      event_title: eventTitle,
      category: 'Events',
    });
  }

  /**
   * Track contact form submission
   */
  trackContactFormSubmit(): void {
    this.trackEvent('contact_form_submitted', {
      category: 'Contact',
    });
  }

  /**
   * Track contact form opened
   */
  trackContactFormOpen(): void {
    this.trackEvent('contact_form_opened', {
      category: 'Contact',
    });
  }

  /**
   * Track leader profile view
   */
  trackLeaderView(leaderId: string, leaderName: string): void {
    this.trackEvent('leader_profile_viewed', {
      leader_id: leaderId,
      leader_name: leaderName,
      category: 'Leaders',
    });
  }

  /**
   * Track team member view
   */
  trackTeamMemberView(memberId: string, memberName: string): void {
    this.trackEvent('team_member_viewed', {
      member_id: memberId,
      member_name: memberName,
      category: 'Team',
    });
  }

  /**
   * Track LinkedIn click
   */
  trackLinkedInClick(profileName: string): void {
    this.trackEvent('linkedin_clicked', {
      profile_name: profileName,
      category: 'Social',
    });
  }

  /**
   * Track media download
   */
  trackMediaDownload(mediaTitle: string, mediaType: string): void {
    this.trackEvent('media_downloaded', {
      media_title: mediaTitle,
      media_type: mediaType,
      category: 'Media',
    });
  }

  /**
   * Track media gallery view
   */
  trackMediaGalleryView(): void {
    this.trackEvent('media_gallery_opened', {
      category: 'Media',
    });
  }

  /**
   * Track newsletter signup
   */
  trackNewsletterSignup(email: string): void {
    this.trackEvent('newsletter_signup', {
      category: 'Newsletter',
      // Don't send PII - just track the action
      has_email: email ? 'yes' : 'no',
    });
  }

  /**
   * Track search query
   */
  trackSearch(query: string, resultsCount: number): void {
    this.trackEvent('search', {
      search_term: query,
      results_count: resultsCount,
      category: 'Search',
    });
  }

  /**
   * Track outbound link click
   */
  trackOutboundLink(url: string, linkText?: string): void {
    this.trackEvent('outbound_link_clicked', {
      link_url: url,
      link_text: linkText,
      category: 'Navigation',
    });
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(percentage: number): void {
    this.trackEvent('scroll_depth', {
      scroll_percentage: percentage,
      category: 'Engagement',
    });
  }

  /**
   * Track file download
   */
  trackFileDownload(fileName: string, fileType: string): void {
    this.trackEvent('file_downloaded', {
      file_name: fileName,
      file_type: fileType,
      category: 'Downloads',
    });
  }

  /**
   * Track scholarship application start
   */
  trackScholarshipApplicationStart(scholarshipTitle: string): void {
    this.trackEvent('scholarship_application_started', {
      scholarship_title: scholarshipTitle,
      category: 'Scholarships',
    });
  }

  /**
   * Track scholarship application submission
   */
  trackScholarshipApplicationSubmit(scholarshipTitle: string): void {
    this.trackEvent('scholarship_application_submitted', {
      scholarship_title: scholarshipTitle,
      category: 'Scholarships',
    });
  }

  /**
   * Track venture application
   */
  trackVentureApplication(ventureName: string): void {
    this.trackEvent('venture_application_submitted', {
      venture_name: ventureName,
      category: 'Ventures',
    });
  }

  /**
   * Track program view
   */
  trackProgramView(programId: string, programTitle: string): void {
    this.trackEvent('program_viewed', {
      program_id: programId,
      program_title: programTitle,
      category: 'Programs',
    });
  }

  /**
   * Track navigation click
   */
  trackNavigation(linkName: string, destination: string): void {
    this.trackEvent('navigation_clicked', {
      link_name: linkName,
      destination: destination,
      category: 'Navigation',
    });
  }
}

// Export singleton instance
export const analyticsService = new AnalyticsService();
