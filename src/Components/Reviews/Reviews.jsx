import React, { useState } from "react";
import "./Reviews.css";
import ReviewCard from "../../Components/ReviewCard/ReviewCard.jsx";
const Reviews = () => {
  const [activeStars, setActiveStars] = useState(0);

  return (
    <div className="review">
      <div className="review-header">
        <h2>Product Review</h2>
        <select onChange={(e) => setActiveStars(e.target.value)}>
          <option value="0">Filter</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <div className="review-card-container">
        {activeStars <= 2 ? <ReviewCard stars={2} /> : null}
        {activeStars <= 3 ? <ReviewCard stars={3} /> : null}
      </div>
    </div>
  );
};

export default Reviews;
