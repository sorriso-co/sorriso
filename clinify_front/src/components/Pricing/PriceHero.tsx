"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("pricing");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header className="relative rounded-t-[20px] bg-gradient-to-br from-teal-700 to-teal-900 py-24 overflow-x-hidden text-white p-8 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        
        {/* Right Section: Image (hidden on mobile, visible on larger screens) */}
        <div
          className="hidden md:block w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/Team/staff/dr.webp"
              alt={t("hero.imageAlt")}
              width={1100}
              height={1400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Left Section: Title and CTA (visible on all devices) */}
        <div
          className="w-full md:w-1/2 py-10 text-center md:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-extrabold mb-6 leading-tight tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl mb-8 font-serif">
            {t("hero.subtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-block font-serif font-bold bg-white text-teal-700 hover:bg-teal-600 hover:text-white py-4 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md"
            aria-label={t("hero.cta")}
          >
            {t("hero.cta")}
          </Link>
          <p className="mt-4 text-lg italic font-serif text-teal-200">
            {t("hero.ctaNote")}
          </p>
        </div>
      </div>

      {/* Subtle Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
