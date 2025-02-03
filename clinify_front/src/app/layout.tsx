"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../i18n";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsent";
import PopUp from "@/components/MainPage/PopUp/PopUp";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const popupDismissed = localStorage.getItem("popupDismissed");

    // Show the popup if it hasn't been dismissed
    if (!popupDismissed) {
      setIsPopupVisible(true);
    }
  }, []);

  const handlePopupClose = () => {
    // Dismiss the popup and store the dismissal in localStorage
    localStorage.setItem("popupDismissed", "true");
    setIsPopupVisible(false);
  };

  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
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

        {/* Header */}
        <Header />

        {/* Main Content */}
        <>{children}</>

        {/* Footer */}
        <Footer />

        {/* Popup */}
        {isPopupVisible && (
          <PopUp show={isPopupVisible} handleClose={handlePopupClose} />
        )}

        {/* Additional Components */}
        <CookieConsentBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
