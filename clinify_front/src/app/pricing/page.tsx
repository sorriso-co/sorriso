"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import Hero from "../../components/Pricing/PriceHero";
import Comparison from "../../components/Pricing/Comparison";
// import Treatments from "../../components/Pricing/TreatmentsListPrices";
import PricingSection from "@/components/Pricing/PricingSection";

import Head from "next/head";

const PricingPage: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          {t("meta_pricing.title", {
            defaultValue:
              "Pricing - Affordable Dental Treatments | Sorriso Care",
          })}
        </title>
        <meta
          name="description"
          content={t("meta_pricing.description", {
            defaultValue:
              "Explore Sorriso Care's transparent pricing for top-quality dental treatments. Compare prices and treatments to find the best solution for you.",
          })}
        />
        <meta
          name="keywords"
          content={t("meta_pricing.keywords", {
            defaultValue:
              "Sorriso Care pricing, affordable dental treatments, dental prices Montenegro, dental tourism pricing",
          })}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content={t("meta_pricing.og_title", {
            defaultValue: "Affordable Dental Treatments at Sorriso Care",
          })}
        />
        <meta
          property="og:description"
          content={t("meta_pricing.og_description", {
            defaultValue:
              "Compare dental treatment prices at Sorriso Care and get top-quality services at affordable rates.",
          })}
        />
        <meta property="og:url" content="https://sorriso.care/pricing" />
        <meta
          property="og:image"
          content={t("meta_pricing.og_image", {
            defaultValue: "https://sorriso.care/images/pricing-thumbnail.jpg",
          })}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("meta_pricing.twitter_title", {
            defaultValue: "Affordable Dental Treatments at Sorriso Care",
          })}
        />
        <meta
          name="twitter:description"
          content={t("meta_pricing.twitter_description", {
            defaultValue:
              "Explore affordable dental treatments with transparent pricing at Sorriso Care.",
          })}
        />
        <meta
          name="twitter:image"
          content={t("meta_pricing.twitter_image", {
            defaultValue: "https://sorriso.care/images/pricing-thumbnail.jpg",
          })}
        />
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
              {t("pricingPage.treatments_title", {
                defaultValue: "Our Dental Treatments & Prices",
              })}
            </h1> */}
            {/* <Treatments /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
