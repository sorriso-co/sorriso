"use client";

import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../i18n";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsent";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/images/icons/icon.svg"
          type="image/x-icon"
        />
      </head>

      <body>
        {/* Google Analytics using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6K5YPE590', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

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
