"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

interface Testimonial {
  name: string;
  age: number;
  country: string;
  countryFlag: string;
  profileImage: string;
  treatment: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const GallerySection: React.FC = () => {
  const { t } = useTranslation("common");
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: "Sheila Peterson",
      age: 44,
      country: t("countries.unitedStates"),
      countryFlag: "/images/flags/us.png",
      profileImage: "/images/people/emily.webp",
      treatment: t("treatments.hollywoodSmile"),
      description: t("testimonials.sheilaPeterson.description"),
      beforeImage: "/images/before-after/pr1/prije.jpg",
      afterImage: "/images/before-after/pr1/posle.jpg",
    },
    {
      name: "Laura Bastone",
      age: 32,
      country: t("countries.italy"),
      countryFlag: "/images/flags/ita.svg",
      profileImage: "/images/people/italy.webp",
      treatment: t("treatments.dentalImplant"),
      description: t("testimonials.lauraBastone.description"),
      beforeImage: "/images/before-after/pr2/prije.jpg",
      afterImage: "/images/before-after/pr2/posle.jpg",
    },
    {
      name: "Lela Kovač Majčevski",
      age: 49,
      country: t("countries.montenegro"),
      countryFlag: "/images/flags/mne.png",
      profileImage: "/images/people/sarah.webp",
      treatment: t("treatments.teethWhitening"),
      description: t("testimonials.lelaKovacMajcevski.description"),
      beforeImage: "/images/before-after/pr3/prije.JPG",
      afterImage: "/images/before-after/pr3/posle.JPG",
    },
    {
      name: "Marry Diana Jones",
      age: 27,
      country: t("countries.australia"),
      countryFlag: "/images/flags/a.svg",
      profileImage: "/images/people/merima.webp",
      treatment: t("treatments.orthodontics"),
      description: t("testimonials.marryDianaJones.description"),
      beforeImage: "/images/before-after/pr4/prije.jpg",
      afterImage: "/images/before-after/pr4/posle.jpg",
    },
  ];

  const handleTestimonialClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section className="bg-teal-50 py-20 px-6 sm:px-12 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-12 text-center">
          {t("gallerySection.title")}
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              onClick={() => handleTestimonialClick(testimonial)}
              data-aos="fade-up"
            >
              <Image
                src={testimonial.afterImage}
                alt={`${testimonial.name} - ${testimonial.treatment}`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL={testimonial.beforeImage}
                loading="lazy" // Lazy load images
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-200">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed Testimonial */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal} // Close modal when clicking outside the content
        >
          <div
            className="relative bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col items-center">
                <div className="flex justify-center space-x-4">
                  {/* Before Image */}
                  <div className="relative w-40 h-40 sm:w-56 sm:h-56">
                    <Image
                      src={selectedTestimonial.beforeImage}
                      alt={`Before - ${selectedTestimonial.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <p className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-100 bg-black bg-opacity-50 py-1">
                      Before
                    </p>
                  </div>

                  {/* After Image */}
                  <div className="relative w-40 h-40 sm:w-56 sm:h-56">
                    <Image
                      src={selectedTestimonial.afterImage}
                      alt={`After - ${selectedTestimonial.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <p className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-100 bg-black bg-opacity-50 py-1">
                      After
                    </p>
                  </div>
                </div>

                {/* Testimonial Details */}
                <div className="mt-6 text-center px-4">
                  <h3 className="text-2xl font-bold text-teal-800">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-teal-600 text-lg">{selectedTestimonial.treatment}</p>
                  <p className="mt-4 text-gray-700">{selectedTestimonial.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
