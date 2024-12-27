"use client";
import React from "react";
import ContactSection from "../../components/Contact/ContactSection";
import Head from "next/head";
import { getSEOConfig } from "@/app/seoConfig";

const Contact: React.FC = () => {
  // Page-specific SEO configuration
  const seoConfig = getSEOConfig({
    title: "Contact Us - Sorriso Care | Get in Touch with Our Team",
    description:
      "Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro. We're here to help!",
    url: "https://sorriso.care/contact"
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

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section aria-labelledby="contact-section-heading">
            <h1 id="contact-section-heading" className="sr-only">
              Contact Us
            </h1>
            <ContactSection />
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
