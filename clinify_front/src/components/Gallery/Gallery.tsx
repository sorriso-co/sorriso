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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-semibold mb-10 text-center text-teal-800">
          {t("gallerySection.galleryTitle", { defaultValue: "Transformation Gallery" })}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {images.map((image, index) => (
            <div
              className="gallery-item bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-teal-800"
              data-aos="fade-up"
              key={index}
            >
              <div className="relative group">
                <Image
                  src={image}
                  alt={""}
                  width={1000}
                  height={800}
                  className="object-cover rounded-3xl transition-transform transform group-hover:scale-105 duration-300"
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
