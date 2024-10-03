"use client";
import React from "react";
import { useTranslation } from "next-i18next";

const TestimonialsHero: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative bg-gradient-to-r from-teal-800 via-teal-600 to-teal-800 py-16 md:py-24 lg:py-32 px-4 text-white rounded-t-[40px] overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 leading-tight">
          {t("testimonialsHero.title", { defaultValue: "Satisfied Patients of Sorriso Care" })}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto text-teal-100 mb-8">
          {t("testimonialsHero.description", {
            defaultValue:
              "Discover what our patients have to say about their transformative experiences at Sorriso Care. Read their testimonials and learn about the exceptional dental treatments that made their journey unforgettable.",
          })}
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block bg-white text-teal-700 font-semibold text-lg py-3 px-8 rounded-full shadow-sm hover:bg-teal-100"
          aria-label="Contact Sorriso Care for more information"
        >
          {t("testimonialsHero.cta", { defaultValue: "Contact Us Today" })}
        </a>
      </div>
    </section>
  );
};

export default TestimonialsHero;
