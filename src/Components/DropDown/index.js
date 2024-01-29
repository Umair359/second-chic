import React from "react";
import classes from "./DropDown.module.css";
import Select from "react-select";

const DropDown = ({
  option,
  label,
  placeholder,
  setter,
  value,
  isMulti = false,
}) => {
  return (
    <>
      <style>
        {`
        .select__control{
          border: 2px solid gainsboro;
                padding: 9px 0px 9px 5px;
                box-shadow:unset;
        }
        .select__control:hover{
          border: 2px solid gainsboro;
        }
        .select__control:focus{
          border: 2px solid gainsboro;
        }
        .select__indicator-separator{
                display:none;
        }
        .select__single-value{
          color:var(--black-color) !important;
          font-weight:600;
        }
        .select__menu{
            background:;
        }
        .select__placeholder{
          font-size: 15px;
          font-weight: 600;
        }
        `}
      </style>

      <div className={classes.dropDownMain}>
        <label>{label}</label>
        <Select
          isMulti={isMulti}
          onChange={setter}
          value={value}
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={option[0]}
          name="color"
          options={option}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default DropDown;
