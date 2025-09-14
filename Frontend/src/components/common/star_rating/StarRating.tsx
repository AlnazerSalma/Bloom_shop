import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./StarRating.css";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 16,
  className = "",
}) => {
  return (
    <div className={`star-rating ${className}`}>
      {[...Array(maxStars)].map((_, index) => {
        if (rating >= index + 1) {
          return <FaStar key={index} size={size} className="star-active" />;
        } else if (rating >= index + 0.5) {
          return <FaStarHalfAlt key={index} size={size} className="star-active" />;
        } else {
          return <FaRegStar key={index} size={size} className="star-inactive" />;
        }
      })}
    </div>
  );
};

export default StarRating;
