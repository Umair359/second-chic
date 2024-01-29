import React from "react";
import "./HomeBanner.css";
import { useNavigate } from "react-router-dom";
const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="home-banner">
      <div className="my-container">
        <div className="home-banner-item">
          <h4>CHOOSE COLLECTION</h4>
          <h1>Find Your Used Favourite Clothing</h1>
          <h4>
            Keep perfect time with the contemporary expertly-crafted design
          </h4>
          <button onClick={() => navigate("/register")}>SELL NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
