import React from "react";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Introduction: React.FC = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center py-10 sm:py-20 w-full sm:w-3/4 mt-8 sm:mt-12 space-y-8 lg:space-y-0 lg:space-x-12 bg-teal-100 rounded-lg shadow-md p-4 sm:p-8">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
        <h1 className="font-serif text-teal-900 font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
          {t("introduction.title", { defaultValue: "Your Next Dental Trip" })}
        </h1>
        <h4 className="font-serif text-xl sm:text-2xl lg:text-3xl text-teal-700 mb-6">
          {t("introduction.subtitle", { defaultValue: "Veni. Vidi. Vici with Sorriso" })}
        </h4>
        <p className="font-sans text-base sm:text-lg lg:text-xl text-teal-800">
          {t("introduction.description", {
            defaultValue:
              "Discover exceptional dental care combined with an unforgettable travel experience. Let Sorriso guide you through a journey to a brighter, healthier smile while exploring the beauty and culture of Montenegro.",
          })}
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-0">
        <div className="bg-teal-300 p-6 sm:p-8 rounded-lg shadow-md">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("introduction.joinUsTitle", { defaultValue: "Join Us" })}
          </h3>
          <p className="text-base sm:text-lg text-white mb-6">
            {t("introduction.joinUsDescription", {
              defaultValue: "Schedule an appointment and start your journey to a perfect smile with Sorriso.",
            })}
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <Link href="/gallery"
              className="bg-teal-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-center font-semibold hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300">
              {t("introduction.visitButton", { defaultValue: "Our Transformations" })}
            </Link>
            <Link href="/contact"
              className="bg-teal-100 text-teal-600 py-2 sm:py-3 px-4 sm:px-6 rounded-full text-center font-semibold focus:outline-none focus:ring-4 hover:bg-teal-200 focus:ring-teal-300">
              {t("introduction.scheduleButton", { defaultValue: "Book a Call" })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
