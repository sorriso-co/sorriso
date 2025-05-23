"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import TestimonialCard from "@/components/Gallery/Testimonials/TestimonialCard";
// import VideoSection from "./Testimonials/Video";

// Dynamically import components to lazy-load non-critical sections
const ConsultationBanner = dynamic(() => import("./Testimonials/ConsultCTO"), {
  ssr: false,
});
const PatientJourney = dynamic(() => import("./Testimonials/PatientJourney"), {
  ssr: false,
});
const TrustSection = dynamic(() => import("./Testimonials/TrustSection"), {
  ssr: false,
});

// Define the structure for a Testimonial
interface Testimonial {
  name: string;
  age: number;
  country: string;
  profileImage: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const GallerySection: React.FC = () => {
  const { t } = useTranslation("common");

  // Array of testimonials with translated descriptions
  const testimonials: Testimonial[] = [
    // {
    //   name: "Sheila Peterson",
    //   age: 44,
    //   country: "United States",
    //   profileImage: "/images/people/emily.webp",
    //   description: t("testimonial.sheila.description", {
    //     defaultValue:
    //       "I used to be so self-conscious about my smile and always avoided taking pictures. Thanks to Sorriso, I now have a smile I’m proud to show off! The doctors were professional and made me feel comfortable throughout the entire process.",
    //   }),
    //   beforeImage: "/images/before-after/pr1/prije.webp",
    //   afterImage: "/images/before-after/pr1/posle.webp",
    // },
    {
      name: "Yasmin Bakker",
      age: 46,
      country: "Netherlands",
      profileImage: "/images/people/natascha.webp",
      description: t("testimonial.yasmin.description", {
        defaultValue:
          "I had a gummy smile and was unsure if gum contouring would be right for me. Sorriso’s experts made me feel at ease and delivered outstanding results. Now, I can smile confidently without worrying about my gums. I couldn’t be happier with their service!",
      }),
      beforeImage: "/images/before-after/pr6/prije.webp",
      afterImage: "/images/before-after/pr6/posle.webp",
    },

    {
      name: "Elizabeth Mayer",
      age: 68,
      country: "Switzerland",
      profileImage: "/images/people/mirka.webp",
      description: t("testimonial.elizabeth.description", {
        defaultValue:
          "Years of dental issues made me hesitant to smile, and I struggled to find a clinic that could handle my complex case. The full mouth reconstruction at Sorriso transformed my dental health and appearance. I now have a beautiful smile and a newfound sense of confidence. The team made me feel comfortable and cared for throughout the entire process.",
      }),
      beforeImage: "/images/before-after/pr7/prije.webp",
      afterImage: "/images/before-after/pr7/posle.webp",
    },

    {
      name: "Miroslav Scekic",
      age: 36,
      country: "Montenegro",
      profileImage: "/images/people/miki.webp",
      description: t("testimonial.miroslav.description", {
        defaultValue:
          "I was always conscious about the alignment of my teeth, but traditional braces were too expensive. Sorriso’s orthodontic treatment was smooth, efficient, and affordable. Now, I feel more confident than ever. Thank you, Sorriso!",
      }),
      beforeImage: "/images/before-after/pr4/prije.webp",
      afterImage: "/images/before-after/pr4/posle.webp",
    },
    {
      name: "Hans-Peter Adelberg",
      age: 53,
      country: "Germany",
      profileImage: "/images/people/hans.webp",
      description: t("testimonial.hans.description", {
        defaultValue:
          "I wanted a natural-looking smile without the obvious ‘done’ look. Getting veneers at Sorriso was the best decision I’ve made. My teeth look completely natural, and I can’t stop smiling. The team’s dedication to excellence is unmatched.",
      }),
      beforeImage: "/images/before-after/pr5/prije.webp",
      afterImage: "/images/before-after/pr5/posle.webp",
    },

    {
      name: "Laura Bastone",
      age: 32,
      country: "Italy",
      profileImage: "/images/people/laura.webp",
      description: t("testimonial.laura.description", {
        defaultValue:
          "I used to be so self-conscious about my smile and always avoided taking pictures. Thanks to Sorriso, I now have a smile I’m proud to show off! The doctors were professional and made me feel comfortable throughout the entire process.",
      }),
      beforeImage: "/images/before-after/pr2/prije.webp",
      afterImage: "/images/before-after/pr2/posle.webp",
    },
  ];

  return (
    <>
      {/* Video Section */}
      {/* <VideoSection /> */}

      {/* Testimonial Cards Section */}
      <section className="flex flex-col bg-transparent">
        <div className="container mx-auto">
          {/* Section Title */}
          {/* <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-teal-900 mb-12 text-center">
            {t("gallerySection.title", {
              defaultValue: "Our Patient Transformations",
            })}
          </h2> */}

          {/* Testimonial Cards */}
          <div className="flex flex-col">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy-load non-critical sections */}
      <PatientJourney />
      <TrustSection />
      <ConsultationBanner />
    </>
  );
};

export default GallerySection;
