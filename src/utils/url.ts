/**
 * Utility function to create URLs with proper base path for GitHub Pages deployment
 * @param path - The path to append to the base URL
 * @returns The complete URL with base path
 */
export function createUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Ensure we don't double-slash
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${cleanBase}${cleanPath}`;
}

/**
 * Get the base URL for the site
 */
export function getBaseUrl(): string {
  return import.meta.env.BASE_URL || '/';
}
