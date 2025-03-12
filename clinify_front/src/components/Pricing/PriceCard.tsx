"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface PriceCardProps {
  title: string;
  description: string;
  prices: { country: string; price: string; flag: string }[];
  buttonText: string;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description,
  prices,
  buttonText,
  className,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  // Memoize the calculation for cheapest price to avoid re-calculation on each render
  const cheapestIndex = useMemo(() => {
    return prices.reduce(
      (acc, cur, index) =>
        parseFloat(cur.price.replace(/[^0-9.-]+/g, "")) <
        parseFloat(prices[acc].price.replace(/[^0-9.-]+/g, ""))
          ? index
          : acc,
      0
    );
  }, [prices]);

  return (
    <div
      className={`relative border rounded-[30px] p-6 shadow-md w-full sm:w-96 bg-white overflow-hidden ${className}`}
      style={{ minHeight: "600px" }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* Card Content */}
      <div className="flex flex-col justify-between h-full">
        {/* Title and Description */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-teal-800">{title}</h2>
          <p className="text-teal-600">{description}</p>
        </div>

        {/* Price Section */}
        <h3 className="font-bold mb-4 text-teal-900">
          Price of the treatment:
        </h3>
        <div className="space-y-2">
          {prices.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-2 px-3 text-teal-900 ${
                index === cheapestIndex
                  ? "border-2 border-green-500 bg-green-100 rounded-md"
                  : "border border-teal-200 rounded-lg"
              }`}
            >
              <span className="flex items-center">
                {item.country}
                <Image
                  src={item.flag}
                  alt={item.country}
                  width={24} // Reduced size to improve performance
                  height={16}
                  loading="lazy" // Lazy load the image for performance
                  className="ml-2 object-contain"
                />
              </span>
              <span className="font-bold">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Link href="/quote" passHref>
          <button className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-full transition-colors duration-200 hover:bg-teal-700 w-full">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
