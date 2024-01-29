import React, { useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
const ProductCard = ({ image }) => {
  const navigate = useNavigate();
  const [activeHeart, setActiveHeart] = useState(false);
  return (
    <div
      className="product-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(/images/${image}.png)`,
      }}
    >
      {activeHeart ? (
        <IoHeartSharp onClick={() => setActiveHeart(false)} />
      ) : (
        <IoHeartOutline onClick={() => setActiveHeart(true)} />
      )}

      <div onClick={() => navigate("/products/12345678/details")}>
        <h5>Product Name Here</h5>
        <h4>$18.00</h4>
      </div>
    </div>
  );
};

export default ProductCard;
