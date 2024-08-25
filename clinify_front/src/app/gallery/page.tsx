"use client";
import React from "react";
import GallerySection from "@/components/Gallery/Gallery";
import RootLayout from "../layout";

const Gallery = () => {
  return (
    <RootLayout title="Sorriso - Dental Work">
      <div className="lg:px-0 mx-auto px-4">
        <GallerySection />
      </div>
    </RootLayout>
  );
};

export default Gallery;
