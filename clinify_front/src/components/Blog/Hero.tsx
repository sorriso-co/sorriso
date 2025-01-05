import React from 'react';
import Link from 'next/link';

const BlogHero = () => {
  return (
    <section
      className="relative bg-teal-800 bg-center h-[50vh] sm:h-[60vh] text-white"
    >

      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-wide drop-shadow-lg">
          Discover Insights, Stories, & Expert Advice
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg sm:max-w-2xl tracking-wide drop-shadow-md">
          Explore the world of dental tourism, full-mouth rehabilitation, and expert tips to elevate your smile. Journey with us through stories and trends in modern dental care.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/services"
            className="bg-white text-teal-800 font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-teal-700 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:bg-teal-600 transition duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
