"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutPageCTA: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <section className="bg-transparent py-3 lg:py-4 text-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* CTA Content */}
        <h2 className="text-2xl text-teal-700 sm:text-3xl lg:text-5xl font-bold font-serif mb-4 sm:mb-6">
          {t("cta.title", {
            defaultValue: "Ready to Experience World-Class Dental Care?",
          })}
        </h2>
        <p className="text-base text-teal-700 sm:text-lg lg:text-2xl font-light mb-6 sm:mb-8">
          {t("cta.description", {
            defaultValue:
              "Join thousands of satisfied clients and get the dental care you deserve at Sorriso. Start your journey towards a healthier, more radiant smile today.",
          })}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/contact"
            className="bg-white text-teal-700 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg text-sm sm:text-lg"
          >
            {t("cta.bookButton", { defaultValue: "Book a Consultation" })}
          </Link>
          <Link
            href="/services"
            className="bg-teal-500 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg text-sm sm:text-lg"
          >
            {t("cta.servicesButton", { defaultValue: "Explore Our Services" })}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCTA;
