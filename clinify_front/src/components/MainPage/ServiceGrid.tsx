"use client";

import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Service {
  icon: string;
  title: string;
  altText: string;
}

const ServiceGrid: React.FC = () => {
  const { t } = useTranslation("homepage");

  const services: Service[] = [
    {
      icon: "/images/service-grid/all-on-4.webp",
      title: t("serviceGrid.services.0.title"),
      altText: t("serviceGrid.services.0.altText"),
    },
    {
      icon: "/images/service-grid/veneers.webp",
      title: t("serviceGrid.services.1.title"),
      altText: t("serviceGrid.services.1.altText"),
    },
    {
      icon: "/images/service-grid/full-mouth.webp",
      title: t("serviceGrid.services.2.title"),
      altText: t("serviceGrid.services.2.altText"),
    },
    {
      icon: "/images/service-grid/dental-implant.webp",
      title: t("serviceGrid.services.3.title"),
      altText: t("serviceGrid.services.3.altText"),
    }
  ];

  const router = useRouter();

  const handleCardClick = () => {
    router.push("/services");
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="relative overflow-x-hidden px-4 md:px-8 py-12 md:py-16 bg-teal-50"
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-center text-teal-700 mb-6">
          {t("serviceGrid.title")}
        </h2>
        <p className="text-xl md:text-3xl font-serif text-center text-teal-600 mb-12">
          {t("serviceGrid.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition duration-700 ease-in-out transform ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              onClick={handleCardClick}
            >
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.altText}
                    width={96}
                    height={96}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-600 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
