"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { t } = useTranslation("pricing");

  return (
    <div className="bg-gradient-to-r from-teal-700 to-teal-900 py-20">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2
          className="text-5xl sm:text-6xl font-extrabold mb-6 text-white"
        >
          {t("contactUs.title", { defaultValue: "Get in Touch" })}
        </h2>

        {/* Description */}
        <p
          className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto"
        >
          {t("contactUs.description", {
            defaultValue: "Reach out to us today for more information or assistance with your dental needs. We're here to help!"
          })}
        </p>

        {/* Primary Contact Button */}
        <Link
          href="/contact"
          className="inline-block bg-teal-500 text-white text-lg sm:text-xl py-4 px-10 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 mb-10 shadow-lg"
        >
          {t("contactUs.contactButton", { defaultValue: "Contact Us" })}
        </Link>

        {/* Call Us Text */}
        <div
          className="text-xl sm:text-2xl font-semibold text-white mb-8"
        >
          {t("contactUs.callUs", { defaultValue: "Or Call Us" })}
        </div>

        {/* Phone and WhatsApp Button */}
        <div
          className="flex justify-center items-center space-x-6"
        >
          <Link href="https://wa.me/+38269664668" passHref>
            <div className="flex items-center bg-white text-teal-600 py-4 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-8 h-8 mr-4 text-blue-500"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-8 h-8 mr-4 text-green-500"
              />
              <span className="font-semibold text-lg sm:text-xl">
                {t("contactUs.phone", { defaultValue: "+382 69 664 668" })}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
