"use client";

import React from "react";
import PrivacyPolicy from "../../components/MainPage/Privacy";

const Privacy: React.FC = () => {
  return (
    <>
      <head>
        {/* Essential Meta Tags */}
        <title>Privacy Policy - Sorriso Care</title>
        <meta
          name="description"
          content="Learn about Sorriso Care's privacy policy, how we handle your data, and our commitment to protecting your personal information."
        />
        <meta
          name="keywords"
          content="privacy policy, Sorriso Care privacy, data protection, GDPR compliance, personal data policy, Sorriso Care data"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/privacy" />
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Privacy Policy - Sorriso Care"
        />
        <meta
          property="og:description"
          content="Learn about Sorriso Care's privacy policy, how we handle your data, and our commitment to protecting your personal information."
        />
        <meta property="og:url" content="https://sorriso.care/privacy" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/privacy-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="Privacy Policy - Sorriso Care"
        />
        <meta
          name="twitter:description"
          content="Learn about Sorriso Care's privacy policy, how we handle your data, and our commitment to protecting your personal information."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/privacy-og-image.jpg"
        />
      </head>
      <main className="overflow-x-hidden">
        <div className="mx-auto">
          <PrivacyPolicy />
        </div>
      </main>
    </>
  );
};

export default Privacy;
