"use client";
import React from "react";
import Head from "next/head";
import ServiceHero from "../../components/Services/ServiceHero";
import MostWantedProcedures from "../../components/Treatments/MostWantedProcedures";
import ExpertiseOverview from "../../components/Treatments/ExpertiseOverview";
import CallToAction from "../../components/Treatments/CallToAction";
import { useTranslation } from "next-i18next";
import { getSEOConfig } from "@/app/seoConfig";

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

  // Get SEO config for the page
  const seoConfig = getSEOConfig({
    title: "Dental Services - Comprehensive Care | Sorriso Care",
    description:
      "Explore the wide range of dental services offered at Sorriso Care, from cosmetic procedures to preventive care, all tailored to your needs.",
    url: "https://sorriso.care/services"
  });

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content={seoConfig.robots} />
        <link rel="canonical" href={seoConfig.canonical} />
        <meta name="viewport" content={seoConfig.viewport} />
        <meta charSet={seoConfig.charSet} />
        <meta httpEquiv="X-UA-Compatible" content={seoConfig.xUACompatible} />

        {/* Open Graph Metadata */}
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

        {/* Twitter Card Metadata */}
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
      <div className="overflow-x-hidden">
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
      </div>
    </>
  );
};

export default Services;
