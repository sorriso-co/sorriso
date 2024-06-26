"use client";

import React, { useEffect } from "react";
import Image from "next/legacy/image";
import TestSwiper from "./Swiper";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslation } from "react-i18next";

const AboutUs: React.FC = () => {
  const { t } = useTranslation('about');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/about_us_slide/tech.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:py-20">
        <div className="md:w-1/2 md:pr-8 lg:pr-12 xl:pr-16">
          <ul className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16">
            <li
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-serif text-white drop-shadow-md transition-transform transform hover:scale-105 hover:text-gray-300"
              data-aos="fade-up"
            >
              {t('about.advantages.first')}
            </li>
            <li
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-serif text-white drop-shadow-md transition-transform transform hover:scale-105 hover:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('about.advantages.second')}
            </li>
            <li
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-serif text-white drop-shadow-md transition-transform transform hover:scale-105 hover:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t('about.advantages.third')}
            </li>
          </ul>
          <p
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-relaxed font-sans text-gray-100 transition-transform transform hover:translate-y-1 hover:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t('about.description')}
          </p>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative z-10 p-4 md:mt-10"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <TestSwiper />
      </div>
    </div>
  );
};

export default AboutUs;
