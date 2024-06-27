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
    <div className="bg-white shadow-lg rounded-2xl overflow-x-hidden transition-transform transform hover:scale-105 w-full">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-pink-600">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
