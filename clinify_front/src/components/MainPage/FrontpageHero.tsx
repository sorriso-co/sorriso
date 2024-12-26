import React from "react";
import { useTranslation } from "react-i18next";
import MediaGallery from "./MediaGallery";
import Link from "next/link";

const FrontHero: React.FC = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative w-full bg-gradient-to-b from-teal-700 to-teal-900 overflow-hidden">
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h1 className="font-serif text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-2">
              {t("frontHero.title", { defaultValue: "Your Next Dental Trip" })}
            </h1>
            <h2 className="font-serif text-lg sm:text-2xl lg:text-3xl text-white mt-2 mb-4">
              {t("frontHero.subtitle", {
                defaultValue:
                  "Free Consultations, World-Class Treatment, Stunning Results",
              })}
            </h2>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/gallery">
                <button className="inline-block bg-gradient-to-r from-teal-700 to-teal-500 text-white font-serif font-bold py-2 px-4 rounded-full shadow-md text-lg border-2 border-teal-400 transform transition-all duration-300 ease-in-out hover:scale-105 hover:from-teal-500 hover:to-teal-700 hover:shadow-lg">
                  {t("frontHero.visitButton", {
                    defaultValue: "Our Transformations",
                  })}
                </button>
              </Link>

              <Link href="#how-it-works-section">
                <button className="inline-block bg-white text-cyan-700 font-bold py-2 font-serif px-4 rounded-full shadow-md text-lg border-2 border-teal-700 transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-100 hover:shadow-lg hover:border-cyan-500">
                  {t("frontHero.scheduleButton", {
                    defaultValue: "How it works",
                  })}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-0 w-full sm:w-3/4 lg:w-1/2">
            <MediaGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontHero;
