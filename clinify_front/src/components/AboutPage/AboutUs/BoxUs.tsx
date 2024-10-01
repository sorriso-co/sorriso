"use client";
import React from "react";
import { useTranslation } from "next-i18next";

const Box: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <div className="py-16 px-8 lg:px-16 bg-teal-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Title Section */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-teal-900 mb-4">
          {t("box.section1.title", { defaultValue: "Why Choose Sorriso?" })}
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-teal-700 mb-6">
          {t("box.section1.subtitle", { defaultValue: "Committed to Excellence" })}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-serif text-teal-700">
          {t("box.section1.description", {
            defaultValue: "Our mission is to deliver world-class dental care and ensure client satisfaction.",
          })}
        </p>
      </div>

      {/* Metrics Section */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {/* Client Satisfaction */}
        <div className="space-y-2">
          <span className="block text-lg font-serif font-semibold text-teal-700">
            {t("box.metrics.client_satisfaction", { defaultValue: "Client Satisfaction" })}
          </span>
          <div className="relative w-full h-6 rounded-full bg-gray-300">
            <div className="absolute top-0 left-0 h-full rounded-full bg-teal-700 text-white flex items-center justify-center text-sm font-bold" style={{ width: "94%" }}>
              94%
            </div>
          </div>
        </div>

        {/* Dental Treatment Success */}
        <div className="space-y-2">
          <span className="block text-lg font-serif font-semibold text-teal-700">
            {t("box.metrics.dental_success", { defaultValue: "Dental Treatment Success" })}
          </span>
          <div className="relative w-full h-6 rounded-full bg-gray-300">
            <div className="absolute top-0 left-0 h-full rounded-full bg-teal-700 text-white flex items-center justify-center text-sm font-bold" style={{ width: "98%" }}>
              98%
            </div>
          </div>
        </div>

        {/* Client Referrals */}
        <div className="space-y-2">
          <span className="block text-lg font-serif font-semibold text-teal-700">
            {t("box.metrics.client_referral", { defaultValue: "Client Referrals" })}
          </span>
          <div className="relative w-full h-6 rounded-full bg-gray-300">
            <div className="absolute top-0 left-0 h-full rounded-full bg-teal-700 text-white flex items-center justify-center text-sm font-bold" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
