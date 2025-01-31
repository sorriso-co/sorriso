"use client";
import React from "react";
import Image from "next/image";
import BeforeAfter from "@/components/Services/BeforeAfter";
import { useTranslation } from "next-i18next"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  name: string;
  age: number;
  country: string;
  profileImage: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  age,
  country,
  profileImage,
  description,
  beforeImage,
  afterImage,
}) => {
  const { t } = useTranslation("common");

  // Simplified the profile information formatting
  const formattedProfileInfo = `${name}, ${age} ${age === 1 ? "year old" : "years old"}, ${country}`;

  return (
    <div className="flex flex-col lg:flex-row bg-transparent rounded-xl overflow-hidden max-w-4xl mx-auto shadow-sm my-8 sm:my-12 md:my-16">
      {/* Left Section: Profile Information */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col items-center lg:items-start justify-center text-center lg:text-left bg-transparent">
        {/* Profile Image */}
        <div className="relative mb-6 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
          <Image
            src={profileImage}
            alt={t("testimonialCard.profileAlt", { name })}
            width={140}
            height={140}
            loading="lazy" // Use lazy loading to improve initial load time
            className="rounded-full border-4 border-teal-800 object-cover w-full h-full"
          />
        </div>

        {/* Profile Information */}
        <h3 className="text-teal-900 text-xl sm:text-2xl font-bold mb-2">
          {formattedProfileInfo}
        </h3>

        {/* Testimonial Description */}
        <div className="relative mb-4 sm:mb-6 flex justify-center items-center px-4">
          <p className="relative text-teal-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed border-l-4 border-teal-900 pl-4">
            “{description}”
          </p>
        </div>

        {/* Action Button
        <button className="mt-4 bg-teal-500 text-white px-4 sm:px-6 py-2 text-sm rounded-full hover:bg-teal-600 flex items-center transition-colors duration-200 ease-in-out">
          <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
          {t("testimonialCard.watchVideo", { name })}
        </button> */}
      </div>

      {/* Right Section: Before-After Image Slider */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-0">
        {/* Lazy-load the Before-After component images */}
        <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />
      </div>
    </div>
  );
};

export default TestimonialCard;
