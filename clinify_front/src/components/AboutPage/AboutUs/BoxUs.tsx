"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Box: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className="relative">
      {/* Metrics Section */}
      <div className="bg-white py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-serif font-extrabold text-teal-900 mb-4">
              {t('box.section1.title', { defaultValue: "Why Choose Sorriso?" })}
            </h2>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-teal-700 mb-6">
              {t('box.section1.subtitle', { defaultValue: "Committed to Excellence" })}
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-teal-700 mb-8">
              {t('box.section1.description', { defaultValue: "Our mission is to deliver world-class dental care and ensure client satisfaction." })}
            </p>
          </div>

          {/* Progress Bars */}
          <div className="space-y-8">
            <div className="metric">
              <span className="block text-lg font-serif font-semibold text-teal-700 mb-2">
                {t('box.metrics.client_satisfaction', { defaultValue: "Client Satisfaction" })}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full flex items-center justify-center text-white text-base font-semibold animate-progress"
                  style={{ width: "94%" }}
                >
                  94%
                </div>
              </div>
            </div>

            <div className="metric">
              <span className="block text-lg font-serif font-semibold text-teal-700 mb-2">
                {t('box.metrics.dental_success', { defaultValue: "Dental Treatment Success" })}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full flex items-center justify-center text-white text-base font-semibold animate-progress"
                  style={{ width: "98%" }}
                >
                  98%
                </div>
              </div>
            </div>

            <div className="metric">
              <span className="block text-lg font-serif font-semibold text-teal-700 mb-2">
                {t('box.metrics.client_referral', { defaultValue: "Client Referrals" })}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full flex items-center justify-center text-white text-base font-semibold animate-progress"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
