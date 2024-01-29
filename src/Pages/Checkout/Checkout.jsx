import React from "react";
import classes from "./Checkout.module.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CheckBox from "../../Components/CheckBox/CheckBox";
import { RiDeleteBinLine } from "react-icons/ri";
const stepperData = [
  {
    title: "MY CART",
  },
  {
    title: "CHECKOUT",
  },
  {
    title: "PAYMENT",
  },
  {
    title: "ORDER COMPLETE",
  },
];

const checkBoxLabel = [
  {
    title: "hussain",
    id: "2649247639743",
  },
  {
    title: "mudassir",
    id: "264924437639743",
  },
  {
    title: "fahad",
    id: "264349247639743",
  },
];
const RenderStepper = ({ data, index, stepperCount }) => {
  return (
    <div
      className={[
        classes.stepperHead,
        stepperCount === index && classes.activeStepper,
      ].join(" ")}
    >
      <div className={classes.stepperMain}>
        <div className={classes.count}>
          <p>{++index}</p>
        </div>
        <p>{data?.title}</p>
      </div>
    </div>
  );
};
const Checkout = () => {
  const [stepperCount, setStepperCount] = useState(0);
  const [myData, setmyData] = useState([]);

  console.log(myData, "myDatamyData");
  return (
    <div className={"my-container"}>
      <div className={classes.stepper__wrapper}>
        {stepperData?.map((ele, index) => {
          return (
            <RenderStepper
              stepperCount={stepperCount}
              data={ele}
              index={index}
            />
          );
        })}
      </div>

      <Row>
        <Col md={8}>
          <div className={classes.leftHeader}>
            <div>
              <CheckBox
                isLabelShow={false}
                setter={setmyData}
                value={myData}
                label={"test"}
                bgColor="var(--black-color)"
              />
              <p>Select All (5 Products)</p>
            </div>
            <p>
              Delete All
              <span>
                <RiDeleteBinLine size={18} />
              </span>
            </p>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default Checkout;
