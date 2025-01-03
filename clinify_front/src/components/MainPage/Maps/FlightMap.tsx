import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const FlightMap = () => {
  const { t } = useTranslation("homepage");
  const [selectedCountry, setSelectedCountry] = useState("Great Britain");

  const options = [
    { name: "Germany", image: "/images/maps/Germany.svg" },
    { name: "Great Britain", image: "/images/maps/GreatBritain.svg" },
    { name: "Italy", image: "/images/maps/Italy.svg" },
    { name: "Austria", image: "/images/maps/Austria.svg" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const selectedOption = options.find(
    (option) => option.name === selectedCountry
  );

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-teal-50 to-teal-100 p-8">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-teal-800 mb-6 text-center font-serif">
        {t("title", { defaultValue: "Explore Flights to Montenegro" })}
      </h1>

      {/* Description */}
      <p className="text-teal-700 text-center mb-8 text-sm md:text-lg font-serif max-w-2xl">
        {t(
          "description",
          {
            defaultValue:
              "Discover flight connections from major cities to Montenegro. Select your country to view the route map.",
          }
        )}
      </p>

      {/* Country Selector */}
      <label htmlFor="country-select" className="sr-only">
        {t("label", { defaultValue: "Select your country" })}
      </label>
      <select
        id="country-select"
        className="w-full md:w-1/3 h-12 border border-teal-300 rounded-lg text-teal-800 font-medium text-center focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
        value={selectedCountry}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {t(`countries.${option.name}`, { defaultValue: option.name })}
          </option>
        ))}
      </select>

      {/* Map Display */}
      <div className="mt-10 w-full flex justify-center">
        <div className="relative w-full max-w-3xl">
          <Image
            src={selectedOption?.image || "/images/default.png"}
            alt={t("mapAlt", {
              country: selectedCountry,
              defaultValue: `Map showing flight routes from ${selectedCountry}`,
            })}
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-10 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FlightMap;
