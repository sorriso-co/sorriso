"use client";

import React from "react";
import GetQuote from "@/components/Quote/QuoteForm";

const QuotePage: React.FC = () => {
  return (
    <>
      <head>
        {/* Essential Meta Tags */}
        <title>Get a Quote - Affordable Dental Treatments | Sorriso Care</title>
        <meta
          name="description"
          content="Request a personalized quote from Sorriso Care. Explore affordable options for veneers, implants, and other cosmetic dentistry procedures in Montenegro."
        />
        <meta
          name="keywords"
          content="dental treatment quote, affordable dental care, veneers quote, dental implants quote, cosmetic dentistry cost, dental tourism packages, low-cost dental care, Montenegro dental services, dental care pricing"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/quote" />
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/images/icons/icon.svg"
          type="image/x-icon"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Get a Quote - Affordable Dental Treatments | Sorriso Care"
        />
        <meta
          property="og:description"
          content="Request a personalized quote for dental treatments with Sorriso Care. Submit your details to explore affordable options for veneers, implants, and other cosmetic dentistry procedures in Montenegro."
        />
        <meta property="og:url" content="https://sorriso.care/quote" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/quote-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="Get a Quote - Affordable Dental Treatments | Sorriso Care"
        />
        <meta
          name="twitter:description"
          content="Request a personalized quote for dental treatments with Sorriso Care. Submit your details to explore affordable options for veneers, implants, and other cosmetic dentistry procedures in Montenegro."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/quote-og-image.jpg"
        />
      </head>
      <main className="overflow-x-hidden py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GetQuote />
        </div>
      </main>
    </>
  );
};

export default QuotePage;
