
declare global {
    interface Window {
      dataLayer: any[];
    }
  }
export const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590";
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(..._args: any[]) {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-M6K5YPE590");
    };
  };
  