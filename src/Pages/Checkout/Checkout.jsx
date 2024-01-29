import React from "react";
import classes from "./Checkout.module.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CheckBox from "../../Components/CheckBox/CheckBox";
import { RiDeleteBinLine } from "react-icons/ri";
import CartRow from "../../Components/CartRow";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import Radio from "../../Components/Radio/Radio";
import { GoHome } from "react-icons/go";
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
  const [code, setCode] = useState("");
  const [selectRate, setSelectRate] = useState("");

  console.log(myData, "myDatamyData");
  return (
    <div className={"my-container"}>
      <p className={classes.head__text}>
        <GoHome size={20} />
        Home / <span>Cart</span>
      </p>
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
          <h6 className={classes.leftMain__heading}>
            Select the items you want to buy
          </h6>
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

          <div className={classes.leftBody}>
            <div
              className={[classes.leftHeader, classes.leftBody__inner].join(
                " "
              )}
            >
              <div>
                <CheckBox
                  isLabelShow={false}
                  setter={setmyData}
                  value={myData}
                  label={"test"}
                  bgColor="var(--black-color)"
                />
                <p>Minimal Lifestyle</p>
              </div>
              <p>7 Days</p>
            </div>

            {[1, 1]?.map((ele) => {
              return <CartRow />;
            })}
          </div>

          <div className={classes.leftBody}>
            <div
              className={[classes.leftHeader, classes.leftBody__inner].join(
                " "
              )}
            >
              <div>
                <CheckBox
                  isLabelShow={false}
                  setter={setmyData}
                  value={myData}
                  label={"test"}
                  bgColor="var(--black-color)"
                />
                <p>Minimal Lifestyle</p>
              </div>
              <p>7 Days</p>
            </div>

            {[1]?.map((ele) => {
              return <CartRow />;
            })}
          </div>

          <p className={classes.continue}>
            <HiOutlineArrowNarrowLeft />
            Continue Shopping
          </p>
        </Col>
        <Col md={4}>
          <div className={classes.summary__wrapper}>
            <h5>Order Summery</h5>

            <div className={classes.subTotal}>
              <p>Subtotal</p>
              <p>$639.00</p>
            </div>

            <div className={classes.shipping}>
              <p>Shipping</p>
              <div>
                <p>
                  <Radio setter={setSelectRate} label={"0.00"} />
                  Local Pickup:
                </p>
                <p>$0.00</p>
              </div>
              <div>
                <p>
                  <Radio setter={setSelectRate} label={"4.00"} />
                  Flat Rate:
                </p>
                <p>$4.00</p>
              </div>
              <div>
                <p>Tax:</p>
                <p>$18.67</p>
              </div>
            </div>

            <div className={classes.totalAmmount}>
              <h5>Total Ammount</h5>
              <p>657.67</p>
            </div>

            <div className={classes.applyNow}>
              <p>
                Have a coupon? <span>Apply Now</span>
              </p>
              <div className={classes.input__wrapper}>
                <Input
                  type={"number"}
                  setter={setCode}
                  value={code}
                  placeholder={"Type Coupon Code"}
                />
                <Button>
                  <FaArrowRight color="#fff" size={18} />
                </Button>
              </div>
            </div>
            <div className={classes.btn__wrapper}>
              <Button label={"PROCEED TO CHECKOUT"} />
            </div>

            <div className={classes.paymentsMethod}>
              <p>Accepted Payment method</p>

              <div className={classes.images__wrapper}>
                <img src="./images/payoption1.png" />
                <img src="./images/payoption2.png" />
                <img src="./images/payoption3.png" />
                <img src="./images/payoption4.png" />
                <img src="./images/payoption5.png" />
                <img src="./images/payoption6.png" />
                <img src="./images/payoption7.png" />
                <img src="./images/payoption8.png" />
                <img src="./images/payoption9.png" />
                <img src="./images/payoption10.png" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
