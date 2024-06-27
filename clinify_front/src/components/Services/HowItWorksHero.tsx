"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

const HowItWorksHero: React.FC = () => {
  const { t } = useTranslation("services");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r overflow-x-hidden from-teal-600 to-white py-24 px-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-left lg:w-1/2" data-aos="fade-right">
          <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-4 text-white">
            {t('howItWorksHero.title')}
          </h1>
          <p className="text-2xl lg:text-4xl mb-6 font-serif text-white">
            {t('howItWorksHero.description')}
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-teal transition-transform transform hover:scale-105 inline-block text-xl lg:text-2xl"
          >
            {t('howItWorksHero.cta')}
          </Link>
        </div>
        <div
          className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative"
          data-aos="fade-left"
        >
          <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/logos/how-it-works.png"
              alt="Online consultation"
              width={500}
              height={500}
              priority
              className="rounded-full"
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

export default HowItWorksHero;
