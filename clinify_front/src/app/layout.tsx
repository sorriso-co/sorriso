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
import TagManager from "react-gtm-module";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Initialize GTM on client
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W2BPQDMN" });

    const popupDismissed = localStorage.getItem("popupDismissed");
    if (!popupDismissed) {
      setIsPopupVisible(true);
    }
  }, []);

  const handlePopupClose = () => {
    localStorage.setItem("popupDismissed", "true");
    setIsPopupVisible(false);
  };

  return (
    <html lang="en">
      <body>
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
