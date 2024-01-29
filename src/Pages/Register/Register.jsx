import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Input from "../../Components/Input/Input.jsx";
import classes from "./Register.module.css";
import CustomPhoneInput from "../../Components/CustomPhoneInput/index.js";
import DropDown from "../../Components/DropDown";
import Button from "../../Components/Button/Button.jsx";
const countryOpt = [
  {
    label: "UK",
    value: "UK",
  },
  {
    label: "Austrailia",
    value: "Austrailia",
  },
];
const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postcode: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="my-container">
      <form className={classes.seller_register_form}>
        <h3>Register now with few easy steps!</h3>
        <h1>REGISTRATION FORM</h1>
        <div></div>
        <h6>
          Note: Please make sure to fill in the form with your actual
          information or else your account may become banned or suspended
        </h6>
        <div className={classes.seller_register_form_input_box}>
          <h2>BASIC DETAILS</h2>
          <Row className={classes.rowMain}>
            <Col md={6}>
              <Input
                placeholder={"Enter Your First Name"}
                label={"First Name*"}
                setter={(e) => {
                  setUserData({ ...userData, firstName: e });
                }}
                value={userData?.firstName}
              />
            </Col>
            <Col md={6}>
              <Input
                placeholder={"Enter Your Last Name"}
                label={"Last Name*"}
                setter={(e) => {
                  setUserData({ ...userData, lastName: e });
                }}
                value={userData?.lastName}
              />
            </Col>
            <Col md={6}>
              <CustomPhoneInput
                setter={(e) => {
                  setUserData({ ...userData, phone: e });
                }}
                value={userData?.phone}
              />
            </Col>
            <Col md={6}>
              <Input
                type={"email"}
                placeholder={"Enter Your Email"}
                label={"Email*"}
                setter={(e) => {
                  setUserData({ ...userData, email: e });
                }}
                value={userData?.email}
              />
            </Col>
            <Col md={12}>
              <Input
                placeholder={"Enter Your Address"}
                label={"Address*"}
                setter={(e) => {
                  setUserData({ ...userData, address: e });
                }}
                value={userData?.address}
              />
            </Col>
            <Col md={6}>
              <DropDown
                label={"Country*"}
                placeholder={"Country"}
                setter={(e) => {
                  setUserData({ ...userData, country: e });
                }}
                value={userData?.country}
                option={countryOpt}
              />
            </Col>
            <Col md={6}>
              <DropDown
                label={"State / Province *"}
                placeholder={"State / Province"}
                setter={(e) => {
                  setUserData({ ...userData, state: e });
                }}
                value={userData?.state}
                option={countryOpt}
              />
            </Col>
            <Col md={6}>
              <DropDown
                label={"City"}
                placeholder={"City"}
                setter={(e) => {
                  setUserData({ ...userData, city: e });
                }}
                value={userData?.city}
                option={countryOpt}
              />
            </Col>
            <Col md={12}>
              <Input
                placeholder={"Enter Your Postcode / ZIP"}
                label={"Postcode / ZIP*"}
                setter={(e) => {
                  setUserData({ ...userData, postcode: e });
                }}
                value={userData?.postcode}
              />
            </Col>
          </Row>
        </div>
        <div className={classes.seller_register_form_input_box}>
          <h2>ACCOUNT</h2>
          <Row className={classes.rowMain}>
            <Col md={6}>
              <Input
                type={"password"}
                placeholder={"Password"}
                label={"Password*"}
                setter={(e) => {
                  setUserData({ ...userData, password: e });
                }}
                value={userData?.password}
              />
            </Col>
            <Col md={6}>
              <Input
                type={"password"}
                placeholder={"Repeat Password"}
                label={"Repeat Password*"}
                setter={(e) => {
                  setUserData({ ...userData, confirmPassword: e });
                }}
                value={userData?.confirmPassword}
              />
            </Col>

            <Col md={12}>
              <div className={classes.btnMain}>
                <Button label={"REGISTER"} />
              </div>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default Register;
