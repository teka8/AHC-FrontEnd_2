const CDN_URL = import.meta.env.VITE_CDN_URL || 'https://pub-e0db1952b1b745ee88918d19ed5a7c18.r2.dev';

/**
 * Get full CDN URL for an image path
 * @param path - Relative path to image (e.g., '/images/hero/about.jpg' or 'images/hero/about.jpg')
 * @returns Full CDN URL or local path if CDN is not configured
 */
export const getImageUrl = (path: string): string => {
  if (!path) return '';

  const cleanPath = path.replace(/^\/+/, '');

  return CDN_URL
    ? `${CDN_URL}/${cleanPath}`
    : `/${cleanPath}`;
};

/**
 * Get local fallback path for an image
 * @param path - Relative path to image
 * @returns Local path
 */
export const getLocalImageUrl = (path: string): string => {
  if (!path) return '';

  const cleanPath = path.replace(/^\/+/, '');
  return `/${cleanPath}`;
};

/**
 * Get image URL with automatic CDN → local fallback handling
 * @param path - Relative path to image
 * @returns Object with src and onError handler for React img tags
 */
export const getImageWithFallback = (path: string) => {
  return {
    src: getImageUrl(path),
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      const localPath = getLocalImageUrl(path);

      // Prevent infinite error loops
      if (!img.src.endsWith(localPath)) {
        console.warn(
          `[Image Fallback] CDN failed, falling back to local image: ${path}`,
          {
            failedSrc: img.src,
            fallbackSrc: localPath,
          }
        );

        img.onerror = null;
        img.src = localPath;
      }
    },
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
    img.onerror = (err) => {
      console.warn('[Image Preload Failed]', src, err);
      reject(err);
    };
    img.src = src;
  });
};

/**
 * Preload multiple images
 * @param sources - Array of image URLs to preload
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

/**
 * Get placeholder image URL (local-only to avoid fallback loops)
 * @returns Placeholder image path
 */
export const getPlaceholderImage = (): string => {
  return '/images/placeholder.png';
};
