"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Simplified image paths
const slides = [
  { id: 1, src: "/images/about_us_slide/ars_technology.webp" },
  { id: 2, src: "/images/about_us_slide/program.webp" },
  { id: 3, src: "/images/about_us_slide/waiting.webp" },
  { id: 4, src: "/images/about_us_slide/clinic.webp" },
  { id: 5, src: "/images/about_us_slide/chair.webp" },
  { id: 6, src: "/images/about_us_slide/pc.webp" }
];

const TestSwiper: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }} 
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-64">
              <Image
                src={slide.src}
                alt={`Slide ${slide.id}`}
                width={400}
                height={300}
                className="rounded-lg object-cover"
                quality={65}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-teal-800 text-white rounded-full shadow p-2 cursor-pointer z-10">
        <FaArrowLeft />
      </div>
      <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-800 text-white rounded-full shadow p-2 cursor-pointer z-10">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default TestSwiper;
