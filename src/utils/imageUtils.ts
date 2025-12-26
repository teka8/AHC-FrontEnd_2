const CDN_URL = import.meta.env.VITE_CDN_URL || 'https://pub-e0db1952b1b745ee88918d19ed5a7c18.r2.dev';

/**
 * Get full CDN URL for an image path
 * @param path - Relative path to image (e.g., '/images/hero/about.jpg' or 'images/hero/about.jpg')
 * @returns Full CDN URL or fallback to local path
 */
export const getImageUrl = (path: string): string => {
  if (!path) return '';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If CDN URL is configured, use it
  if (CDN_URL) {
    return `${CDN_URL}/${cleanPath}`;
  }
  
  // Fallback to local path
  return `/${cleanPath}`;
};

/**
 * Get local fallback path for an image
 * @param path - Relative path to image
 * @returns Local path
 */
export const getLocalImageUrl = (path: string): string => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};

/**
 * Get image URL with automatic fallback handling
 * Returns an object with src and onError handler for React img tags
 * @param path - Relative path to image
 * @returns Object with src and onError properties
 */
export const getImageWithFallback = (path: string) => {
  return {
    src: getImageUrl(path),
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      // When CDN fails, fallback to local image
      const localPath = getLocalImageUrl(path);
      if (e.currentTarget.src !== localPath) {
        console.warn(`CDN image failed, falling back to local: ${path}`);
        e.currentTarget.src = localPath;
      }
    }
  };
};

/**
 * Preload an image for better performance
 * @param src - Image URL to preload
 * @returns Promise that resolves when image is loaded
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 * @param sources - Array of image URLs to preload
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(src => preloadImage(src)));
};

/**
 * Get placeholder image URL
 * @returns Placeholder image path
 */
export const getPlaceholderImage = (): string => {
  return getImageUrl('images/placeholder.png');
};
