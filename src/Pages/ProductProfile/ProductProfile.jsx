import React from "react";
import { IoIosStar } from "react-icons/io";
import "./ProductProfile.css";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard";
const ProductProfile = () => {
  return (
    <div className="my-container">
      <div className="product-profile">
        <div>
          <img src="/images/profileProduct.png" alt="profileProduct.png" />
        </div>
        <div>
          <h2>Aden 45</h2>
          <div className="product-profile-section1">
            <IoIosStar className="yellowstars" />
            <IoIosStar className="yellowstars" />
            <IoIosStar className="yellowstars" />
            <IoIosStar className="yellowstars" />
            <IoIosStar className="yellowstars" />
            <p>12 Evaluation</p>
          </div>
          <div className="product-profile-section2">
            <img src="/images/location.png" alt="location.png" />
            <h6>Dubai, UAE</h6>
          </div>
          <div className="product-profile-section3">
            <h6>Number of Ads</h6>
            <h6>10</h6>
          </div>
        </div>
      </div>
      <div className="product-profile-link">
        <p className="product-profile-link-active">Wardrobe</p>
        <p>Evaluation</p>
      </div>
      <div className="favourite-card-container product-profile-container">
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={true}
          priceoff={true}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={true}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={true}
          priceoff={true}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={true}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={true}
          priceoff={true}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={true}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={false}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={true}
          priceoff={true}
        />
        <FavouriteCard
          image="productItemBG.png"
          price="200"
          featured={true}
          priceoff={false}
        />
        <FavouriteCard
          image="productItemBG1.png"
          price="100"
          featured={false}
          priceoff={false}
        />
      </div>
    </div>
  );
};

export default ProductProfile;
