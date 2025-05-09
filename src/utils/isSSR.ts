/**
 * Utility to check if the code is running in a server-side rendering (SSR) environment
 *
 * @returns {boolean} - True if running in SSR, false if in browser
 */
export const isSSR = (): boolean => {
  return typeof window === "undefined" || typeof document === "undefined";
};
