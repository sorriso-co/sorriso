"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import AboutUs from "@/components/AboutPage/AboutUs/AboutUs";
import Box from "@/components/AboutPage/AboutUs/BoxUs";
import YouTubeEmbed from "@/components/AboutPage/Youtube/YoutubeEmbed";
import Mission from "@/components/AboutPage/AboutUs/Mission";
import WhyMontenegro from "@/components/AboutPage/WhyMNE/intro";
import DentalTravelIntro from "@/components/AboutPage/WhyMNE/dentaltravel";
import Montenegro from "../../components/AboutPage/WhyMNE/Montenegro";
import CTA from "@/components/AboutPage/WhyMNE/CTA";
import Head from "next/head"; // Import Head for meta tags

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>{t("meta_about.title", { defaultValue: "About Us - Sorriso Care | Dental Tourism in Montenegro" })}</title>
        <meta
          name="description"
          content={t("meta_about.description", { defaultValue: "Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism." })}
        />
        <meta
          name="keywords"
          content={t("meta_about.keywords", { defaultValue: "Sorriso Care, dental tourism, Montenegro, dental care, dental travel, Montenegro tourism" })}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content={t("meta_about.og_title", { defaultValue: "About Us - Sorriso Care" })} />
        <meta
          property="og:description"
          content={t("meta_about.og_description", { defaultValue: "Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism." })}
        />
        <meta property="og:url" content="https://sorriso.care/about" />
        <meta property="og:image" content={t("meta_about.og_image", { defaultValue: "https://sorriso.care/images/about-thumbnail.jpg" })} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta_about.twitter_title", { defaultValue: "About Us - Sorriso Care" })} />
        <meta
          name="twitter:description"
          content={t("meta_about.twitter_description", { defaultValue: "Learn more about Sorriso Care, our mission, and why Montenegro is the perfect destination for dental tourism." })}
        />
        <meta name="twitter:image" content={t("meta_about.twitter_image", { defaultValue: "https://sorriso.care/images/about-thumbnail.jpg" })} />
      </Head>

      <main>
        {/* About Us Section */}
        <section className="mb-24" aria-labelledby="about-us-heading">
          <h1 id="about-us-heading" className="sr-only">
            {t('about_us_title')}
          </h1>
          <AboutUs />
        </section>

        {/* Mission Section */}
        <section className="mb-24" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="sr-only">
            {t('mission_title')}
          </h2>
          <Mission />
        </section>

        {/* YouTube Embed Section */}
        <section className="mb-24" aria-labelledby="youtube-embed-heading">
          <h2 id="youtube-embed-heading" className="sr-only">
            {t('youtube_title')}
          </h2>
          <YouTubeEmbed />
        </section>

        {/* Box Section */}
        <section className="mb-24" aria-labelledby="box-heading">
          <h2 id="box-heading" className="sr-only">
            {t('box_title')}
          </h2>
          <Box />
        </section>

        {/* Why Montenegro Section */}
        <section className="mb-24" aria-labelledby="why-montenegro-heading">
          <h2 id="why-montenegro-heading" className="sr-only">
            {t('why_montenegro_title')}
          </h2>
          <WhyMontenegro />
        </section>

        {/* Dental Travel Intro Section */}
        <section className="mb-24" aria-labelledby="dental-travel-heading">
          <h2 id="dental-travel-heading" className="sr-only">
            {t('dental_travel_title')}
          </h2>
          <DentalTravelIntro />
        </section>

        {/* Montenegro Section */}
        <section className="mb-24" aria-labelledby="montenegro-heading">
          <h2 id="montenegro-heading" className="sr-only">
            {t('montenegro_title')}
          </h2>
          <Montenegro />
        </section>

        {/* CTA Section */}
        <section className="mb-24" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">
            {t('cta_title')}
          </h2>
          <CTA />
        </section>
      </main>
    </>
  );
};

export default About;
