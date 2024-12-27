// globals.d.ts
export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void; // Optional gtag function
    dataLayer?: any[]; // Optional dataLayer
  }
}
