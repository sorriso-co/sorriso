"use client";

import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { removeTrackingCookies } from "@/utils/cookies";

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          if (window.dataLayer) {
            window.dataLayer.push(arguments);
          }
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
    setIsVisible(false);
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
        buttonText="Accept All"
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
          backgroundColor: "#ffffff",
          boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px",
          zIndex: 1000,
        }}
        buttonStyle={{
          backgroundColor: "#0d9488",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        declineButtonStyle={{
          backgroundColor: "#e5e7eb",
          color: "#333",
          border: "none",
          borderRadius: "6px",
          padding: "10px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: "#333",
            lineHeight: 1.6,
            maxWidth: "100%",
            textAlign: "left",
          }}
        >
          <strong>We Value Your Privacy</strong>
          <p style={{ marginTop: "10px" }}>
            At Sorriso, we use cookies to enhance your browsing experience, serve
            personalized ads, and analyze website traffic. You can choose to
            accept all cookies or decline them. Your preferences help us provide
            a better experience tailored to your needs.
          </p>
          <p style={{ marginTop: "10px" }}>
            By clicking &quot;Accept All&quot; you consent to the use of all cookies. For
            more details about how we use cookies and your options, please visit
            our <a
              href="/privacy"
              style={{
                color: "#0d9488",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Cookie Policy
            </a>.
          </p>
        </div>
      </CookieConsent>
    )
  );
};

export default CookieConsentBanner;
