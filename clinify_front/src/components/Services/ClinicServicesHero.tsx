import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'next-i18next';

const ClinicServicesHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const { t } = useTranslation('business');

  return (
    <div className=" bg-gradient-to-br overflow-x-hidden from-teal-400 via-teal-300 to-teal-200 py-32 px-8 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
        <div className="text-left lg:w-1/2" data-aos="fade-right">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight drop-shadow-lg">
            {t('clinicServicesHero.title')}
          </h1>
          <p className="text-xl lg:text-3xl mb-8 font-serif text-white leading-relaxed drop-shadow-lg">
            {t('clinicServicesHero.subtitle')}
          </p>
          <Link
            href="/services"
            className="bg-white text-teal-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110 inline-block text-xl lg:text-2xl shadow-lg"
          >
            {t('clinicServicesHero.cta')}
          </Link>
        </div>
        <div
          className="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 relative"
          data-aos="fade-left"
        >
          <div className="relative w-96 h-96 lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-2xl transform rotate-6">
            <Image
              src="/images/Team/founders/filip.jpg"
              alt="Private Clinic Services"
              width={550}
              height={650}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
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
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-40 h-40 bg-gradient-to-r from-teal-200 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default ClinicServicesHero;