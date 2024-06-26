import React from "react";

interface CountryDropdownProps {
  countries: string[];
  onSelect: (country: string) => void;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({ countries, onSelect }) => {
  return (
    <div className="mb-8">
      <label className="block text-gray-700 text-sm font-bold mb-2">Select a Country:</label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full p-4 rounded-lg shadow-md border border-gray-300"
      >
        <option value="">Choose a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
