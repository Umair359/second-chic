import React, { useState } from "react";
import "./HomeCategory.css";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import PopularCard from "../../Components/PopularCard/PopularCard.jsx";
const HomeCategory = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="home-category">
      <div className="my-container">
        <div className="home-category-items">
          <div className="home-category-section1">
            <h2>Category</h2>
            <h4>
              The point of using Lorem Ipsum is that it has more-or-less normal
            </h4>
            <div>
              <button
                onClick={() => setActiveButton(0)}
                className={`${activeButton === 0 ? "active" : ""}`}
              >
                WOMEN
              </button>
              <button
                onClick={() => setActiveButton(1)}
                className={`${activeButton === 1 ? "active" : ""}`}
              >
                MEN
              </button>
              <button
                onClick={() => setActiveButton(2)}
                className={`${activeButton === 2 ? "active" : ""}`}
              >
                KIDS
              </button>
              <button
                onClick={() => setActiveButton(3)}
                className={`${activeButton === 3 ? "active" : ""}`}
              >
                ACCESSORIES
              </button>
              <button
                onClick={() => setActiveButton(4)}
                className={`${activeButton === 4 ? "active" : ""}`}
              >
                LUXURY
              </button>
            </div>
          </div>
          <div className="home-category-section2">
            {activeButton === 0 ? (
              <>
                <ProductCard image="productCardBg" />
                <ProductCard image="productCardBg2" />
                <ProductCard image="productCardBg3" />
                <ProductCard image="productCardBg4" />
              </>
            ) : activeButton === 1 ? (
              <>
                <ProductCard image="productCardBg4" />
                <ProductCard image="productCardBg3" />
                <ProductCard image="productCardBg2" />
                <ProductCard image="productCardBg" />
              </>
            ) : activeButton === 2 ? (
              <>
                <ProductCard image="productCardBg3" />
                <ProductCard image="productCardBg4" />
                <ProductCard image="productCardBg2" />
                <ProductCard image="productCardBg" />
              </>
            ) : activeButton === 3 ? (
              <>
                <ProductCard image="productCardBg4" />
                <ProductCard image="productCardBg2" />
                <ProductCard image="productCardBg3" />
                <ProductCard image="productCardBg" />
              </>
            ) : activeButton === 4 ? (
              <>
                <ProductCard image="productCardBg4" />
                <ProductCard image="productCardBg2" />
                <ProductCard image="productCardBg" />
                <ProductCard image="productCardBg3" />
              </>
            ) : null}
          </div>
          <h2>Popular Items</h2>
          <div className="home-category-section2">
            <PopularCard image="popularCard" />
            <PopularCard image="popularCard2" />
            <PopularCard image="popularCard3" />
            <PopularCard image="popularCard4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
