"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-lightPink text-white h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] xl:h-[1400px] flex flex-col justify-center items-center mt-2">
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          width={1920}
          height={1080}
          objectPosition="center center"
          priority
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-customPink opacity-70"></div>
      </div>

      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4">
          Welcome to Sorriso
        </h1>
        <p className="text-lg sm:text-xl mb-6 font-serif">
          Your smile is our priority. Experience world-class dental services
          abroad.
        </p>
        <Link
          href="/services"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-lightPink font-serif-semibold hover:bg-customPink text-white rounded-lg shadow-md transition"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
