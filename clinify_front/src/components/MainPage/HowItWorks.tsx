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
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(false);
  const [key, setKey] = useState(0); // Force re-render of the slider when autoplay changes

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  useEffect(() => {
    // Initialize AOS without unnecessary transitions
    AOS.init({
      duration: 0, // Set to 0 to disable AOS transitions
      once: true,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoplay(true);
          setKey((prevKey) => prevKey + 1); // Force re-render to apply autoplay
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  // Next Arrow Component
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-2xl focus:outline-none"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    );
  };

  // Previous Arrow Component
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-2xl focus:outline-none"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
    );
  };

  const sliderSettings = {
    // Ensures slider re-renders when autoplay updates
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 9000, // Adjusted to 6 seconds
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
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  return (
    <section ref={sliderRef} className="relative bg-teal-50 py-12">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-700 text-center mb-10 mt-8"
          data-aos="fade-up"
        >
          {t("howItWorks.title", {
            defaultValue: "In 6 Easy Steps to Your Perfect Smile",
          })}
        </h2>

        {/* Slider Section */}
        <Slider key={key} {...sliderSettings}>
          {/* Step 1 */}
          <div className="px-4">
            <Step
              stepNumber="1"
              title={t("howItWorks.steps.step1.title", {
                defaultValue: "Free Online Consultation",
              })}
              description={t("howItWorks.steps.step1.description", {
                defaultValue:
                  "Talk to our dental experts to find out if our services are right for you.",
              })}
              Icon={FaPhoneAlt}
            />
          </div>

          {/* Step 2 */}
          <div className="px-4">
            <Step
              stepNumber="2"
              title={t("howItWorks.steps.step2.title", {
                defaultValue: "Personalized Treatment Plan",
              })}
              description={t("howItWorks.steps.step2.description", {
                defaultValue:
                  "Receive a detailed treatment plan personalized to your needs.",
              })}
              Icon={FaClipboardList}
            />
          </div>

          {/* Step 3 */}
          <div className="px-4">
            <Step
              stepNumber="3"
              title={t("howItWorks.steps.step3.title", {
                defaultValue: "Ask Any Questions",
              })}
              description={t("howItWorks.steps.step3.description", {
                defaultValue:
                  "Ask any questions you have about the treatment process.",
              })}
              Icon={FaComments}
            />
          </div>

          {/* Step 4 */}
          <div className="px-4">
            <Step
              stepNumber="4"
              title={t("howItWorks.steps.step4.title", {
                defaultValue: "Travel for Treatment",
              })}
              description={t("howItWorks.steps.step4.description", {
                defaultValue:
                  "Travel to Montenegro for your world-class dental treatment.",
              })}
              Icon={FaPlane}
            />
          </div>

          {/* Step 5 */}
          <div className="px-4">
            <Step
              stepNumber="5"
              title={t("howItWorks.steps.step5.title", {
                defaultValue: "Receive Treatment",
              })}
              description={t("howItWorks.steps.step5.description", {
                defaultValue:
                  "Our expert dentists will provide you with the best care using the latest technology.",
              })}
              Icon={FaTooth}
            />
          </div>

          {/* Step 6 */}
          <div className="px-4">
            <Step
              stepNumber="6"
              title={t("howItWorks.steps.step6.title", {
                defaultValue: "Enjoy Your New Smile",
              })}
              description={t("howItWorks.steps.step6.description", {
                defaultValue:
                  "Leave with a beautiful smile and a memorable experience.",
              })}
              Icon={FaSmile}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HowItWorks;
