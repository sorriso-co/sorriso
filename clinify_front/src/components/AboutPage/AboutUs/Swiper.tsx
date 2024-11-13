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
  { id: 1, src: "/images/about_us_slide/program.webp" },
  { id: 2, src: "/images/about_us_slide/waiting.webp" },
  { id: 3, src: "/images/about_us_slide/clinic.webp" },
  { id: 4, src: "/images/about_us_slide/chair.webp" },
  { id: 5, src: "/images/about_us_slide/pc.webp" },
  { id: 6, src: "/images/about_us_slide/ars_technology.webp" },
];

const TestSwiper: React.FC = () => {
  return (
    <div className="relative mt-16 flex justify-center">
      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-80">
                <Image
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                  layout="fill"
                  className="rounded-lg object-cover"
                  quality={80}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute top-1/2 -left-6 text-transparent p-3 cursor-pointer">
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next absolute top-1/2 -right-6 text-transparent p-3 cursor-pointer">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default TestSwiper;
