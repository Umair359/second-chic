import React, { useState } from "react";
import "./PopularCard.css";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
const PopularCard = ({ image }) => {
  const navigate = useNavigate();
  const [activeHeart, setActiveHeart] = useState(false);
  return (
    <div className="popular-card">
      <div
        style={{ backgroundImage: `url(/images/${image}.png)` }}
        className="popular-card-image"
      >
        {activeHeart ? (
          <IoHeartSharp onClick={() => setActiveHeart(false)} />
        ) : (
          <IoHeartOutline onClick={() => setActiveHeart(true)} />
        )}
      </div>
      <div
        className="popular-card-text"
        onClick={() => navigate("/products/12345678/details")}
      >
        <p>
          Women Chiffon Solid Pure Basic Soft Red Blouses Tops Summer Top Casual
          Loose
        </p>
        <button>L</button>
        <h4>$ 45.00</h4>
      </div>
    </div>
  );
};

export default PopularCard;
