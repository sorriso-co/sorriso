"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaLanguage, FaCalendarCheck, FaCar, FaHotel, FaFileMedical, FaSmile } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next';

const InternationalPatientWorkflow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const { t } = useTranslation('business');

  return (
    <div className="bg-white py-16 px-4 md:px-8 relative overflow-x-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-teal-700 leading-tight">
              {t('internationalPatientWorkflow.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-serif text-gray-700 leading-relaxed">
              {t('internationalPatientWorkflow.description')}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <Link href="/services" passHref>
                <div className="bg-teal-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 inline-block text-lg md:text-xl lg:text-2xl shadow-lg cursor-pointer">
                  {t('internationalPatientWorkflow.cta')}
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0" data-aos="fade-up">
            <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaLanguage className="text-teal-600 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif">
                {t('internationalPatientWorkflow.feature1.title')}
              </h2>
              <p className="text-base text-gray-700 font-serif">
                {t('internationalPatientWorkflow.feature1.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCalendarCheck className="text-teal-600 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif">
                {t('internationalPatientWorkflow.feature2.title')}
              </h2>
              <p className="text-base text-gray-700 font-serif">
                {t('internationalPatientWorkflow.feature2.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCar className="text-teal-600 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif">
                {t('internationalPatientWorkflow.feature3.title')}
              </h2>
              <p className="text-base text-gray-700 font-serif">
                {t('internationalPatientWorkflow.feature3.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaHotel className="text-teal-600 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif">
                {t('internationalPatientWorkflow.feature4.title')}
              </h2>
              <p className="text-base text-gray-700 font-serif">
                {t('internationalPatientWorkflow.feature4.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaFileMedical className="text-teal-600 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif">
                {t('internationalPatientWorkflow.feature5.title')}
              </h2>
              <p className="text-base text-gray-700 font-serif">
                {t('internationalPatientWorkflow.feature5.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaSmile className="text-teal-600 text-6xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 font-serif">
                {t('internationalPatientWorkflow.feature6.title')}
              </h2>
              <p className="text-base text-gray-700 font-serif">
                {t('internationalPatientWorkflow.feature6.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,128,128,0.2)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="40%" cy="20%" r="300" fill="url(#gradient1)" />
        </svg>
      </div>
    </div>
  );
};

export default InternationalPatientWorkflow;