"use client";

import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { removeTrackingCookies } from "@/utils/cookies";
import styles from "./CookieConsentBanner.module.css";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

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
        window.gtag = function gtag(...args: any[]) {
          window.dataLayer?.push(args);
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
    if (window.gtag) {
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
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          zIndex: 1000,
        }}
        buttonStyle={{
          backgroundColor: "#0d9488",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        declineButtonStyle={{
          backgroundColor: "#e5e7eb",
          color: "#333",
          border: "none",
          borderRadius: "6px",
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className={styles.container}>
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking
          &lsquo;Accept&lsquo;, you consent to our use of cookies.
          <Link href="/privacy" passHref>
            <span className={styles.learnMore}>Learn more</span>
          </Link>
        </div>
      </CookieConsent>
    )
  );
};

export default CookieConsentBanner;
