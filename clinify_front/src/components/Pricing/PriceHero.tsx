"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("pricing");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="rounded-t-[20px] bg-gradient-to-r from-teal-300 via-teal-200 to-blue-200 py-24 relative overflow-x-hidden text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div
          className="w-full md:w-1/2 py-10 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl mb-6 font-serif">{t("hero.subtitle")}</p>
          <Link
            href="/contact"
            className="inline-block font-serif font-bold bg-teal-500 hover:bg-teal-700 text-white py-3 px-6 rounded transition duration-300"
          >
            {t("hero.cta")}
          </Link>
          <p className="mt-2 text-sm italic font-serif">{t("hero.ctaNote")}</p>
        </div>
        <div
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <div className="relative priority w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto">
            <Image
              src="/images/Team/staff/sestra.webp"
              alt="Dentist"
              width={500}
              height={600}
              style={{ borderRadius: "10%" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
