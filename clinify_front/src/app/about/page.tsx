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

const About: React.FC = () => {
  return (
    <>
      <head>
        {/* Essential Meta Tags */}
        <title>About Us - Sorriso Care | Dental Tourism in Montenegro</title>
        <meta
          name="description"
          content="Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism. Discover our services including dental implants, veneers, and full-mouth restoration."
        />
        <meta
          name="keywords"
          content="dental tourism, dental implants, veneers, full-mouth restoration, Montenegro dental care, affordable dental tourism, Sorriso Care, smile makeover, dental travel, dental vacation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/about" />
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
          content="About Us - Sorriso Care | Dental Tourism in Montenegro"
        />
        <meta
          property="og:description"
          content="Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism."
        />
        <meta property="og:url" content="https://sorriso.care/about" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/about-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="About Us - Sorriso Care | Dental Tourism in Montenegro"
        />
        <meta
          name="twitter:description"
          content="Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/about-og-image.jpg"
        />
      </head>
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
