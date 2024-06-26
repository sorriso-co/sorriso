import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

interface CountryCardProps {
  name: string;
  image: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, image }) => {
  return (
    <Link href={`/destinations/${name.toLowerCase()}`}
       className="block bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <Image src={image} alt={name} width={300} height={200} className="rounded-lg mb-4" />
        <h3 className="text-2xl font-bold text-blue-600 text-center">{name}</h3>
    </Link>
  );
};

export default CountryCard;
