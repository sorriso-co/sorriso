"use client";

import React, { useState } from "react";
import { register } from "../../services/api";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    country: "",
    city: "",
    password: "",
  });

  const countries = countryList().getData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption: any) => {
    setFormData({ ...formData, country: selectedOption.label });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({
        ...formData,
        email: formData.email.toLowerCase(),
      });
      console.log("User registered:", response);
      alert("User registered successfully");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error registering user:", error.message);
      } else {
        console.error("Error registering user:", error);
      }
      alert("Error registering user");
    }
  };
  return (
    <div className="py-24 min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold mb-8 text-darkPink">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-darkPink">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-darkPink">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-darkPink">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-darkPink">Phone</label>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <div>
            <label className="block text-darkPink">Country</label>
            <Select
              options={countries}
              value={countries.find(
                (country) => country.label === formData.country
              )}
              onChange={handleCountryChange}
              placeholder="Select Country"
            />
          </div>
          <div>
            <label className="block text-darkPink">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-darkPink">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
