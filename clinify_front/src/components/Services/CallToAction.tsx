"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

const CallToAction = () => {
  const { t } = useTranslation('services'); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-r overflow-x-hidden from-teal-100 via-teal-200 to-teal-300 py-16 px-8 relative overflow-hidden">
      <div
        className="container mx-auto text-center relative z-10"
        data-aos="zoom-in"
      >
        <h2 className="text-5xl font-extrabold mb-8 text-teal-900 drop-shadow-lg">
          {t('callToAction.title')}
        </h2>
        <button className="bg-white text-teal-600 py-3 px-8 rounded-full font-bold text-xl hover:bg-teal-100 transition-colors shadow-2xl transform hover:scale-105 transition-transform duration-300">
          {t('callToAction.cta')}
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 opacity-50 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <div className="w-64 h-64 bg-white opacity-10 rounded-full blur-xl animate-spin-slow"></div>
        <div className="w-32 h-32 bg-white opacity-20 rounded-full blur-xl animate-spin-reverse"></div>
      </div>
    </section>
  );
};

export default CallToAction;
