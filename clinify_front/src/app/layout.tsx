"use client";
import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../i18n";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsent";
import SEOHead from "@/app/SEOHead";
import { initializeDataLayer } from "@/utils/loadAnalytics";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {
    initializeDataLayer();

    // Load the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590";
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag.js
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("js", new Date());
      window.gtag("config", "G-M6K5YPE590", {
        anonymize_ip: false,
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <SEOHead />
      </head>
      <body>
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Component */}
        <Footer />

        {/* Additional Components */}
        <CookieConsentBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
