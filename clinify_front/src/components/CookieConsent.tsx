"use client";

import React from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { loadGoogleAnalytics } from "../utils/loadAnalytics";
import { removeTrackingCookies, setDoNotTrackFlag } from "@/utils/cookies";

const CookieConsentBanner: React.FC = () => {
  const { t } = useTranslation();

  const handleDecline = () => {
    removeTrackingCookies();     
    setDoNotTrackFlag();
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="sorrisoCookieConsent"
      expires={150}
      enableDeclineButton
      onAccept={loadGoogleAnalytics}  
      onDecline={handleDecline}  
      containerClasses="cookie-consent-container"
      buttonClasses="cookie-consent-button"
      declineButtonClasses="cookie-consent-decline-button"
    >
      We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept', you consent to our use of cookies.
      <a href="/privacy-policy" className="cookie-consent-link">
        {t("cookieConsent.privacyPolicy", { defaultValue: "Learn more" })}
      </a>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
