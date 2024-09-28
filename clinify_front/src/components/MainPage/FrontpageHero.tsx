import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import BrandIcons from "./BrandIcons";
import StarRating from "./StarRating";

const FrontHero: React.FC = () => {
  const { t } = useTranslation("homepage");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-teal-700 to-teal-900 overflow-hidden">
      {/* Main Hero Section */}
      <div className="container h-screen mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0">
          {/* Left Text Section */}
          <div
            className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 lg:pr-8"
            data-aos="fade-right"
          >
            <h1 className="font-serif text-white font-extrabold text-3xl sm:text-4xl lg:text-6xl tracking-tight leading-tight mb-4 lg:mb-8">
              {t("frontHero.title", { defaultValue: "Your Next Dental Trip" })}
            </h1>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-4xl text-white mt-2 sm:mt-4 mb-4 lg:mb-8">
              {t("frontHero.subtitle", {
                defaultValue: "Free Consultations, World-Class Treatment, Stunning Results",
              })}
            </h2>

            {/* Call to Action Buttons */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <Link href="/gallery">
                <button className="inline-block bg-teal-700 text-white font-serif font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full shadow-lg hover:bg-teal-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm lg:text-base">
                  {t("frontHero.visitButton", {
                    defaultValue: "Our Transformations",
                  })}
                </button>
              </Link>
              <Link href="#how-it-works-section">
                <button className="inline-block bg-white text-teal-900 font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full shadow-md hover:bg-teal-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base">
                  {t("frontHero.scheduleButton", {
                    defaultValue: "How it works",
                  })}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <div className="relative w-full h-auto sm:w-3/4 lg:w-full px-4 sm:px-0">
              <Image
                src="/images/icons/front.webp"
                alt="Lead Doctor at Sorriso smiling"
                layout="intrinsic"
                width={900}
                height={1000}
                quality={100}
                priority
                className="object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Star Rating and Text Section */}
        <div className="flex flex-col items-center justify-start mt-8 lg:mt-10 space-y-2">
          {/* Star Rating Component */}
          <StarRating rating={4.9} />

          {/* Patient Satisfaction Text */}
          <p className="text-white text-xs sm:text-sm lg:text-base px-2 text-center leading-tight opacity-70">
            {t("frontHero.patientSatisfaction", {
              defaultValue:
                "Patient satisfaction rate: 4.9/5, based on thousands of successful treatments.",
            })}
          </p>
        </div>
      </div>

      {/* Brand Icons Section */}
      <div className="w-full bg-[url('/images/icons/pattern.webp')] py-6 sm:py-8 lg:py-12">
        <BrandIcons />
      </div>
    </section>
  );
};

export default FrontHero;
