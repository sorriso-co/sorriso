"use client";

import React from "react";
import Hero from "../../components/Pricing/PriceHero";
import Comparison from "../../components/Pricing/Comparison";
import PricingSection from "@/components/Pricing/PricingSection";

const PricingPage: React.FC = () => {
  return (
    <>
      <head>
        {/* Essential Meta Tags */}
        <title>Pricing - Affordable Dental Treatments | Sorriso Care</title>
        <meta
          name="description"
          content="Explore Sorriso Care's transparent pricing for top-quality dental treatments, including veneers, implants, and full-mouth restoration."
        />
        <meta
          name="keywords"
          content="affordable dental pricing, veneers cost, dental implants pricing, cost of veneers, full-mouth dental implants, all-on-4 implants, cosmetic dentistry pricing, smile makeover cost, dental tourism packages, teeth whitening prices, hair transplant cost, affordable medical tourism, health and beauty packages, low-cost veneers, Montenegro dental care"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/pricing" />
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
          content="Pricing - Affordable Dental Treatments | Sorriso Care"
        />
        <meta
          property="og:description"
          content="Explore Sorriso Care's transparent pricing for top-quality dental treatments, including veneers, implants, and full-mouth restoration. Compare prices and treatments to find the best solution for you."
        />
        <meta property="og:url" content="https://sorriso.care/pricing" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/pricing-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="Pricing - Affordable Dental Treatments | Sorriso Care"
        />
        <meta
          name="twitter:description"
          content="Explore Sorriso Care's transparent pricing for top-quality dental treatments, including veneers, implants, and full-mouth restoration. Compare prices and treatments to find the best solution for you."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/pricing-og-image.jpg"
        />
      </head>
      <main className="overflow-x-hidden">
        <div className="mx-auto">
          <Hero />
          <PricingSection />
          <Comparison />
        </div>
      </main>
    </>
  );
};

export default PricingPage;
