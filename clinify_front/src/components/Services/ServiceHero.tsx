"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const ServiceHero: React.FC = () => {
  const { t } = useTranslation("services");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      disable: "phone",
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-700 via-teal-500 to-teal-200 text-white py-24 px-8 overflow-x-hidden rounded-lg  shadow-lg font-serif">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="zoom-in-up"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-white">
            {t("serviceHero.title")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-serif mx-auto md:mx-0 mb-8 text-teal-100">
            {t("serviceHero.description")}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            <Link href="/howitworks" passHref>
              <button className="font-serif bg-white text-teal-700 font-bold py-3 px-6 rounded-full shadow-md hover:bg-teal-100 transition-colors duration-300">
                {t("serviceHero.ctaLearnMore")}
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="font-serif bg-teal-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-teal-600 transition-colors duration-300">
                {t("serviceHero.ctaBookAppointment")}
              </button>
            </Link>
          </div>
        </div>
        <div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          data-aos="zoom-in-up"
        >
          <Image
            src="/images/about_us_slide/chair.webp"
            alt="Dental Services"
            width={800}
            height={600}
            priority
            className="rounded-lg shadow-lg max-w-full h-auto border-4 border-white transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
