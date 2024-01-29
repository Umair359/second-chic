import React from "react";
import classes from "./CustomPhoneInput.module.css";
import PhoneInput from "react-phone-input-2";
const CustomPhoneInput = ({
  setter,
  value,
  label = "Phone",
  placeholder = "Phone",
}) => {
  return (
    <>
      <style>
        {`
      .react-tel-input .form-control{
        width:100% !important;
        height:56px !important;
        background: var(--white-color) !important;
        border:2px solid gainsboro !important;
      }
      .react-tel-input .flag-dropdown{
          border:none !important;
          background-color: #ebebeb !important;
      }
      `}
      </style>
      <div className={classes.phoneInputMain}>
        {label && <label>{label}</label>}
        <PhoneInput
          placeholder={placeholder ? placeholder : ""}
          value={String(value)}
          onChange={(phone) => setter(String(phone))}
          country={"us"}
        />
      </div>
    </>
  );
};

export default CustomPhoneInput;
