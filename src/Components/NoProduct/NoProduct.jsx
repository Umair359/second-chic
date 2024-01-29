import React from "react";
import "./NoProduct.css";
const NoProduct = ({ hanldleResetFilter }) => {
  return (
    <div className="no-product">
      <h2>Sorry, we couldn’t find any results matching with this filter</h2>
      <button onClick={hanldleResetFilter}>Reset Filter</button>
    </div>
  );
};

export default NoProduct;
