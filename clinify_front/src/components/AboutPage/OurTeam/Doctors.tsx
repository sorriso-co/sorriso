"use client";
import React, { useEffect } from "react";
import DoctorCard from "./DoctorCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="overflow-x-hidden bg-teal-50 py-24 px-4 md:px-8 rounded-lg mb-12 shadow-lg font-serif">
      <h2 className="text-5xl font-bold font-serif text-teal-800 text-center mb-12">
        {t('team.title')}
      </h2>
      <p className="text-xl font-serif text-center mt-4 mb-16 text-teal-700 px-4">
        {t('team.description')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
        <DoctorCard
          doctor={{
            name: t('team.doctor1.name'),
            title: t('team.doctor1.title'),
            image: "/images/Team/staff/milija.jpg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor2.name'),
            title: t('team.doctor2.title'),
            image: "/images/Team/staff/jelena.jpeg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor3.name'),
            title: t('team.doctor3.title'),
            image: "/images/Team/staff/malojacidoktor.jpg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor4.name'),
            title: t('team.doctor4.title'),
            image: "/images/Team/staff/mladidoktor.jpg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor5.name'),
            title: t('team.doctor5.title'),
            image: "/images/Team/staff/milena.jpeg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor6.name'),
            title: t('team.doctor6.title'),
            image: "/images/Team/staff/dijana.jpeg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor7.name'),
            title: t('team.doctor7.title'),
            image: "/images/Team/staff/sestra.jpg"
          }}
        />
        <DoctorCard
          doctor={{
            name: t('team.doctor8.name'),
            title: t('team.doctor8.title'),
            image: "/images/Team/staff/nadja.jpeg"
          }}
        />
      </div>
    </div>
  );
};

export default Team;
