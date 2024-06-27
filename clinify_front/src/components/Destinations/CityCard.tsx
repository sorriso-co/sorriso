// "use client";
// import React from "react";
// import Link from "next/link";

// interface CityCardProps {
//   name: string;
//   image: string;
//   description: string;
//   link: string;
// }

// const CityCard: React.FC<CityCardProps> = ({ name, image, description, link }) => {
//   return (
//     <Link href={link}>
//       <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105">
//         <img src={image} alt={name} className="w-full h-48 object-cover" />
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-darkPink mb-4">{name}</h2>
//           <p className="text-gray-700 mb-4">{description}</p>
//           <span className="text-pink-500 hover:text-pink-700">View Clinics</span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CityCard;
