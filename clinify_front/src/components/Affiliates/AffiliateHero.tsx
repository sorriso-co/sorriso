"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation("business");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r overflow-x-hidden from-teal-800 to-teal-600 py-24 px-8 relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center">
          <h1
            className="text-6xl lg:text-7xl font-serif font-bold mb-6 text-white"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {t("hero.headline1")}
          </h1>
          <h1
            className="text-6xl lg:text-7xl font-serif font-bold mb-6 text-white"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {t("hero.headline2")}
          </h1>
          <h1
            className="text-6xl lg:text-7xl font-serif font-bold mb-6 text-white"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            {t("hero.headline3")}
          </h1>
          <div
            className="container mx-auto"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <p className="text-2xl lg:text-3xl mb-8 font-serif text-gray-200">
              {t("hero.description")}
            </p>
          </div>
          <Link href="/contact" passHref>
            <button
              className="bg-teal-400 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 
              hover:text-white transition-transform transform hover:scale-105 inline-block text-xl lg:text-2xl"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              {t("hero.ctaText")}
            </button>
          </Link>
        </div>
        <div
          className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/affiliates/affiliates.jpg"
              alt={t("hero.imageAlt")}
              width={1000}
              height={1000}
              priority
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L60,85.3C120,107,240,149,360,176C480,203,600,213,720,218.7C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
