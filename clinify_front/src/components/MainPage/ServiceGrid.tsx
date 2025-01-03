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
    },
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
    <section
      ref={ref}
      className="relative overflow-x-hidden px-6 py-16 bg-gradient-to-br from-teal-50 to-teal-100"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-teal-800 mb-6"
          data-aos="fade-up"
        >
          {t("serviceGrid.title")}
        </h2>
        <p
          className="text-lg md:text-2xl font-serif text-center text-teal-700 mb-12"
          data-aos="fade-up"
        >
          {t("serviceGrid.description")}
        </p>

        {/* Service Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out transform ${
                inView
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              onClick={handleCardClick}
            >
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
                <div className="w-24 h-24 mb-6">
                  <Image
                    src={service.icon}
                    alt={service.altText}
                    width={96}
                    height={96}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-teal-700 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
