import React from "react";
import "./PopularPostCard.css";
const PopularPostCard = ({ image }) => {
  return (
    <div className="popular-post">
      <img src={`/images/${image}`} alt={image} />
      <div>
        <h4>26-10-2023</h4>
        <h3>Best Sunscreens for Oily & Acne Prone Skin in...</h3>
      </div>
    </div>
  );
};

export default PopularPostCard;
