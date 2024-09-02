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
    <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-4 text-teal-700"
          data-aos="fade-up"
        >
          {t("contactUs.title")}
        </h2>
        <p
          className="text-teal-600 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("contactUs.description")}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-teal-500 text-white py-3 px-8 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 mb-8 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("contactUs.contactButton")}
        </Link>
        <div
          className="text-teal-600 mb-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {t("contactUs.callUs")}
        </div>
        <div
          className="flex justify-center items-center space-x-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="https://wa.me/+38269664668" passHref>
            <div className="flex items-center bg-white text-teal-500 py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6 mr-3 text-blue-500"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-6 h-6 mr-3 text-green-500"
              />
              <span className="font-semibold">{t("contactUs.phone")}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
