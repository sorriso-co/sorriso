"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import ServiceHero from "../../components/Services/ServiceHero";
import MostWantedProcedures from "../../components/Treatments/MostWantedProcedures";
import ExpertiseOverview from "../../components/Treatments/ExpertiseOverview";
import CallToAction from "../../components/Treatments/CallToAction";

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
  const { t: tCommon } = useTranslation("common");
  const { t: tServices } = useTranslation("services");

  const procedures = tServices("procedures", {
    returnObjects: true,
  }) as Procedure[];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          {tCommon("meta_services.title", {
            defaultValue: "Dental Services - Comprehensive Care | Sorriso Care",
          })}
        </title>
        <meta
          name="description"
          content={tCommon("meta_services.description", {
            defaultValue:
              "Explore the wide range of dental services offered at Sorriso Care, from cosmetic procedures to preventive care, all tailored to your needs.",
          })}
        />
        <meta
          name="keywords"
          content={tCommon("meta_services.keywords", {
            defaultValue:
              "dental services, sorriso care, dental care, cosmetic dentistry, preventive dental care, dental procedures, dental health",
          })}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={tCommon("meta_services.og_title", {
            defaultValue: "Comprehensive Dental Services | Sorriso Care",
          })}
        />
        <meta
          property="og:description"
          content={tCommon("meta_services.og_description", {
            defaultValue:
              "Discover a wide range of dental services, including cosmetic and preventive procedures, tailored to meet your dental health needs at Sorriso Care.",
          })}
        />
        <meta property="og:url" content="https://sorriso.care/services" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/services-hero.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={tCommon("meta_services.twitter_title", {
            defaultValue: "Comprehensive Dental Services | Sorriso Care",
          })}
        />
        <meta
          name="twitter:description"
          content={tCommon("meta_services.twitter_description", {
            defaultValue:
              "Explore various dental services at Sorriso Care, including cosmetic, restorative, and preventive dental care solutions.",
          })}
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/services-hero.jpg"
        />
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
