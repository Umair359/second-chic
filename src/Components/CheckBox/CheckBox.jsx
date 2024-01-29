import React from "react";
import classes from "./CheckBox.module.css";
import { Form } from "react-bootstrap";
const CheckBox = ({
  label = "test",
  setter,
  value,
  index,
  isLabelShow = true,
  bgColor,
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
  console.log(bgColor, "bgColorbgColorbgColor");
  return (
    <>
      <style jsx>
        {`
          .main__wrapperCheckbox .form-check-input:checked {
            background-color: ${bgColor && bgColor} !important;
          }
        `}
      </style>
      <div className={[classes.main, "main__wrapperCheckbox"].join(" ")}>
        {isLabelShow && label && (
          <label>{typeof label == "object" ? label?.title : label}</label>
        )}
        <Form.Check onChange={onChangeHandler} />
      </div>
    </>
  );
};

export default CheckBox;
