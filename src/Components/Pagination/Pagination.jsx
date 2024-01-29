import React from "react";
import "./Pagination.css";

const Pagination = ({ quantity = null, showing = null }) => {
  const renderButtons = () => {
    if (!quantity || !showing || showing >= quantity) {
      return null;
    }
    let totalPagination = Math.ceil(quantity / showing);
    let numButtons = totalPagination > 5 ? 5 : totalPagination;
    return (
      <>
        <button className="pagination-active-btn">1</button>
        {Array.from({ length: numButtons - 1 }, (_, index) => {
          const buttonNumber = index + 2;
          return <button key={index}>{buttonNumber}</button>;
        })}
        {numButtons === totalPagination ? null : <p>...</p>}
        {numButtons === totalPagination ? null : (
          <button>{totalPagination}</button>
        )}
      </>
    );
  };

  return <div className="pagination">{renderButtons()}</div>;
};

export default Pagination;
