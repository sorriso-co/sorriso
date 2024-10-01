"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactDetails: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="px-4 py-16">
      <div className="bg-white rounded-lg p-8 mx-auto max-w-lg">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-center mb-8 text-teal-900">
          {t("contactDetails.title")}
        </h2>

        {/* Address */}
        <div className="mb-6 flex items-start">
          <FaMapMarkerAlt className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-1">
              {t("contactDetails.addressTitle")}
            </h3>
            <p className="text-gray-700">
              {t("contactDetails.address")}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-6 flex items-start">
          <FaPhoneAlt className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-1">
              {t("contactDetails.phoneTitle")}
            </h3>
            <Link href="https://wa.me/+38269664668" passHref>
              <section className="text-teal-700 flex items-center underline hover:text-teal-800 transition-colors">
                {t("contactDetails.phone")}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-5 h-5 ml-2 text-green-500"
                />
              </section>
            </Link>
          </div>
        </div>

        {/* Email */}
        <div className="mb-6 flex items-start">
          <FaEnvelope className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-1">
              {t("contactDetails.emailTitle")}
            </h3>
            <p className="text-gray-700">
              {t("contactDetails.email")}
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start">
          <FaClock className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-1">
              {t("contactDetails.hoursTitle")}
            </h3>
            <p className="text-gray-700">
              {t("contactDetails.hours")}
            </p>
          </div>
        </div>
      </div>

      {/* Languages Offered Section */}
      <div className="max-w-lg mx-auto flex flex-col items-center mt-16">
        {/* Languages Offered Text */}
        <h3 className="text-xl sm:text-2xl font-bold text-teal-900 mb-4 text-center">
          {t("contactDetails.languagesOfferedTitle")}
        </h3>
        <p className="text-base sm:text-lg text-gray-700 text-center mb-8">
          {t("contactDetails.languagesOffered", {
            languages: "Italian, English, Spanish, Serbo-Croatian",
          })}
        </p>

        {/* Doctor's Image */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 mb-4">
          <Image
            src="/images/Team/staff/filip.webp"
            alt={t("contactDetails.doctorAlt", { name: "Dr. Filip Sukovic" })}
            priority
            loading="eager"
            fill
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
