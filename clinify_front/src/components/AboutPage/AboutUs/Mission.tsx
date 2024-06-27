"use client";
import React, { useEffect } from "react";
import Image from "next/image"; // Use the new Image component
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-teal-200 via-teal-100 to-teal-50 text-left py-12 px-6 sm:py-16 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(0,128,128,0.2)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle cx="25%" cy="30%" r="200" fill="url(#gradient1)" />
          <circle cx="75%" cy="70%" r="200" fill="url(#gradient1)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12 2xl:space-x-16 m-3">
        <div className="w-full lg:w-1/2 lg:order-1 lg:pl-8 xl:pl-12 2xl:pl-16" data-aos="fade-left">
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold mb-4 sm:mb-6 text-teal-900 hover:text-teal-700 transition duration-300">
            {t('mission.title')}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-serif text-teal-800 mb-6 sm:mb-12 font-semibold">
            {t('mission.subtitle')}
          </h2>
          <div className="text-base sm:text-xl text-teal-800 font-serif space-y-4 sm:space-y-6">
            <p className="leading-relaxed">
              {t('mission.paragraph1')}
            </p>
            <p className="leading-relaxed">
              {t('mission.paragraph2')}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-right">
          <Image
            src="/images/Team/staff/milija.jpg"
            alt="Healthcare Mission"
            width={450}
            height={500}
            className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
