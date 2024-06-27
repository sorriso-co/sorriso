import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import 'aos/dist/aos.css';
interface StepProps {
  stepNumber: number;
  title: string;
  items?: string[];
  description?: string;
  footnote?: string;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, items, description, footnote }) => {
  return (
    <div
      className="mb-12 p-12 border-4 border-teal-700 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      data-aos="fade-up"
      data-aos-duration="800"
      style={{ maxWidth: '450px', margin: '0 auto', textAlign: 'center' }}
    >
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-teal-700 text-white flex items-center justify-center mb-4 shadow-md">
          <span className="font-bold text-3xl">{stepNumber}</span>
        </div>
        <h3 className="text-4xl font-serif font-bold text-teal-900">{title}</h3>
      </div>
      {description && <p className="text-base text-gray-700 mb-6">{description}</p>}
      {items && (
        <ul className="text-base text-gray-700 mb-6 space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-center">
              <FaCheckCircle className="text-teal-700 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {footnote && <p className="text-sm text-gray-600 italic">{footnote}</p>}
    </div>
  );
};

export default Step;
