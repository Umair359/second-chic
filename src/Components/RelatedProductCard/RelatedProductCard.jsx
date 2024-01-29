import React from "react";
import "./RelatedProductCard.css";
import { IoIosStar } from "react-icons/io";
const RelatedProductCard = ({ image }) => {
  return (
    <div className="related-product-card">
      <div
        style={{ backgroundImage: `url(/images/${image})` }}
        className="related-product-card-image"
      >
        <p>FEATURED</p>
      </div>
      <div className="related-product-card-text">
        <p>Woman Fashion</p>
        <p>Woman Korean o-neck Knitted Pullovers Thick Autumn...</p>
        <h6>$75 - $75</h6>
        <div>
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <p>(3)</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;
