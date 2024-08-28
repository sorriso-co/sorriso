import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaComments,
  FaPlane,
  FaTooth,
  FaSmile,
  FaPlay,
} from "react-icons/fa";
import Step from "./Step";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/custom-slick.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation("homepage");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerMode: false,
          autoplaySpeed: 7000,
          pauseOnHold: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplaySpeed: 8000,
          pauseOnHold: true,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSliderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the slider is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-teal-50 py-16 overflow-hidden" data-aos="fade-up">
      <div
        className="container mx-auto px-4 lg:px-16 text-center"
        ref={sliderRef}
      >
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-600 mb-5"
          data-aos="fade-down"
        >
          {t("howItWorks.title", { defaultValue: "How It Works" })}
        </h2>
        <div data-aos="fade-up">
          {isSliderVisible && (
            <Slider {...settings}>
              <Step
                stepNumber="1"
                title={t("howItWorks.steps.step1.title", {
                  defaultValue: "Contact Us",
                })}
                description={t("howItWorks.steps.step1.description", {
                  defaultValue:
                    "Fill out the form and optionally send your most recent dental X-ray. We will contact you within 24 hours to schedule your online consultation.",
                })}
                Icon={FaPhoneAlt}
              />
              <Step
                stepNumber="2"
                title={t("howItWorks.steps.step2.title", {
                  defaultValue: "Receive Your Treatment Plan",
                })}
                description={t("howItWorks.steps.step2.description", {
                  defaultValue:
                    "You will receive a treatment plan detailing all steps and costs.",
                })}
                Icon={FaClipboardList}
              />
              <Step
                stepNumber="3"
                title={t("howItWorks.steps.step3.title", {
                  defaultValue: "Initial Consultation",
                })}
                description={t("howItWorks.steps.step3.description", {
                  defaultValue:
                    "During consultation, you have the opportunity to ask any questions about the treatment.",
                })}
                Icon={FaComments}
              />
              <Step
                stepNumber="4"
                title={t("howItWorks.steps.step4.title", {
                  defaultValue: "Travel",
                })}
                description={t("howItWorks.steps.step4.description", {
                  defaultValue:
                    "When the plan is in place, just pack, travel, and get treated. We will take care of everything.",
                })}
                Icon={FaPlane}
              />
              <Step
                stepNumber="5"
                title={t("howItWorks.steps.step5.title", {
                  defaultValue: "Treatment",
                })}
                description={t("howItWorks.steps.step5.description", {
                  defaultValue:
                    "Receive the treatment you need from our highly qualified dental professionals. We use the latest technology.",
                })}
                Icon={FaTooth}
              />
              <Step
                stepNumber="6"
                title={t("howItWorks.steps.step6.title", {
                  defaultValue: "Have Fun",
                })}
                description={t("howItWorks.steps.step6.description", {
                  defaultValue:
                    "Enjoy your stay and explore the local attractions while you receive the best dental care while enjoying Montenegro.",
                })}
                Icon={FaSmile}
              />
            </Slider>
          )}
        </div>
        <div className="text-center mt-12">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full shadow-md transition duration-300 mt-8 flex items-center justify-center mx-auto"
            onClick={toggleModal}
          >
            <FaPlay className="mr-2" /> {t("serviceGrid.buttonText")}
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
              <div className="bg-white rounded-lg p-8 w-full max-w-5xl relative shadow-xl">
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-3xl"
                >
                  &times;
                </button>
                <div
                  className="relative"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/CoucS-fy2FI?si=qt3GdS64rwl0elN2&start=2"
                    title="YouTube video player"
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <Link href="/howitworks">
                  <button
                    className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-full shadow-md transition duration-300 mt-8"
                    onClick={toggleModal}
                    data-aos="fade-up"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
