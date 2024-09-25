"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Mission: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-left py-12 px-6 sm:py-16 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
      {/* Decorative SVGs for Background */}
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
          <circle cx="25%" cy="30%" r="250" fill="url(#gradient1)" />
          <circle cx="75%" cy="70%" r="250" fill="url(#gradient1)" />
        </svg>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12 2xl:space-x-16 m-3">
        
        {/* Left Text Section */}
        <div
          className="w-full lg:w-1/2 lg:order-1 lg:pl-8 xl:pl-12 2xl:pl-16"
          data-aos="fade-left"
        >
          {/* Main Heading for SEO */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold mb-4 sm:mb-6 text-white hover:text-teal-700 transition duration-300">
            {t('mission.title', { defaultValue: "Patient-Centric Dental Care" })}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-6 sm:mb-12 font-semibold">
            {t('mission.subtitle', { defaultValue: "Excellence, Tailored for You" })}
          </h2>

          {/* Descriptive Text with SEO Keywords */}
          <div className="text-base sm:text-lg lg:text-xl text-white font-sans space-y-4 sm:space-y-6">
            <p className="leading-relaxed text-white">
              {t('mission.description1', { defaultValue: "At Sorriso, we combine advanced dental care with personalized treatment plans, ensuring your comfort and well-being at every step. Our mission is to deliver expert care in Montenegro, offering high-quality services to achieve your best smile." })}
            </p>
            <p className="leading-relaxed text-white">
              {t('mission.description2', { defaultValue: "With cutting-edge technology and a dedicated team, we provide a seamless dental experience, making Sorriso a leader in dental tourism. Trust us to deliver the best care, from implants to cosmetic treatments." })}
            </p>
            {/* Call-to-Action */}
            <p className="leading-relaxed">
              <Link
                href="/services"
                className="text-white hover:text-teal-100 transition duration-200 underline"
              >
                {t('mission.cta', { defaultValue: "Learn more about our services and how we can enhance your smile." })}
              </Link>
            </p>
          </div>
        </div>

        {/* Right-side Image */}
        <div
          className="w-full lg:w-1/2 lg:order-2 flex justify-center lg:justify-end"
          data-aos="fade-right"
        >
          <Image
            src="/images/Team/staff/team.webp"
            alt="Sorriso Dental Team"
            width={700}
            height={500}
            className="rounded-lg transform transition-transform hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
