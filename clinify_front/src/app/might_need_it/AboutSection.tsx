"use client";

import Image from "next/legacy/image";
import { useState } from "react";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="bg-white text-left py-20 m-2 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl font-sans font-bold mb-6 text-darkPink">
            About Sorriso
          </h1>
          <h2 className="text-3xl font-sans text-gray-600 mb-12">
            HERE TO MAKE YOU SMILE
          </h2>
          <div className="text-lg text-gray-600">
            <p className="mb-6">
              At Sorriso, we specialize in offering world-class dental care
              combined with unforgettable travel experiences. Our mission is to
              make high-quality dental treatments accessible and affordable, all
              while exploring the beauty and culture of stunning destinations.
              With a dedicated team of experienced dental professionals and
              luxurious accommodations, we ensure that every patient leaves with
              a radiant smile and cherished memories. Discover the perfect blend
              of exceptional dental care and adventure with Sorriso, where your
              health and happiness are our top priorities.
            </p>
            <button
              className="bg-customPink hover:bg-lightPink text-white py-3 px-8 rounded-full shadow-lg transition duration-300 mt-8"
              onClick={toggleModal}
            >
              Watch Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end m-4">
          <Image
            src="/images/about.png"
            alt="Healthcare"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
