/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'next-i18next';

interface Testimonial {
  name: string;
  story: string;
  image: string;
  quote: string;
  position: string;
  company: string;
}

const AffiliatesStories: React.FC = () => {
  const { t } = useTranslation('business');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials: Testimonial[] = t('affiliatesStories.testimonials', { returnObjects: true });

  return (
    <div className="bg-white py-16 px-8">
      <div className="container mx-auto text-center mb-12">
        <h2
          className="text-5xl lg:text-6xl font-serif font-bold mb-6 text-teal-900 drop-shadow-lg"
          data-aos="fade-up"
        >
          {t('affiliatesStories.title')}
        </h2>
      </div>
      <div className="container mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-teal-50 rounded-lg p-6 shadow-lg h-96 overflow-hidden flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-teal-800 text-xl font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position} - {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.story}</p>
                <p className="text-gray-600">
                  {t('affiliatesStories.commissionEarned')}:{" "}
                  <span className="text-teal-800 font-bold">$200</span> {t('affiliatesStories.perReferral')}
                </p>
                <p className="text-gray-600">
                  {t('affiliatesStories.totalReferrals')}:{" "}
                  <span className="text-teal-800 font-bold">50+</span>
                </p>
                <p className="text-teal-900 text-lg italic mb-4">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AffiliatesStories;