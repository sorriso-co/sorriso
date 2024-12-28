"use client";

import React from "react";
import Head from "next/head";
import GallerySection from "@/components/Gallery/Gallery";
import TestimonialsHero from "@/components/Gallery/TestimonialsHero";

const Gallery: React.FC = () => {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Gallery - Sorriso Care | See Our Successful Dental Treatments</title>
        <meta
          name="description"
          content="Explore the gallery of Sorriso Care to see real-life examples of our successful dental treatments. Discover how we transform smiles!"
        />
        <meta
          name="keywords"
          content="dental gallery, smile transformation, before and after dental treatments, successful dental cases, dental care Montenegro, aesthetic smile makeover, cosmetic dentistry results, patient testimonials, beauty transformations, professional dental photography"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/gallery" />
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
          content="Gallery - Sorriso Care | See Our Successful Dental Treatments"
        />
        <meta
          property="og:description"
          content="Explore the gallery of Sorriso Care to see real-life examples of our successful dental treatments. Discover how we transform smiles!"
        />
        <meta property="og:url" content="https://sorriso.care/gallery" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/gallery-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="Gallery - Sorriso Care | See Our Successful Dental Treatments"
        />
        <meta
          name="twitter:description"
          content="Explore the gallery of Sorriso Care to see real-life examples of our successful dental treatments. Discover how we transform smiles!"
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/gallery-og-image.jpg"
        />
      </Head>
      <main className="lg:px-20 xl:px-28 2xl:px-40 px-4 mx-auto mb-40 space-y-16">
        <TestimonialsHero />
        <GallerySection />
      </main>
    </>
  );
};

export default Gallery;
