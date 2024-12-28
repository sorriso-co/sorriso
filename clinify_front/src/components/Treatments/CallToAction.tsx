"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const CallToAction: React.FC = () => {
  const { t } = useTranslation("services");

  return (
    <section className="relative bg-transparent px-8 text-center">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-teal-800 mb-6">
          {t("cta.title")}
        </h2>

        {/* Description */}
        <p className="text-base md:text-xl font-serif text-teal-800 mb-8">
          {t("cta.description")}
        </p>

        {/* Call to Action Button */}
        <Link href="/contact" passHref>
          <div className="bg-teal-700 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-800 transition-colors inline-block text-lg cursor-pointer">
            {t("cta.buttonText")}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
