"use client";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsHero = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 py-28 md:py-36 px-6 text-white rounded-t-[40px] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/images/patterns/hero-pattern.svg")',
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative container mx-auto text-center" data-aos="fade-up">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight">
          {t("testimonialsHero.title", {
            defaultValue: "Our Satisfied Patients",
          })}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl font-light max-w-4xl mx-auto text-teal-100 tracking-wide leading-relaxed mb-10">
          {t("testimonialsHero.description", {
            defaultValue:
              "Hear from our patients about their experiences and the high-quality care they received.",
          })}
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block bg-white text-teal-700 font-semibold text-lg md:text-xl py-3 px-8 rounded-full shadow-md hover:bg-teal-100 transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          {t("testimonialsHero.cta", { defaultValue: "Contact Us" })}
        </a>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7f7f7"
            d="M0,96L60,112C120,128,240,160,360,181.3C480,203,600,213,720,218.7C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsHero;
