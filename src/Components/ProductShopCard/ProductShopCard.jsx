import React from "react";
import "./ProductShopCard.css";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ProductShopCard = ({
  text,
  heading,
  rating,
  featured,
  image,
  price,
  displayType,
}) => {
  let yellowStars = [];
  let greyStars = [];
  for (let index = 0; index < Math.floor(rating); index++) {
    yellowStars.push(<IoIosStar className="yellowstars" />);
  }
  for (let index = 0; index < 5 - Math.floor(rating); index++) {
    greyStars.push(<IoIosStar />);
  }
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/products/123456789/details")}
      className={displayType ? "product-shop-card-list" : "product-shop-card"}
    >
      <div
        style={{ backgroundImage: `url(/images/${image})` }}
        className="product-shop-card-image"
      >
        {featured && <p>Featured</p>}
      </div>
      <div className="product-shop-card-text">
        <p>{text}</p>
        <h6>{heading}</h6>
        <h4>${price}</h4>
        <div>
          {yellowStars}
          {greyStars}

          <p>({rating})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductShopCard;
