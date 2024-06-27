"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const MontenegroHighlights: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-teal-800 py-10 sm:py-20 relative rounded-lg overflow-x-hidden m-0">
      <div className="relative z-10 container mx-auto text-center px-4">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-8 sm:mb-10"
          data-aos="fade-up"
        >
          {t('montenegroHighlights.title')}
        </h2>
        <p
          className="text-lg sm:text-xl md:text-2xl text-teal-50 mb-10 sm:mb-16 max-w-2xl mx-auto font-serif"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t('montenegroHighlights.description')}
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden relative shadow-lg">
              <Image
                src="/images/mne/biogradska.jpeg"
                alt={t('montenegroHighlights.highlights.highlight1')}
                width={208}
                height={208}
                priority
                className="rounded-full"
              />
            </div>
            <h4 className="mt-4 text-sm sm:text-lg md:text-xl text-teal-50 font-semibold font-serif">
              {t('montenegroHighlights.highlights.highlight1')}
            </h4>
          </div>
          <div
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden relative shadow-lg">
              <Image
                src="/images/mne/lovcen.jpeg"
                alt={t('montenegroHighlights.highlights.highlight2')}
                width={208}
                height={208}
                priority
                className="rounded-full"
              />
            </div>
            <h4 className="mt-4 text-sm sm:text-lg md:text-xl text-teal-50 font-semibold font-serif">
              {t('montenegroHighlights.highlights.highlight2')}
            </h4>
          </div>
          <div
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className=" relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/mne/more.png"
                alt={t('montenegroHighlights.highlights.highlight3')}
                width={208}
                height={208}
                priority
                className="rounded-full"
              />
            </div>
            <h4 className="mt-4 text-sm sm:text-lg md:text-xl text-teal-50 font-semibold font-serif">
              {t('montenegroHighlights.highlights.highlight3')}
            </h4>
          </div>
          <div
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/mne/flamingo.jpeg"
                alt={t('montenegroHighlights.highlights.highlight4')}
                width={208}
                height={208}
                priority
                className="rounded-full"
              />
            </div>
            <h4 className="mt-4 text-sm sm:text-lg md:text-xl text-teal-50 font-semibold font-serif">
              {t('montenegroHighlights.highlights.highlight4')}
            </h4>
          </div>
        </div>
        <Link href="/contact"
          
            className="inline-block mt-8 bg-teal-600 text-teal-50 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t('montenegroHighlights.ctaButton')}
        </Link>
      </div>
    </div>
  );
};

export default MontenegroHighlights;
