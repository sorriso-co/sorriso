"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactDetails: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="contact-details px-4 py-24 border-teal">
      <div className="bg-white shadow-lg rounded-lg p-8 mx-auto max-w-lg">
        <h2 className="text-3xl font-serif font-bold text-center mb-8 text-teal-700">
          {t('contactDetails.title')}
        </h2>
        <div className="mb-6 flex items-start">
          <FaMapMarkerAlt className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-teal-700">
              {t('contactDetails.addressTitle')}
            </h3>
            <p className="text-gray-700 font-serif">
              {t('contactDetails.address')}
            </p>
          </div>
        </div>
        <div className="mb-6 flex items-start">
          <FaPhoneAlt className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold font-serif mb-2 text-teal-700">
              {t('contactDetails.phoneTitle')}
            </h3>
            <p className="text-gray-700 font-serif">{t('contactDetails.phone')}</p>
          </div>
        </div>
        <div className="mb-6 flex items-start">
          <FaEnvelope className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2 text-teal-700 font-serif">
              {t('contactDetails.emailTitle')}
            </h3>
            <p className="text-gray-700 font-serif">{t('contactDetails.email')}</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaClock className="text-teal-500 w-6 h-6 mr-4" />
          <div>
            <h3 className="text-xl font-bold font-serif mb-2 text-teal-700">
              {t('contactDetails.hoursTitle')}
            </h3>
            <p className="text-gray-700 font-serif">{t('contactDetails.hours')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
