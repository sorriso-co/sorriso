import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaComments,
  FaPlane,
  FaTooth,
  FaSmile,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Step from "./Step";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation("homepage");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} bg-teal-500 text-white rounded-full p-2 shadow-lg hover:bg-teal-600 focus:outline-none`}
        onClick={onClick}
      >
        &#10095;
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} bg-teal-500 text-white rounded-full p-2 shadow-lg hover:bg-teal-600 focus:outline-none`}
        onClick={onClick}
      >
        &#10094;
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-teal-100 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-teal-700 text-center mb-12"
          data-aos="fade-up"
        >
          {t("howItWorks.title", {
            defaultValue: "In 6 Easy Steps to Your Perfect Smile",
          })}
        </h2>

        {/* Slider Section */}
        <div ref={sliderRef} className="mb-12">
          <Slider {...sliderSettings}>
            {[
              {
                stepNumber: "1",
                title: t("howItWorks.steps.step1.title", {
                  defaultValue: "Free Online Consultation",
                }),
                description:
                  "Talk to our dental experts to find out if our services are right for you.",
                Icon: FaPhoneAlt,
              },
              {
                stepNumber: "2",
                title: t("howItWorks.steps.step2.title", {
                  defaultValue: "Personalized Treatment Plan",
                }),
                description: t("howItWorks.steps.step2.description", {
                  defaultValue:
                    "Receive a detailed treatment plan personalized to your needs.",
                }),
                Icon: FaClipboardList,
              },
              {
                stepNumber: "3",
                title: t("howItWorks.steps.step3.title", {
                  defaultValue: "Ask Any Questions",
                }),
                description: t("howItWorks.steps.step3.description", {
                  defaultValue:
                    "Ask any questions you have about the treatment process.",
                }),
                Icon: FaComments,
              },
              {
                stepNumber: "4",
                title: t("howItWorks.steps.step4.title", {
                  defaultValue: "Travel for Treatment",
                }),
                description: t("howItWorks.steps.step4.description", {
                  defaultValue:
                    "Travel to Montenegro for your world-class dental treatment.",
                }),
                Icon: FaPlane,
              },
              {
                stepNumber: "5",
                title: t("howItWorks.steps.step5.title", {
                  defaultValue: "Receive Treatment",
                }),
                description: t("howItWorks.steps.step5.description", {
                  defaultValue:
                    "Our expert dentists will provide you with the best care using the latest technology.",
                }),
                Icon: FaTooth,
              },
              {
                stepNumber: "6",
                title: t("howItWorks.steps.step6.title", {
                  defaultValue: "Enjoy Your New Smile",
                }),
                description: t("howItWorks.steps.step6.description", {
                  defaultValue:
                    "Leave with a beautiful smile and a memorable experience.",
                }),
                Icon: FaSmile,
              },
            ].map((step, index) => (
              <div className="px-4" key={index} data-aos="fade-up">
                <Step {...step} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <button
            className="bg-teal-700 text-white py-3 px-10 rounded-full shadow-lg text-lg font-serif font-bold transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-400"
            onClick={toggleModal}
          >
            {t("howItWorks.ctaButton", { defaultValue: "Learn More" })}
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-white rounded-lg p-8 w-full max-w-3xl shadow-xl relative">
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-gray-500 text-2xl"
              >
                &times;
              </button>
              <iframe
                src="https://www.youtube.com/embed/CoucS-fy2FI?start=2"
                title="YouTube video player"
                className="w-full h-80 rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        :global(.slick-prev:before),
        :global(.slick-next:before) {
          content: none;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
