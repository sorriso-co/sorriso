"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Service {
  icon: string;
  title: string;
  altText: string;
}

const ServiceGrid: React.FC = () => {
  const { t } = useTranslation("homepage"); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const services: Service[] = [
    {
      icon: "/images/service-grid/general-dent.webp",
      title: t("serviceGrid.services.0.title"),
      altText: t("serviceGrid.services.0.altText"),
    },
    {
      icon: "/images/service-grid/dental-implant.webp",
      title: t("serviceGrid.services.1.title"),
      altText: t("serviceGrid.services.1.altText"),
    },
    {
      icon: "/images/service-grid/dental-crown.webp",
      title: t("serviceGrid.services.2.title"),
      altText: t("serviceGrid.services.2.altText"),
    },
    {
      icon: "/images/service-grid/dental-surgery.webp",
      title: t("serviceGrid.services.3.title"),
      altText: t("serviceGrid.services.3.altText"),
    },
    {
      icon: "/images/service-grid/tooth-whitening.webp",
      title: t("serviceGrid.services.4.title"),
      altText: t("serviceGrid.services.4.altText"),
    },
    {
      icon: "/images/service-grid/protection.webp",
      title: t("serviceGrid.services.5.title"),
      altText: t("serviceGrid.services.5.altText"),
    },
    {
      icon: "/images/service-grid/perio.webp",
      title: t("serviceGrid.services.6.title"),
      altText: t("serviceGrid.services.6.altText"),
    },
    {
      icon: "/images/service-grid/radio.webp",
      title: t("serviceGrid.services.7.title"),
      altText: t("serviceGrid.services.7.altText"),
    },
  ];

  const router = useRouter();

  const handleCardClick = () => {
    router.push("/procedures");
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationDelay = (index: number) => {
    const row = Math.floor(index / 4);
    const column = index % 4;
    return `${row * 1.6 + column * 0.4}s`;
  };

  return (
    <div ref={ref} className="relative overflow-x-hidden px-8 py-16 bg-teal-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
          <circle cx="50%" cy="50%" r="300" fill="url(#gradient2)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-center text-teal-700 mb-4 drop-shadow-lg">
          {t("serviceGrid.title")}
        </h2>
        <p className="text-2xl font-serif text-center text-teal-600 mb-12">
          {t("serviceGrid.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cursor-pointer transform transition duration-700 ease-in-out opacity-0 ${
                inView ? "opacity-100 translate-y-0" : "translate-y-10"
              }`}
              style={{ transitionDelay: getAnimationDelay(index) }}
              onClick={handleCardClick}
            >
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105">
                <div className="w-24 h-24 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.altText}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-600">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full shadow-md transition duration-300 mt-8 flex items-center justify-center mx-auto"
            onClick={toggleModal}
          >
            <FaPlay className="mr-2" /> {t("serviceGrid.buttonText")}
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
                <div
                  className="relative"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/OEyE7MUoXIc?si=jwWSu2l9DkDTFT8Q&amp;start=4"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
