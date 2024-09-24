"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import GallerySection from "@/components/Gallery/Gallery";
import TestimonialsHero from "@/components/Gallery/TestimonialsHero";
import Head from "next/head"; 

const Gallery = () => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{t("meta_gallery.title", { defaultValue: "Gallery - Sorriso Care | See Our Successful Dental Treatments" })}</title>
        <meta
          name="description"
          content={t("meta_gallery.description", {
            defaultValue: "Explore the gallery of Sorriso Care to see real-life examples of our successful dental treatments. Discover how we transform smiles!",
          })}
        />
        <meta
          name="keywords"
          content={t("meta_gallery.keywords", {
            defaultValue: "Sorriso Care gallery, dental treatment photos, smile transformation, dental tourism Montenegro",
          })}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={t("meta_gallery.og_title", { defaultValue: "Gallery - Sorriso Care" })} />
        <meta
          property="og:description"
          content={t("meta_gallery.og_description", {
            defaultValue: "Explore our gallery to see how Sorriso Care transforms smiles with expert dental treatments.",
          })}
        />
        <meta property="og:url" content="https://sorriso.care/gallery" />
        <meta property="og:image" content={t("meta_gallery.og_image", { defaultValue: "https://sorriso.care/images/gallery-thumbnail.jpg" })} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta_gallery.twitter_title", { defaultValue: "Gallery - Sorriso Care" })} />
        <meta
          name="twitter:description"
          content={t("meta_gallery.twitter_description", {
            defaultValue: "See the gallery of Sorriso Care and discover the dental transformations of our patients.",
          })}
        />
        <meta name="twitter:image" content={t("meta_gallery.twitter_image", { defaultValue: "https://sorriso.care/images/gallery-thumbnail.jpg" })} />
      </Head>

      <div className="lg:px-20 xl:px-28 2xl:px-40 px-4 mx-auto mb-40 space-y-16">
        {/* Hero Section */}
        <TestimonialsHero />

        {/* Gallery Section */}
        <GallerySection />
      </div>
    </>
  );
};

export default Gallery;
