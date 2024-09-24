"use client";
import React, { useEffect } from "react";
import FlipCard from "./FlipCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

interface Procedure {
  image: string;
  title: string;
  shortDescription?: string;
  link?: string;
  necessity?: string;
  candidate?: string;
  duration?: string;
}

interface MostWantedProceduresProps {
  procedures: Procedure[]; // Expecting an array
}

const MostWantedProcedures: React.FC<MostWantedProceduresProps> = ({
  procedures = [], // Default to an empty array
}) => {
  const { t } = useTranslation('services');

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="w-full h-full bg-teal-50 py-16 px-4 sm:px-8 overflow-x-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-800 mb-6">
          {t('mostWanted.title')}
        </h2>
        <p className="text-base sm:text-lg font-serif text-teal-700 mb-8">
          {t('mostWanted.description')}
        </p>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:grid-cols-2 md:gap-6">
          {procedures.length > 0 ? (
            procedures.map((procedure, index) => (
              <div data-aos="fade-up" key={index}>
                <FlipCard procedure={procedure} />
              </div>
            ))
          ) : (
            <p className="text-teal-600">{t('mostWanted.noProcedures', { defaultValue: 'No procedures available at this time.' })}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MostWantedProcedures;
