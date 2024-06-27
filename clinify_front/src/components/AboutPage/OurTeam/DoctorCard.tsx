import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

// doctor must be defined here!!!
interface Doctor {
  image: string;
  name: string;
  title: string;
}

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-teal-600 w-full max-w-xs mx-auto"
      data-aos="fade-up"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-teal-600">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={224}
          height={224}
          priority
          className="rounded-full"
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mt-6 text-center">
        {doctor.name}
      </h3>
      <p className="text-lg md:text-xl text-teal-600 mt-2 text-center">
        {doctor.title}
      </p>
      <div className="w-16 h-1 bg-teal-600 mt-2 mb-4"></div>
    </div>
  );
};

export default DoctorCard;
