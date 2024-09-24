"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Footer/LangSwitch";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-teal-800 text-white py-12 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* About & Contact Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4 text-white">{t("footer.aboutTitle")}</h2>
            <p className="text-sm leading-relaxed mb-4 text-white">
              {t("footer.aboutText")}
            </p>
            <Link
              href="/about"
              className="text-white hover:text-teal-100 transition-colors duration-200 font-medium"
            >
              {t("footer.learnMore")}
            </Link>
          </div>

          {/* Quick Links Section */}
          <nav className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4 text-white">{t("footer.quickLinks")}</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-teal-400" />
                <Link
                  href="/about"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  {t("footer.aboutLink")}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-teal-400" />
                <Link
                  href="/contact"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  {t("footer.contactLink")}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-teal-400" />
                <Link
                  href="/services"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  {t("footer.servicesLink")}
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Link
                  href="/privacy"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  {t("footer.privacyPolicyLink")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media, Language Switcher */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 text-white">{t("footer.followUs")}</h2>
            <div className="flex space-x-6 mb-6">
              <Link href="https://facebook.com" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 text-white hover:text-teal-100 transition-colors duration-200" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-white hover:text-teal-100 transition-colors duration-200" />
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-white">{t("footer.language")}</h3>
              <div className="mt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-12 w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.9022024027467!2d19.258372015446858!3d42.45324407918168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d955190dc516d%3A0xd8401676f898ab53!2sGavra%20Vukovi%C4%87a%2C%20Podgorica%2081000%2C%20Montenegro!5e0!3m2!1sen!2s!4v1695655642876!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Sorriso Location"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
