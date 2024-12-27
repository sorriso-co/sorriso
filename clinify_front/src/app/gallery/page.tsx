"use client";
import React from "react";
import GallerySection from "@/components/Gallery/Gallery";
import TestimonialsHero from "@/components/Gallery/TestimonialsHero";
import Head from "next/head";
import { getSEOConfig } from "@/app/seoConfig";

const Gallery = () => {
  // Page-specific SEO configuration
  const seoConfig = getSEOConfig({
    title: "Gallery - Sorriso Care | See Our Successful Dental Treatments",
    description:
      "Explore the gallery of Sorriso Care to see real-life examples of our successful dental treatments. Discover how we transform smiles!",
    url: "https://sorriso.care/gallery"
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

      <div className="lg:px-20 xl:px-28 2xl:px-40 px-4 mx-auto mb-40 space-y-16">
        <TestimonialsHero />
        <GallerySection />
      </div>
    </>
  );
};

export default Gallery;
