"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="text-gray-700 py-11 lg:mt-7 mt-5 md:mt-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>{t('footer.copyright')}</p>
        <div className="mt-4">
          <Link
            href="/about"
            className="text-darkPink hover:text-lightPink transition"
          >
            {t('footer.aboutUs')}
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="/contact"
            className="text-darkPink hover:text-lightPink transition"
          >
            {t('footer.contact')}
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="/privacy"
            className="text-darkPink hover:text-lightPink transition"
          >
            {t('footer.privacyPolicy')}
          </Link>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href={t('footer.facebook')}
            className="text-gray-700 hover:text-lightPink transition"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href={t('footer.instagram')}
            className="text-gray-700 hover:text-lightPink transition"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
