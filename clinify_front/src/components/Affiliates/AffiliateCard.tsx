import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon, title, delay, children }) => {
  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-gray-200 border-4 border-teal-500 rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl shadow-lg mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-serif font-bold text-teal-700 text-center">{title}</h3>
      </div>
      <p className="text-gray-800 text-lg leading-relaxed text-center">{children}</p>
    </div>
  );
};

export default Card;
