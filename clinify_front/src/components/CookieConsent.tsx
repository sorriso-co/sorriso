"use client";

import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { removeTrackingCookies } from "@/utils/cookies";

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false); // Hide banner after acceptance
    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", "G-M6K5YPE590", {
          anonymize_ip: true,
        });
      };
    } else {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    setIsVisible(false); // Hide banner after decline
    removeTrackingCookies();
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }
  };

  return (
    isVisible && (
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="sorrisoCookieConsent"
        expires={150}
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        containerClasses="flex flex-wrap items-center justify-between p-4 md:p-5 bg-white text-teal-700 shadow-lg border-t border-teal-200 text-sm md:text-base"
        buttonClasses="bg-teal-500 text-white font-semibold py-1 px-3 md:py-2 md:px-4 rounded-md shadow-md hover:bg-teal-600 transition-all ease-in-out duration-200 cursor-pointer"
        declineButtonClasses="bg-red-500 text-white font-semibold py-1 px-3 md:py-2 md:px-4 rounded-md shadow-md hover:bg-red-600 transition-all ease-in-out duration-200 cursor-pointer ml-2"
      >
        <div className="flex-1 mb-2 md:mb-0">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking
          &lsquo;Accept&lsquo;, you consent to our use of cookies.
          <a
            href="/privacy"
            className="text-teal-600 underline hover:no-underline ml-2"
          >
            Learn more
          </a>
        </div>
      </CookieConsent>
    )
  );
};

export default CookieConsentBanner;
