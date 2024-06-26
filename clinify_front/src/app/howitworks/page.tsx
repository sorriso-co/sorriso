"use client";
import React, { useEffect, useState } from "react";
import HowItWorksHero from "../../components/Services/HowItWorksHero";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaPlane,
  FaHotel,
  FaTooth,
  FaRegSmile,
  FaPlay,
} from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

// Define TypeScript interfaces for step data
interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepData {
  title: string;
  description: string;
  icon: keyof typeof iconMapping;
}

const iconMapping = {
  FaPhoneAlt: <FaPhoneAlt className="text-teal-600 w-12 h-12" />,
  FaClipboardList: <FaClipboardList className="text-teal-600 w-12 h-12" />,
  FaPlane: <FaPlane className="text-teal-600 w-12 h-12" />,
  FaHotel: <FaHotel className="text-teal-600 w-12 h-12" />,
  FaTooth: <FaTooth className="text-teal-600 w-12 h-12" />,
  FaRegSmile: <FaRegSmile className="text-teal-600 w-12 h-12" />,
};

const HowItWorks: React.FC = () => {
  const { t } = useTranslation('services');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Map JSON step data to Step interface
  const steps: Step[] = (t('howItWorks.steps', { returnObjects: true }) as StepData[]).map(
    (step: StepData) => ({
      title: step.title,
      description: step.description,
      icon: iconMapping[step.icon],
    })
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="lg:px-0 mx-auto overflow-x-hidden">
      <HowItWorksHero />
      <div className="py-20 sm:py-40 bg-white">
        <div className="container mx-auto text-center mb-12 px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold text-teal-800">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-3xl font-serif text-teal-600 mt-4">
            {t('howItWorks.description')}
          </p>
        </div>
        <div className="container mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex flex-col lg:flex-row items-center mb-12 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 p-6">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-teal-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-2xl font-serif text-teal-700">
                  {step.description}
                </p>
              </div>
              <div className="lg:w-1/2 p-6 flex justify-center items-center">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-teal-200 rounded-full flex items-center justify-center text-2xl font-bold text-teal-600 transition-transform transform hover:scale-110">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-12">
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded-full shadow-md transition duration-300 mt-8 flex items-center justify-center mx-auto text-lg sm:text-xl lg:text-2xl"
              onClick={toggleModal}
            >
              <FaPlay className="mr-2" /> {t('howItWorks.videoButton')}
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
                <div className="bg-white rounded-lg p-4 sm:p-8 w-full max-w-2xl sm:max-w-5xl relative shadow-xl">
                  <button
                    onClick={toggleModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl sm:text-3xl"
                  >
                    &times;
                  </button>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={t('howItWorks.videoUrl')}
                      title="YouTube video player"
                      className="w-full h-[300px] sm:h-[500px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="text-center mt-16 px-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-teal-800 mb-6">
              {t('howItWorks.readyTitle')}
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl font-serif text-gray-600 mb-8">
              {t('howItWorks.readyDescription')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="inline-block bg-teal-600 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-teal-700 transition-colors text-lg sm:text-xl lg:text-2xl"
              >
                {t('howItWorks.contactUs')}
              </Link>
              <Link
                href="/login"
                className="inline-block bg-teal-800 text-white py-2 px-6 sm:py-3 sm:px-8 font-serif rounded-lg hover:bg-gray-700 transition-colors text-lg sm:text-xl lg:text-2xl"
              >
                {t('howItWorks.scheduleAppointment')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
