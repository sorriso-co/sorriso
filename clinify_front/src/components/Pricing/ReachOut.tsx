"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { t } = useTranslation('pricing');

  return (
    <div className="bg-teal-300 py-16 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white" data-aos="fade-up">
          {t('contactUs.title')}
        </h2>
        <p
          className="text-gray-100 mb-6 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t('contactUs.description')}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-teal-600 py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 mb-6 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t('contactUs.contactButton')}
        </Link>
        <div
          className="text-gray-100 my-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {t('contactUs.callUs')}
        </div>
        <div
          className="flex justify-center items-center space-x-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center bg-white text-teal-600 py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-6 h-6 mr-3 text-green-500"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="w-6 h-6 mr-3 text-blue-500"
            />
            <span className="font-semibold">{t('contactUs.phone')}</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <div className="w-64 h-64 bg-white opacity-10 rounded-full blur-xl animate-spin-slow"></div>
        <div className="w-32 h-32 bg-white opacity-20 rounded-full blur-xl animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default ContactUs;
