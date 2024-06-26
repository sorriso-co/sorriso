import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const cities = {
  montenegro: ["Podgorica", "Budva", "Kotor", "Herceg Novi"],
  serbia: ["Belgrade", "Novi Sad", "Niš", "Kragujevac"],
  croatia: ["Zagreb", "Split", "Dubrovnik", "Rijeka"]
};

const Country: React.FC = () => {
  const router = useRouter();
  const { country } = router.query;

  const cityList = cities[country as keyof typeof cities] || [];

  return (
    <div className="bg-gray-100 py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 capitalize">{country}</h1>
        <p className="text-lg text-gray-700 mb-12">
          Explore the major cities in {country} for the best dental clinics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cityList.map((city) => (
            <Link key={city} href={`/destinations/${country}/${city.toLowerCase()}`}
              className="block bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-600">{city}</h3>
           
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
