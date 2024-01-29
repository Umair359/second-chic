import React from "react";
import classes from "./CheckBox.module.css";
import { Form } from "react-bootstrap";
const CheckBox = ({
  label = "test",
  setter,
  value,
  index,
  isLabelShow = true,
  bgColor = "var(--primary-color)",
}) => {
  const onChangeHandler = ({ target: { checked } }) => {
    if (Array.isArray(value)) {
      if (checked) {
        let tempArr = [...value];
        tempArr.push(typeof label == "object" ? label?.id : label);
        setter(tempArr);
      } else {
        let tempArr2 = [...value];
        let filterData = tempArr2.filter((ele, i) => i !== index);
        setter(filterData);
      }
    } else {
      if (checked) {
        setter(typeof label == "object" ? label?.id : label);
      } else {
        setter("");
      }
    }
  };
  return (
    <>
      <style jsx>
        {`
          .form-check-input {
            border: 1px solid #000 !important;
            border-radius: 2px !important;
            width: 1.1em;
            height: 1.1rem;
          }
          .form-check-input:focus {
            box-shadow: unset;
          }
          .form-check-input:checked {
            background-color: ${bgColor} !important;
          }
        `}
      </style>
      <div className={classes.main}>
        {isLabelShow && label && (
          <label>{typeof label == "object" ? label?.title : label}</label>
        )}
        <Form.Check onChange={onChangeHandler} />
      </div>
    </>
  );
};

export default CheckBox;
