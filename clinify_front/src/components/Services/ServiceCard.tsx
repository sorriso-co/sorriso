import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-lg w-full">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-t-2xl"
        loading="eager" 
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-teal-800">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
