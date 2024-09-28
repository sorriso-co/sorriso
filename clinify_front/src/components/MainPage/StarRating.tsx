import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="relative flex items-center">
      {/* Outline Stars (Background) */}
      {[1, 2, 3, 4, 5].map((star) => (
        <AiOutlineStar
          key={star}
          className="text-white w-8 h-8 lg:w-10 lg:h-10 drop-shadow-xl transition-transform duration-300 ease-out transform hover:scale-110"
        />
      ))}

      {/* Filled Stars (Foreground) */}
      <div
        className="absolute top-0 left-0 flex overflow-hidden transition-all duration-300 ease-out transform hover:scale-105"
        style={{ width: `${(rating / 5) * 100}%` }}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <AiFillStar
            key={star}
            className="text-yellow-400 w-8 h-8 lg:w-10 lg:h-10 drop-shadow-lg transition-all duration-300 ease-out transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
