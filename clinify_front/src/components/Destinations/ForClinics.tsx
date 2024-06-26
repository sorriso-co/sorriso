import React from "react";
import Link from "next/link";
import { FaTooth, FaHandsHelping, FaSmile } from 'react-icons/fa';

const ForClinics: React.FC = () => {
  return (
    <section className="bg-white p-12 rounded-lg shadow-lg text-center mt-12">
      <h2 className="text-4xl font-extrabold text-darkPink mb-6">Join Our Network!</h2>
      <p className="text-lg text-gray-700 mb-8">
        Are you a private clinic looking to expand your reach and provide world-class dental care to patients from around the globe? Join us on our journey to make dental tourism accessible and affordable.
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <div className="flex flex-col items-center">
          <FaTooth className="text-darkPink w-12 h-12 mb-2" />
          <p className="text-gray-700">World-class Facilities</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHandsHelping className="text-darkPink w-12 h-12 mb-2" />
          <p className="text-gray-700">Collaborative Community</p>
        </div>
        <div className="flex flex-col items-center">
          <FaSmile className="text-darkPink w-12 h-12 mb-2" />
          <p className="text-gray-700">Happy Patients</p>
        </div>
      </div>
      <Link href="/contact"
        className="inline-block bg-darkPink text-white py-3 px-8 rounded-lg hover:bg-pink-700 transition-colors">
          Contact Us
      </Link>
    </section>
  );
};

export default ForClinics;
