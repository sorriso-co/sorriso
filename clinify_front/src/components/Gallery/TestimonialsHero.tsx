"use client";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsHero: React.FC = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-teal-800 via-teal-600 to-teal-800 py-20 md:py-32 lg:py-40 px-4 md:px-6 text-white rounded-t-[60px] overflow-hidden">
      <div className="relative container mx-auto text-center" data-aos="fade-up">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-extrabold mb-6 sm:mb-8 tracking-tight leading-tight sm:leading-tight">
          {t("testimonialsHero.title", {
            defaultValue: "Satisfied Patients of Sorriso Care",
          })}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-teal-100 tracking-wide leading-relaxed sm:leading-relaxed md:leading-relaxed mb-8 sm:mb-12">
          {t("testimonialsHero.description", {
            defaultValue:
              "Discover what our patients have to say about their transformative experiences at Sorriso Care. Read their testimonials and learn about the exceptional dental treatments that made their journey unforgettable.",
          })}
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block bg-white text-teal-700 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg hover:bg-teal-100 transition-transform transform hover:scale-105"
          data-aos="zoom-in"
          aria-label="Contact Sorriso Care for more information"
        >
          {t("testimonialsHero.cta", { defaultValue: "Contact Us Today" })}
        </a>
      </div>
    </section>
  );
};

export default TestimonialsHero;

