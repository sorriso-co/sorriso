"use client";

import React from "react";
import Head from "next/head";
import ServiceHero from "../../components/Services/ServiceHero";
import MostWantedProcedures from "../../components/Treatments/MostWantedProcedures";
import ExpertiseOverview from "../../components/Treatments/ExpertiseOverview";
import CallToAction from "../../components/Treatments/CallToAction";
import { useTranslation } from "next-i18next";

interface Procedure {
  image: string;
  title: string;
  shortDescription?: string;
  link?: string;
  necessity?: string;
  candidate?: string;
  duration?: string;
}

const Services: React.FC = () => {
  const { t: tServices } = useTranslation("services");

  // Use translations for procedures
  const procedures = tServices("procedures", {
    returnObjects: true,
  }) as Procedure[];

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Dental Services - Comprehensive Care | Sorriso Care</title>
        <meta
          name="description"
          content="Explore the wide range of dental services offered at Sorriso Care, from cosmetic procedures to preventive care, all tailored to your needs."
        />
        <meta
          name="keywords"
          content="dental services, cosmetic dentistry, dental implants, veneers, preventive dental care, smile makeover, teeth whitening, dental crowns, dental bridges, all-on-4 implants, dental health solutions, affordable dental care, cosmetic procedures, dental tourism, medical tourism, Montenegro, flying to Montenegro, Montenegro dental tourism"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/services" />
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Dental Services - Comprehensive Care | Sorriso Care"
        />
        <meta
          property="og:description"
          content="Explore the wide range of dental services offered at Sorriso Care, from cosmetic procedures to preventive care, all tailored to your needs."
        />
        <meta property="og:url" content="https://sorriso.care/services" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/services-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="Dental Services - Comprehensive Care | Sorriso Care"
        />
        <meta
          name="twitter:description"
          content="Explore the wide range of dental services offered at Sorriso Care, from cosmetic procedures to preventive care, all tailored to your needs."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/services-og-image.jpg"
        />
      </Head>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <div className="mb-16">
          <ServiceHero />
        </div>

        {/* Expertise Overview Section */}
        <div className="mb-16">
          <ExpertiseOverview />
        </div>

        {/* Most Wanted Procedures Section */}
        <div className="mb-16">
          <MostWantedProcedures procedures={procedures} />
        </div>

        {/* Call to Action Section */}
        <div className="mb-16">
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default Services;
