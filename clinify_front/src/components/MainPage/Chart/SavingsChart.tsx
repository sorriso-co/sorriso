"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { namedProcedures } from "./named_procedures";
import { customProcedures } from "./custom_procedures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faPlane,
  faHome,
  faMobileAlt,
  faPiggyBank,
  // faDumbbell,
  faGraduationCap,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const icons = [
  { name: "Car", description: "Buy a car", value: 15000, icon: faCar },
  {
    name: "Family Trip",
    description: "Luxury trip for 10 days",
    value: 8000,
    icon: faPlane,
  },
  {
    name: "Home Upgrade",
    description: "Home renovations",
    value: 10000,
    icon: faHome,
  },
  {
    name: "Electronics",
    description: "High-end gadgets",
    value: 3000,
    icon: faMobileAlt,
  },
  {
    name: "Savings Fund",
    description: "Add to your savings",
    value: 5000,
    icon: faPiggyBank,
  },
  {
    name: "Luxury Watch",
    description: "Buy a premium watch",
    value: 3000,
    icon: faClock,
  },
  // {
  //   name: "Fitness Equipment",
  //   description: "Build a home gym",
  //   value: 4000,
  //   icon: faDumbbell,
  // },
  {
    name: "Education Fund",
    description: "Invest in courses or education",
    value: 6000,
    icon: faGraduationCap,
  },
];

const ChartComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedProcedure, setSelectedProcedure] = useState("Hollywood Smile");
  const [numImplants, setNumImplants] = useState(0);
  const [numCrowns, setNumCrowns] = useState(0);
  const [isCustom, setIsCustom] = useState(false);

  const { t } = useTranslation("homepage");

  const countries = Object.keys(customProcedures.crowns.pricePerUnit);

  const getNamedProcedurePrice = (country: string, procedure: string) => {
    const procedureData = namedProcedures.find(
      (p) => p.procedure === procedure
    );
    return (
      procedureData?.countries[
        country as keyof typeof procedureData.countries
      ] || 0
    );
  };

  const getCustomProcedurePrice = (
    country: string,
    implants: number,
    crowns: number
  ) => {
    const implantPrice =
      implants *
      customProcedures.implants.pricePerUnit[
        country as keyof typeof customProcedures.implants.pricePerUnit
      ];
    const crownPrice =
      crowns *
      customProcedures.crowns.pricePerUnit[
        country as keyof typeof customProcedures.crowns.pricePerUnit
      ];
    const extractionPrice =
      implants *
      customProcedures.extractions.pricePerUnit[
        country as keyof typeof customProcedures.extractions.pricePerUnit
      ];
    return implantPrice + crownPrice + extractionPrice;
  };

  const countryPrice = isCustom
    ? getCustomProcedurePrice(selectedCountry, numImplants, numCrowns)
    : getNamedProcedurePrice(selectedCountry, selectedProcedure);

  const montenegroPrice = isCustom
    ? getCustomProcedurePrice("Montenegro", numImplants, numCrowns)
    : getNamedProcedurePrice("Montenegro", selectedProcedure);

  const savings = countryPrice - montenegroPrice;

  const data = {
    labels: [
      t("chartComponent.barChart.labels.0"),
      t("chartComponent.barChart.labels.1"),
    ],
    datasets: [
      {
        label: t("chartComponent.barChart.datasets.0.label"),
        data: [countryPrice, montenegroPrice],
        backgroundColor: ["#1e90ff", "#34D399"],
        borderWidth: 1,
      },
    ],
  };

  interface ChartOptions {
    responsive: boolean;
    plugins: {
      legend: { display: boolean };
      tooltip: { enabled: boolean };
    };
    scales: {
      y: {
        beginAtZero: boolean;
        ticks: {
          callback: (tickValue: string | number) => string;
        };
      };
    };
  }

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue) {
            return `$${Number(tickValue).toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-serif text-teal-900 mb-6 text-center">
        {t("chartComponent.title")}
      </h1>
      <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-4xl">
        <div className="flex flex-col w-full">
          <label className="text-teal-700 mb-2">
            {t("chartComponent.countryLabel")}
          </label>
          <select
            aria-label="Select your country"
            className="w-full border rounded-lg p-2"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-teal-700 mb-2">
            {t("chartComponent.procedureLabel")}
          </label>
          <div className="flex gap-2">
            <button
              className={`w-1/2 p-2 border rounded-lg ${
                !isCustom ? "bg-teal-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setIsCustom(false)}
            >
              {t("chartComponent.namedProceduresButton")}
            </button>
            <button
              className={`w-1/2 p-2 border rounded-lg ${
                isCustom ? "bg-teal-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setIsCustom(true)}
            >
              {t("chartComponent.customProceduresButton")}
            </button>
          </div>

          {!isCustom ? (
            <select
              aria-label="Select a named procedure"
              className="w-full mt-4 border rounded-lg p-2"
              value={selectedProcedure}
              onChange={(e) => setSelectedProcedure(e.target.value)}
            >
              {namedProcedures.map((procedure) => (
                <option key={procedure.procedure} value={procedure.procedure}>
                  {procedure.procedure}
                </option>
              ))}
            </select>
          ) : (
            <div className="mt-4 flex gap-4">
              <div>
                <label className="block text-teal-700 mb-1">
                  {t("chartComponent.numImplantsLabel")}
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg p-2"
                  value={numImplants}
                  onChange={(e) => setNumImplants(Number(e.target.value))}
                  placeholder={t("chartComponent.numImplantsPlaceholder")}
                />
              </div>
              <div>
                <label className="block text-teal-700 mb-1">
                  {t("chartComponent.numCrownsLabel")}
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg p-2"
                  value={numCrowns}
                  onChange={(e) => setNumCrowns(Number(e.target.value))}
                  placeholder={t("chartComponent.numCrownsPlaceholder")}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <Bar
            data={data}
            options={{
              ...options,
              maintainAspectRatio: false, // Disable aspect ratio for height adjustment
            }}
            height={500}
          />
        </div>
      </div>

      {savings > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-serif text-teal-800 mb-4 text-center">
            {t("chartComponent.savingsTitle", {
              savings: savings.toLocaleString(),
            })}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {icons
              .filter((icon) => icon.value <= savings)
              .map((icon, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg flex flex-col items-center shadow-md bg-white hover:shadow-lg transition duration-300"
                >
                  <FontAwesomeIcon
                    icon={icon.icon as IconProp}
                    size="2x"
                    className="text-teal-700 mb-2"
                  />
                  <span className="text-lg md:text-xl font-bold text-teal-700 text-center">
                    {icon.name}
                  </span>
                  <p className="text-xs md:text-sm text-gray-600 mt-2 text-center">
                    {icon.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
