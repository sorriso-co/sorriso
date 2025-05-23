"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faHotel, faEye } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const DentalTravelIntro: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <div className="relative bg-transparent py-5">
      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6 md:mb-10 font-serif">
              {t("dentalTravelIntro.title", {
                defaultValue: "Explore Dental Tourism in Montenegro",
              })}
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl mb-6 md:mb-10 font-serif font-light">
              {t("dentalTravelIntro.description", {
                defaultValue:
                  "Discover how you can combine top-quality dental treatments with an unforgettable travel experience in Montenegro.",
              })}
            </p>
            <Link href="/contact">
              <button className="bg-teal-500 font-serif font-bold text-white text-md md:text-xl px-6 py-3 rounded-md shadow-md">
                {t("dentalTravelIntro.buttonText", {
                  defaultValue: "Contact Us Today",
                })}
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:ml-10 md:w-1/2">
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/mne/blue-cave.webp"
                alt={t("dentalTravelIntro.imageAlt", {
                  defaultValue: "Montenegro landscape",
                })}
                width={600}
                height={400}
                loading="lazy"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="grid grid-cols-3 gap-4">
                  <Link href="/contact">
                    <div className="flex flex-col items-center text-white hover:text-teal-500 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="w-8 h-8 mb-2 md:w-12 md:h-12"
                      />
                      <span className="text-sm font-serif">
                        {t("dentalTravelIntro.travel", {
                          defaultValue: "Travel",
                        })}
                      </span>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="flex flex-col items-center text-white hover:text-teal-500 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faHotel}
                        className="w-8 h-8 mb-2 md:w-12 md:h-12"
                      />
                      <span className="text-sm font-serif">
                        {t("dentalTravelIntro.accommodation", {
                          defaultValue: "Accommodation",
                        })}
                      </span>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="flex flex-col items-center text-white hover:text-teal-500 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="w-8 h-8 mb-2 md:w-12 md:h-12"
                      />
                      <span className="text-sm font-serif">
                        {t("dentalTravelIntro.sightseeing", {
                          defaultValue: "Sightseeing",
                        })}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalTravelIntro;
