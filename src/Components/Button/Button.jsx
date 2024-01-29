import React from "react";
import classes from "./Button.module.css";
const Button = ({ label, className, onClick , disabled , customStyle , children}) => {
  return (
    <>
      <button
      style={customStyle}
      disabled={disabled}
        onClick={onClick}
        className={[classes.customBtn, className && className].join(" ")}
      >
        {label && label}
        {children}
      </button>
    </>
  );
};

export default Button;
