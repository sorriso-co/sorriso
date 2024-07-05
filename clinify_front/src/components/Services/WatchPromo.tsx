"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

const WatchPromo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const { t } = useTranslation("business");

  return (
    <div className="bg-teal-50 py-16 px-4 md:px-8 relative overflow-x-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 text-teal-600 leading-tight">
            {t("watchPromo.title")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-serif text-teal-600 leading-relaxed mb-8">
            {t("watchPromo.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" passHref>
              <div className="bg-teal-500 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-110 inline-block text-base md:text-lg lg:text-xl shadow-lg cursor-pointer">
                {t("watchPromo.ctaFreeTrial")}
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div className="bg-white text-teal-600 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110 inline-block text-base md:text-lg lg:text-xl shadow-lg cursor-pointer">
                {t("watchPromo.ctaContactUs")}
              </div>
            </Link>
          </div>
        </div>

        <div
          className="lg:w-1/2 flex flex-col items-center"
          data-aos="fade-left"
        >
          <div className="mb-8">
            <Image
              src="/images/services/conf.png"
              width={550}
              height={550}
              priority
              alt="Promo Image 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <button
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-full shadow-md transition duration-300 mt-8 flex items-center"
            onClick={toggleModal}
          >
            <FaPlay className="mr-2" /> {t("watchPromo.videoButton")}
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
              <div className="bg-white rounded-lg p-8 w-full max-w-5xl relative shadow-xl">
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-3xl"
                >
                  &times;
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/OEyE7MUoXIc?si=jwWSu2l9DkDTFT8Q&amp;start=3"
                    title="YouTube video player"
                    className="w-full h-[500px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
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
          <circle cx="40%" cy="20%" r="300" fill="url(#gradient1)" />
        </svg>
      </div>
    </div>
  );
};

export default WatchPromo;
