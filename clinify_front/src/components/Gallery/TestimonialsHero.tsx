import React from "react";
import { useTranslation } from "next-i18next";

const TestimonialsHero = () => {
  const { t } = useTranslation("services");

  return (
    <section className="bg-gradient-to-r from-teal-300 via-teal-200 to-blue-200 py-24 text-white p-8 rounded-t-[20px] relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          {t("testimonialsHero.title", { defaultValue: "Our Satisfied Patients" })}
        </h1>
        <p className="text-xl mb-6 font-serif">
          {t("testimonialsHero.description", { defaultValue: "Hear from our patients about their experiences and the high-quality care they received." })}
        </p>
        {/* <div className="relative w-full h-64 md:h-auto mx-auto mt-8">
          <Image
            src="/images/hero_testimonials.jpg"
            alt="Satisfied Patients"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div> */}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7f7f7"
            d="M0,64L60,85.3C120,107,240,149,360,176C480,203,600,213,720,218.7C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsHero;
