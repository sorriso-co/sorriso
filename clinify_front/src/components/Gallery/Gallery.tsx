import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const GallerySection = () => {
  const { t } = useTranslation("services");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const images = [
    "/images/services/teeth/example3.png",
    "/images/services/teeth/example4.png",
    "/images/services/teeth/example1.png",
    "/images/services/teeth/example14.png",
    "/images/services/teeth/example5.png",
    "/images/services/teeth/example12.png",
    "/images/services/teeth/example13.png",
    "/images/services/teeth/example2.png",
  ];

  return (
    <div className="bg-white py-16 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <h2 className="text-4xl font-serif font-semibold mb-10 text-center text-teal-800">
          {t("gallerySection.galleryTitle", {
            defaultValue: "Transformation Gallery",
          })}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              className="relative group bg-white rounded-lg shadow-md overflow-hidden border border-teal-500 p-2"
              data-aos="fade-up"
              key={index}
            >
              <div className="relative w-full h-48 sm:h-40 md:h-36 lg:h-32 xl:h-28 overflow-hidden">
                <Image
                  src={image}
                  alt={`Transformation ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
