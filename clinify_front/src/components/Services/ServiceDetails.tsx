"use client";
import React from "react";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";

interface Service {
  title: string;
  description: string;
}

const ServiceDetails: React.FC = () => {
  const { t } = useTranslation('services');

  const services: Service[] = t('serviceDetails.services', { returnObjects: true });

  return (
    <div className="bg-lightBlue py-16 overflow-x-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 text-center lg:text-left lg:pr-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-darkPink">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/images/doctor.png"
            alt={t('serviceDetails.imageAlt')}
            width={400}
            height={400}
            className="rounded-full shadow-lg bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;