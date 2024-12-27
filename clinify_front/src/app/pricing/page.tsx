"use client";
import React from "react";
import Hero from "../../components/Pricing/PriceHero";
import Comparison from "../../components/Pricing/Comparison";
import PricingSection from "@/components/Pricing/PricingSection";
import Head from "next/head";
import { getSEOConfig } from "@/app/seoConfig";

const PricingPage: React.FC = () => {
  // Page-specific SEO configuration
  const seoConfig = getSEOConfig({
    title: "Pricing - Affordable Dental Treatments | Sorriso Care",
    description:
      "Explore Sorriso Care's transparent pricing for top-quality dental treatments. Compare prices and treatments to find the best solution for you.",
    url: "https://sorriso.care/pricing"
  });

  return (
    <>
      {/* Page-Specific SEO Metadata */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content={seoConfig.robots} />
        <link rel="canonical" href={seoConfig.canonical} />
        <meta name="viewport" content={seoConfig.viewport} />
        <meta charSet={seoConfig.charSet} />
        <meta httpEquiv="X-UA-Compatible" content={seoConfig.xUACompatible} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta
          property="og:description"
          content={seoConfig.openGraph.description}
        />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta
          property="og:image"
          content={seoConfig.openGraph.images[0].url}
        />
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
        <meta property="og:locale" content={seoConfig.openGraph.locale} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta
          name="twitter:description"
          content={seoConfig.twitter.description}
        />
        <meta name="twitter:image" content={seoConfig.twitter.images[0]} />
      </Head>

      {/* Page Content */}
      <section className="overflow-x-hidden">
        <div className="mx-auto">
          <Hero />
          <PricingSection />
          <Comparison />
        </div>
        <div className="relative rounded-t-[30px] rounded-b-[30px] bg-gray-50 overflow-x-hidden text-teal-900">
          <div className="container mx-auto px-4 pt-16">
            {/* <h1 className="text-5xl font-bold text-center text-teal-600 mb-12">
              Our Dental Treatments & Prices
            </h1> */}
            {/* <Treatments /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;

