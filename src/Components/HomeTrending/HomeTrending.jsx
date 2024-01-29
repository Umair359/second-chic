import React from "react";
import "./HomeTrending.css";
import { useNavigate } from "react-router-dom";
const HomeTrending = () => {
  const navigate = useNavigate();
  return (
    <div className="home-trending">
      <div
        className="home-trending-card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(/images/trendingBg.png)`,
        }}
      >
        <div>
          <h2>Top Trending Used Cloth</h2>
          <h4>The world's most stylish women are buying right now</h4>
          <button onClick={() => navigate("/products/12345678/details")}>
            DISCOVER NOW
          </button>
        </div>
      </div>
      <div
        className="home-trending-card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(/images/trendingBg2.png)`,
        }}
      >
        <div>
          <h2>Top Trending Used Cloth</h2>
          <h4>The world's most stylish women are buying right now</h4>
          <button onClick={() => navigate("/products/12345678/details")}>
            DISCOVER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTrending;
