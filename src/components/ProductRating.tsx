import { assets } from "@/assets/assets";
import React from "react";

interface Props {
  rating: number;
}

const ProductRating: React.FC<Props> = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          className="md:w-3.5 w3"
          src={i < rating ? assets.star_icon : assets.star_dull_icon}
          alt="rating-star"
        />
      ))}
      <p>({rating})</p>
    </div>
  );
};

export default ProductRating;
