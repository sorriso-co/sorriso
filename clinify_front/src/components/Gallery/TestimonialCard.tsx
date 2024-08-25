import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faTooth,
  faTeeth,
  faTeethOpen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import { Testimonial, Treatment } from "./types";

const getTreatmentIcon = (treatment: Treatment) => {
  switch (treatment) {
    case "HOLLYWOOD SMILE":
      return faSmile;
    case "DENTAL IMPLANT":
      return faTooth;
    case "TEETH WHITENING":
      return faTeeth;
    case "ORTHODONTICS":
      return faTeethOpen;
    case "DENTAL CROWNS":
      return faStar;
    default:
      return faSmile;
  }
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  const { t } = useTranslation("services");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-8 flex flex-col md:flex-col lg:flex-row items-center space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-8 transition-transform transform hover:scale-105 w-full h-auto">
      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-full lg:w-auto">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-600">
          <Image
            src={testimonial.profileImage}
            alt={testimonial.name}
            width={160}
            height={160}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex-grow text-center md:text-center lg:text-left w-full">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-teal-800">
          {testimonial.name}
        </h3>
        <p className="text-base sm:text-xl font-serif text-teal-700 mb-4 flex items-center justify-center md:justify-center lg:justify-start">
          {testimonial.age}, {testimonial.country}
          <Image
            src={testimonial.countryFlag}
            alt={testimonial.country}
            width={20}
            height={20}
            className="inline w-5 h-5 ml-2"
          />
        </p>
        <div className="flex items-center justify-center md:justify-center lg:justify-start mb-4">
          <FontAwesomeIcon
            icon={getTreatmentIcon(testimonial.treatment)}
            className="text-teal-600 w-4 h-4 sm:w-6 sm:h-6"
          />
          <span className="ml-2 text-teal-600 bg-teal-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-sm sm:text-base font-serif">
            {testimonial.treatment}
          </span>
        </div>
        <p className="text-base sm:text-xl font-serif text-gray-700 mb-4 overflow-hidden text-ellipsis">
          {testimonial.description}
        </p>
        {/* <Link
          href={testimonial.videoLink}
          className="inline-block bg-teal-600 text-white text-base sm:text-xl font-serif font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105"
        >
          {t("watchVideo", { defaultValue: "Watch Video" })}
        </Link> */}
      </div>
      {/* <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto lg:w-1/2">
        <BeforeAfter
          beforeImage={testimonial.beforeImage}
          afterImage={testimonial.afterImage}
        />
      </div> */}
    </div>
  );
};

export default TestimonialCard;
