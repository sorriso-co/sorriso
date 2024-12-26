"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const ServiceHero: React.FC = () => {
  const { t } = useTranslation("services");

  return (
    <section className="relative bg-gradient-to-br from-teal-900 via-teal-600 to-teal-400 text-white py-24 px-8 overflow-hidden rounded-xl shadow-2xl font-serif">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text Section */}
        <div className="w-full md:w-1/2 max-w-3xl mb-12 md:mb-0 md:mr-8">
          <h1 className="text-4xl font-serif sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
            {t("serviceHero.title", {
              defaultValue: "Premium Dental Services",
            })}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif mb-8 text-teal-100 leading-relaxed">
            {t("serviceHero.description", {
              defaultValue:
                "Discover world-class dental services tailored to meet your needs. Our experienced professionals deliver exceptional care, ensuring a comfortable and effective experience for every patient.",
            })}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link href="/#how-it-works-section" passHref>
              <button className="font-serif bg-white text-teal-700 font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-teal-100 text-base sm:text-lg">
                {t("serviceHero.ctaLearnMore", { defaultValue: "Learn More" })}
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="font-serif bg-teal-800 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-teal-900 text-base sm:text-lg">
                {t("serviceHero.ctaBookAppointment", {
                  defaultValue: "Book an Appointment",
                })}
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <Image
            src="/images/about_us_slide/tech.webp"
            alt="High-Quality Dental Chair for Professional Services"
            width={800}
            height={600}
            priority
            loading="eager"
            className="rounded-xl shadow-2xl max-w-full h-auto border-4 border-white"
          />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient
              id="heroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
            </linearGradient>
          </defs>
          <circle cx="25%" cy="30%" r="350" fill="url(#heroGradient)" />
          <circle cx="75%" cy="70%" r="350" fill="url(#heroGradient)" />
        </svg>
      </div>
    </section>
  );
};

export default ServiceHero;
