import React from "react";
import classes from "./Radio.module.css";
import { Form } from "react-bootstrap";
const Radio = ({ setter, value, label }) => {
  const onChangeHandler = (e) => {
    setter(e.target.value);
  };
  return (
    <div className={classes.main}>
      <Form.Check
        value={label ? label : ""}
        name={"radio"}
        type="radio"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Radio;
