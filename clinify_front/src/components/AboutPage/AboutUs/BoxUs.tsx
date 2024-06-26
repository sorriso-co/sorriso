"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Box: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className="relative">
      <div className="bg-white py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-serif font-extrabold text-teal-900 mb-4">
              {t('box.section1.title')}
            </h2>
            <h1 className="text-4xl font-serif font-bold text-teal-700 mb-6">
              {t('box.section1.subtitle')}
            </h1>
            <p className="text-2xl font-serif text-teal-700 mb-8">
              {t('box.section1.description')}
            </p>
          </div>
          <div className="space-y-8">
            <div className="metric">
              <span className="block text-lg font-serif font-semibold text-teal-700 mb-2">
                {t('box.metrics.client_satisfaction')}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div
                  className="bg-teal-500 h-8 rounded-full flex items-center justify-center text-white text-base font-semibold"
                  style={{ width: "94%" }}
                >
                  94%
                </div>
              </div>
            </div>
            <div className="metric">
              <span className="block text-lg font-serif font-semibold text-teal-700 mb-2">
                {t('box.metrics.dental_success')}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div
                  className="bg-teal-500 h-8 rounded-full flex items-center justify-center text-white text-base font-semibold"
                  style={{ width: "98%" }}
                >
                  98%
                </div>
              </div>
            </div>
            <div className="metric">
              <span className="block text-lg font-serif font-semibold text-teal-700 mb-2">
                {t('box.metrics.client_referral')}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div
                  className="bg-teal-500 h-8 rounded-full flex items-center justify-center text-white text-base font-semibold"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative">
        <div className="bg-gradient-to-r from-teal-600 to-teal-400 py-12 lg:py-24">
          <div className="max-w-4xl mx-auto text-center text-white px-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
              {t('box.cta.title')}
            </h2>
            <p className="text-xl lg:text-2xl mb-8">
              {t('box.cta.description')}
            </p>
            <a
              href="/contact"
              className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110 inline-block text-lg lg:text-xl shadow-lg"
            >
              {t('box.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
