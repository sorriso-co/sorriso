'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import { removeTrackingCookies } from '@/utils/cookies';

const CookieConsentBanner: React.FC = () => {
  const { t } = useTranslation();

  const handleAccept = () => {
    if (!window.gtag) {
      // Load the Google Analytics script
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590'; // Replace with your Measurement ID
      script.async = true;
      document.head.appendChild(script);
  
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
          window.dataLayer.push(arguments);
        };
  
        window.gtag('js', new Date());
        window.gtag('config', 'G-M6K5YPE590', {
          anonymize_ip: true, // Optional
        });
      };
    } else {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };
  

  const handleDecline = () => {
    removeTrackingCookies();
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="sorrisoCookieConsent"
      expires={150}
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      containerClasses="cookie-consent-container"
      buttonClasses="cookie-consent-button"
      declineButtonClasses="cookie-consent-decline-button"
    >
      We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking Accept, you consent to our use of cookies.
      <a href="/privacy-policy" className="cookie-consent-link">
        {t('cookieConsent.privacyPolicy', { defaultValue: 'Learn more' })}
      </a>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
