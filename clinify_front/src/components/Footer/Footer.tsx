"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Footer/LangSwitch";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-teal-900 text-white py-11 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">{t("footer.copyright")}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              href="/about"
              className="hover:text-teal-300 transition-colors duration-200"
            >
              {t("footer.aboutUs")}
            </Link>
            <span className="mx-2 text-white">|</span>
            <Link
              href="/contact"
              className="hover:text-teal-300 transition-colors duration-200"
            >
              {t("footer.contact")}
            </Link>
            <span className="mx-2 text-white">|</span>
            <Link
              href="/privacy"
              className="hover:text-teal-300 transition-colors duration-200"
            >
              {t("footer.privacyPolicy")}
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">{t("changeLanguage")}</h3>
          <div className="flex justify-center mt-2">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          {/* <Link
            href={t('footer.facebook')}
            className="text-white hover:text-teal-300 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </Link> */}
          <Link
            href={t("footer.instagram")}
            className="text-white hover:text-teal-300 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
