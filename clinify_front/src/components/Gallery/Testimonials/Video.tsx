"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

const VideoSection: React.FC = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <section className="flex flex-col items-center bg-transparent py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Title Section */}
      <div className="container mx-auto text-center mb-8 md:mb-12">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-teal-900 mb-4 sm:mb-6 leading-tight"
        >
          {t("videoSection.title")}
        </h2>
        <p
          data-aos="fade-up"
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-teal-700 max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-6 md:mb-8"
        >
          {t("videoSection.description")}
        </p>
      </div>

      {/* Video Section */}
      <div
        data-aos="fade-up"
        className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] aspect-video overflow-hidden rounded-2xl mx-auto"
      >
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/CoucS-fy2FI?si=qt3GdS64rwl0elN2&start=8"
          title={t("videoSection.iframeTitle")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
