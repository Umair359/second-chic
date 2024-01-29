import React from "react";
import { IoIosStar } from "react-icons/io";
import "./MoreProduct.css";
const MoreProduct = ({ image }) => {
  return (
    <div className="more-prooducts">
      <img src={`/images/${image}`} alt="moreProduct1.png" />
      <div>
        <div>
          <IoIosStar className="yellowstars" />
          <IoIosStar className="yellowstars" />
          <IoIosStar className="yellowstars" />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p>Furniture combo</p>
        <p>$215 - $400</p>
      </div>
    </div>
  );
};

export default MoreProduct;
