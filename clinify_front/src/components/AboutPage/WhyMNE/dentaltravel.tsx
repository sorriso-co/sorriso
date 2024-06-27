"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faHotel, faEye } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const DentalTravelIntro: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-teal-50 py-20">
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-center text-center md:text-left"
          data-aos="fade-up"
        >
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6 md:mb-10 font-serif">
              {t('dentalTravelIntro.title')}
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl mb-6 md:mb-10 font-serif font-light">
              {t('dentalTravelIntro.description')}
            </p>
            <Link href="/contact">
              <button className="bg-teal-500 font-serif font-bold text-white text-md md:text-xl px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transition duration-300 transform hover:scale-105">
                {t('dentalTravelIntro.buttonText')}
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:ml-10 md:w-1/2" data-aos="fade-left">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/mne/blue-cave.jpeg"
                alt="Montenegro landscape"
                width={600}
                height={400}
                priority
                className="object-cover w-full h-full transition-transform transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="grid grid-cols-3 gap-4">
                  <Link href="/contact">
                    <div className="flex flex-col items-center text-white hover:text-teal-500 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="w-8 h-8 mb-2 md:w-12 md:h-12"
                      />
                      <span className="text-sm font-serif">
                        {t('dentalTravelIntro.travel')}
                      </span>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="flex flex-col items-center text-white hover:text-teal-500 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faHotel}
                        className="w-8 h-8 mb-2 md:w-12 md:h-12"
                      />
                      <span className="text-sm font-serif">
                        {t('dentalTravelIntro.accommodation')}
                      </span>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="flex flex-col items-center text-white hover:text-teal-500 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="w-8 h-8 mb-2 md:w-12 md:h-12"
                      />
                      <span className="text-sm font-serif">
                        {t('dentalTravelIntro.sightseeing')}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalTravelIntro;
