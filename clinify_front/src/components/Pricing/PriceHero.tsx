"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("pricing");

  return (
    <header className="relative rounded-t-[20px] bg-gradient-to-br from-teal-700 to-teal-900 py-16 sm:py-24 overflow-x-hidden text-white p-6 sm:p-8">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between space-y-10 md:space-y-0">
        {/* <div className="w-full md:w-1/2 flex justify-center md:justify-end"> */}
        {/* <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto"> */}
        <div
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <div className="relative priority w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto">
            <Image
              src="/images/Team/staff/sestra.jpg"
              alt="Dentist"
              width={500}
              height={600}
              style={{ borderRadius: "10%" }}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 font-serif">
            {t("hero.subtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-block font-serif font-bold bg-white text-teal-700 hover:bg-teal-600 hover:text-white py-4 px-8 md:py-5 md:px-10 lg:py-6 lg:px-8 rounded-full transition-colors duration-200 shadow-md text-lg md:text-xl lg:text-2xl"
            aria-label={t("hero.cta")}
          >
            {t("hero.cta")}
          </Link>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl italic font-serif text-teal-200">
            {t("hero.ctaNote")}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient
              id="heroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(0,128,128,0.2)" />
            </linearGradient>
          </defs>
          <circle cx="30%" cy="30%" r="250" fill="url(#heroGradient)" />
          <circle cx="70%" cy="70%" r="250" fill="url(#heroGradient)" />
        </svg>
      </div>
    </header>
  );
};

export default Hero;
