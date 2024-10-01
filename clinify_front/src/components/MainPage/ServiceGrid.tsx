"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
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
    router.push("/services");
  };

  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="relative overflow-x-hidden px-4 md:px-8 py-12 md:py-16 bg-teal-50"
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-center text-teal-700 mb-6">
          {t("serviceGrid.title")}
        </h2>
        <p className="text-xl md:text-3xl font-serif text-center text-teal-600 mb-12">
          {t("serviceGrid.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`opacity-100`} // Removed unnecessary transitions and animations
              onClick={handleCardClick}
            >
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.altText}
                    width={96}
                    height={96}
                    loading={index === 0 ? "eager" : "lazy"} // Use eager loading for the first image and lazy for others
                    className="w-full h-full object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12vw" // Use responsive sizes for better performance
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-600 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-teal-600 text-white py-2 px-8 rounded-full shadow-md text-lg md:text-xl"
            onClick={toggleModal}
          >
             {t("serviceGrid.buttonText")}
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
              <div className="bg-white rounded-lg p-8 w-full max-w-5xl relative shadow-xl">
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-2 text-gray-600 text-3xl"
                >
                  &times;
                </button>
                <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/OEyE7MUoXIc?si=jwWSu2l9DkDTFT8Q&amp;start=4"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    loading="lazy" // Ensure the iframe is lazy-loaded
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
