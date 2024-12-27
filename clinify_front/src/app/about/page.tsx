"use client";
import React from "react";
import AboutUs from "@/components/AboutPage/AboutUs/AboutUs";
import Box from "@/components/AboutPage/AboutUs/BoxUs";
import YouTubeEmbed from "@/components/AboutPage/Youtube/YoutubeEmbed";
import Mission from "@/components/AboutPage/AboutUs/Mission";
import WhyMontenegro from "@/components/AboutPage/WhyMNE/intro";
import DentalTravelIntro from "@/components/AboutPage/WhyMNE/dentaltravel";
import Montenegro from "@/components/AboutPage/WhyMNE/Montenegro";
import CTA from "@/components/AboutPage/WhyMNE/CTA";
import Head from "next/head";
import { getSEOConfig } from "@/app/seoConfig";

const About = () => {
  // Page-specific SEO configuration
  const seoConfig = getSEOConfig({
    title: "About Us - Sorriso Care | Dental Tourism in Montenegro",
    description:
      "Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism. Discover our services including dental implants, veneers, and full-mouth restoration.",
    url: "https://sorriso.care/about"
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

      <main>
        {/* About Us Section */}
        <section className="mb-24" aria-labelledby="about-us-heading">
          <h1 id="about-us-heading" className="sr-only">
            About Us
          </h1>
          <AboutUs />
        </section>

        {/* Mission Section */}
        <section className="mb-24" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="sr-only">
            Our Mission
          </h2>
          <Mission />
        </section>

        {/* YouTube Embed Section */}
        <section className="mb-24" aria-labelledby="youtube-embed-heading">
          <h2 id="youtube-embed-heading" className="sr-only">
            YouTube Introduction
          </h2>
          <YouTubeEmbed />
        </section>

        {/* Box Section */}
        <section className="mb-24" aria-labelledby="box-heading">
          <h2 id="box-heading" className="sr-only">
            Our Values
          </h2>
          <Box />
        </section>

        {/* Why Montenegro Section */}
        <section className="mb-24" aria-labelledby="why-montenegro-heading">
          <h2 id="why-montenegro-heading" className="sr-only">
            Why Montenegro?
          </h2>
          <WhyMontenegro />
        </section>

        {/* Dental Travel Intro Section */}
        <section className="mb-24" aria-labelledby="dental-travel-heading">
          <h2 id="dental-travel-heading" className="sr-only">
            Dental Travel
          </h2>
          <DentalTravelIntro />
        </section>

        {/* Montenegro Section */}
        <section className="mb-24" aria-labelledby="montenegro-heading">
          <h2 id="montenegro-heading" className="sr-only">
            Explore Montenegro
          </h2>
          <Montenegro />
        </section>

        {/* CTA Section */}
        <section className="mb-24" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">
            Get Started
          </h2>
          <CTA />
        </section>
      </main>
    </>
  );
};

export default About;
