"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faTooth,
  faCube,
  faCamera,
  faGlobe,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const CompetitiveAdvantage = () => {
  const { t } = useTranslation('pricing');

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-full relative bg-teal-200 text-teal-900 p-8 md:p-16 rounded-lg shadow-lg overflow-x-hidden">
      <div className="absolute inset-0 bg-teal-100 opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h2
          className="text-6xl font-serif font-semibold mb-6 text-center"
          data-aos="fade-up"
        >
          {t('competitiveAdvantage.title')}
        </h2>
        <p
          className="text-center mb-8 max-w-3xl font-serif text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t('competitiveAdvantage.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mt-8">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="bg-white text-teal-600 p-6 rounded-full mb-4">
              <FontAwesomeIcon icon={faHandsHelping} className="w-12 h-12" />
            </div>
            <h3 className="font-bold font-serif text-xl mb-2">
              {t('competitiveAdvantage.advantages.personalizedCare.title')}
            </h3>
            <p className="text-center">
              {t('competitiveAdvantage.advantages.personalizedCare.description')}
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-white text-teal-600 p-6 rounded-full mb-4">
              <FontAwesomeIcon icon={faTooth} className="w-12 h-12" />
            </div>
            <h3 className="font-bold font-serif text-xl mb-2">
              {t('competitiveAdvantage.advantages.qualityService.title')}
            </h3>
            <p className="text-center">
              {t('competitiveAdvantage.advantages.qualityService.description')}
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-white text-teal-600 p-6 rounded-full mb-4">
              <FontAwesomeIcon icon={faDollarSign} className="w-12 h-12" />
            </div>
            <h3 className="font-bold font-serif text-xl mb-2">
              {t('competitiveAdvantage.advantages.competitivePricing.title')}
            </h3>
            <p className="text-center">
              {t('competitiveAdvantage.advantages.competitivePricing.description')}
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-white text-teal-600 p-6 rounded-full mb-4">
              <FontAwesomeIcon icon={faCube} className="w-12 h-12" />
            </div>
            <h3 className="font-bold font-serif text-xl mb-2">
              {t('competitiveAdvantage.advantages.highQualityMaterials.title')}
            </h3>
            <p className="text-center">
              {t('competitiveAdvantage.advantages.highQualityMaterials.description')}
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-white text-teal-600 p-6 rounded-full mb-4">
              <FontAwesomeIcon icon={faCamera} className="w-12 h-12" />
            </div>
            <h3 className="font-bold font-serif text-xl mb-2">
              {t('competitiveAdvantage.advantages.beautifulMontenegro.title')}
            </h3>
            <p className="text-center">
              {t('competitiveAdvantage.advantages.beautifulMontenegro.description')}
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-white text-teal-600 p-6 rounded-full mb-4">
              <FontAwesomeIcon icon={faGlobe} className="w-12 h-12" />
            </div>
            <h3 className="font-bold font-serif text-xl mb-2">
              {t('competitiveAdvantage.advantages.internationalConnections.title')}
            </h3>
            <p className="text-center">
              {t('competitiveAdvantage.advantages.internationalConnections.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAdvantage;
