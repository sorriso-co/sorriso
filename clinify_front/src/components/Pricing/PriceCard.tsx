/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

interface PriceCardProps {
  title: string;
  description: string;
  prices: { country: string; price: string; flag: string }[];
  buttonText: string;
  topImage: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description,
  prices,
  buttonText,
  topImage,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const cheapestIndex = prices.reduce(
    (acc, cur, index) =>
      parseFloat(cur.price.replace(/[^0-9.-]+/g, "")) <
      parseFloat(prices[acc].price.replace(/[^0-9.-]+/g, ""))
        ? index
        : acc,
    0
  );

  return (
    <div
      className={`border rounded-t-[30px] rounded-b-[30px] p-6 shadow-lg w-96 transition-transform duration-300 transform hover:scale-105 relative bg-whites overflow-x-hidden border-teal-400`}
      style={{ minHeight: "550px" }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-teal-800">{title}</h2>
          <p className="text-teal-700">{description}</p>
        </div>
        <img
          src={topImage}
          alt="Top Image"
          className="w-24 h-24 rounded-full object-cover shadow-lg"
        />
      </div>
      <h3 className="font-bold mb-4 text-teal-900">Price of the treatment:</h3>
      <div className="space-y-2">
        {prices.map((item, index) => (
          <div
            key={index}
            className={`flex py-1 justify-between items-center text-teal-900 ${
              index === cheapestIndex
                ? "border-2 border-green-500 bg-green-100 rounded-md p-2"
                : ""
            }`}
          >
            <span className="flex items-center">
              {item.country}{" "}
              <img
                src={item.flag}
                alt={item.country}
                className="ml-2 w-5 h-5"
              />
            </span>
            <span className="font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-teal-700 shadow-md">
        {buttonText}
      </button>
    </div>
  );
};

export default PriceCard;
