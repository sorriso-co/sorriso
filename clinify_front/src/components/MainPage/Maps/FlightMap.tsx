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

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCountry(event.target.value);
  };

  const selectedOption = options.find(
    (option) => option.name === selectedCountry
  );

  return (
    <div className="flex flex-col items-center justify-center w-full bg-transparent p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-teal-800 mb-4 text-center font-serif">
        {t("title")}
      </h1>
      <p className="text-teal-800 text-center mb-6 text-sm md:text-lg font-serif">
        {t("description")}
      </p>

      <label htmlFor="country-select" className="sr-only">
        {t("label")}
      </label>
      <select
        id="country-select"
        className="w-full md:w-1/3 h-12 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
        value={selectedCountry}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {t(`countries.${option.name}`)}
          </option>
        ))}
      </select>

      <div className="mt-8 w-full flex justify-center">
        <Image
          src={selectedOption?.image || "/images/default.png"}
          alt={t("mapAlt", { country: selectedCountry })}
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FlightMap;
