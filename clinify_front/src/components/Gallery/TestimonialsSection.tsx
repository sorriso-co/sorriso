"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialCard from "./TestimonialCard";
import TestimonialsHero from "./TestimonialsHero";
import { Testimonial } from "./types";
import { useTranslation } from "next-i18next";

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation("services");

  const testimonials: Testimonial[] = [
    {
      name: "Sheila Peterson",
      age: 44,
      country: t("countries.unitedStates", { defaultValue: "United States" }),
      countryFlag: "/images/flags/us.png",
      profileImage: "/images/people/emily.webp",
      treatment: t("treatments.hollywoodSmile", {
        defaultValue: "HOLLYWOOD SMILE",
      }),
      description: t("testimonials.sheilaPeterson.description"),
      videoLink: "/videos/taila_peters",
      beforeImage: "/images/before-after/pr1/prije.jpg",
      afterImage: "/images/before-after/pr1/posle.jpg",
    },
    {
      name: "Laura Bastone",
      age: 32,
      country: t("countries.italy", { defaultValue: "Italy" }),
      countryFlag: "/images/flags/ita.svg",
      profileImage: "/images/people/italy.webp",
      treatment: t("treatments.dentalImplant", {
        defaultValue: "DENTAL IMPLANT",
      }),
      description: t("testimonials.lauraBastone.description"),
      videoLink: "/videos/sinisa",
      beforeImage: "/images/before-after/pr2/prije.jpg",
      afterImage: "/images/before-after/pr2/posle.jpg",
    },
    {
      name: "Lela Kovač Majčevski",
      age: 49,
      country: t("countries.montenegro", { defaultValue: "Montenegro" }),
      countryFlag: "/images/flags/mne.png",
      profileImage: "/images/people/sarah.webp",
      treatment: t("treatments.teethWhitening", {
        defaultValue: "TEETH WHITENING",
      }),
      description: t("testimonials.lelaKovacMajcevski.description"),
      videoLink: "/videos/lela_kovac_majcevski",
      beforeImage: "/images/before-after/pr3/prije.JPG",
      afterImage: "/images/before-after/pr3/posle.JPG",
    },
    {
      name: "Marry Diana Jones",
      age: 27,
      country: t("countries.australia", { defaultValue: "Australia" }),
      countryFlag: "/images/flags/a.svg",
      profileImage: "/images/people/merima.webp",
      treatment: t("treatments.orthodontics", { defaultValue: "ORTHODONTICS" }),
      description: t("testimonials.marryDianaJones.description"),
      videoLink: "/videos/merim_djukic",
      beforeImage: "/images/before-after/pr4/prije.jpg",
      afterImage: "/images/before-after/pr4/posle.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <TestimonialsHero />
      <section className="bg-teal-50 py-16 px-4 sm:px-8 overflow-x-hidden">
        <div className="container mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} data-aos="fade-up" className="w-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
