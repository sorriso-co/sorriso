import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Introduction: React.FC = () => {
  const { t } = useTranslation("homepage");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="container overflow-x-hidden mx-auto flex flex-col lg:flex-row items-center py-10 sm:py-20 w-full sm:w-3/4 mt-8 sm:mt-12 space-y-8 lg:space-y-0 lg:space-x-12 bg-teal-100 rounded-lg shadow-lg p-4 sm:p-8">
      <div
        className="lg:w-1/2 text-center lg:text-left px-4 sm:px-0"
        data-aos="fade-right"
      >
        <h1 className="font-serif text-teal-900 font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight">
          {t("introduction.title", { defaultValue: "Your Next Dental Trip" })}
        </h1>
        <h4 className="font-serif text-xl sm:text-2xl lg:text-3xl text-teal-700 mt-4">
          {t("introduction.subtitle", {
            defaultValue: "Veni. Vidi. Vici with Sorriso",
          })}
        </h4>
        <p className="font-sans text-base sm:text-lg lg:text-xl text-teal-800 mt-6">
          {t("introduction.description", {
            defaultValue:
              "Discover exceptional dental care combined with an unforgettable travel experience. Let Sorriso guide you through a journey to a brighter, healthier smile while exploring the beauty and culture of Montenegro.",
          })}
        </p>
      </div>
      <div
        className="lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-0"
        data-aos="fade-left"
      >
        <div className="bg-teal-300 p-6 sm:p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            {t("introduction.joinUsTitle", { defaultValue: "Join Us" })}
          </h3>
          <p className="text-base sm:text-lg text-white mt-4">
            {t("introduction.joinUsDescription", {
              defaultValue:
                "Schedule an appointment and start your journey to a perfect smile with Sorriso.",
            })}
          </p>
          <br />
          <Link
            href="/gallery"
            className="mt-6 bg-teal-900 text-white mr-5 font-serif font-semi py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-teal-100 hover:text-teal-500 transition-colors duration-300 block text-center sm:inline-block sm:min-w-[180px] sm:max-w-xs"
          >
            {t("introduction.visitButton", {
              defaultValue: "Our Transformation",
            })}
          </Link>

          <Link
            href="/contact"
            className="mt-6 bg-teal-100 text-teal-600 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-teal-600 hover:text-teal-100 transition-colors duration-300 block text-center sm:inline-block sm:min-w-[180px] sm:max-w-xs"
          >
            {t("introduction.scheduleButton", { defaultValue: "Book a Call" })}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
