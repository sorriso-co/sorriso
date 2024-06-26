"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../MainPage/Language/LanguageSwitcher";

const Slideshow: React.FC = () => {
  const { t } = useTranslation('homepage');

  const slides = [
    {
      image: "/images/slide_main/zastolicom.jpg",
      text: t("slideshow.slide1", { defaultValue: "FREE Online Consultations" }),
    },
    {
      image: "/images/slide_main/zastolicom2.jpg",
      text: t("slideshow.slide2", { defaultValue: "Save up to 70%" }),
    },
    {
      image: "/images/slide_main/operacija.jpg",
      text: t("slideshow.slide3", { defaultValue: "Enjoy more" }),
    },
    {
      image: "/images/slide_main/smile2.png",
      text: t("slideshow.slide4", { defaultValue: "Spend Your Vacation Smiling" }),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-36">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold p-4 text-center">
                {slide.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <LanguageSwitcher />
    </section>
  );
};

export default Slideshow;
