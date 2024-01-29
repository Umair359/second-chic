import React from "react";
import "./AboutArround.css";
const AboutArround = () => {
  return (
    <div className="my-container">
      <div className="about-around">
        <div className="about-around-section1">
          <h4>WORLDWIDE</h4>
          <h2>
            ARROUND <span>SECONDCHIC</span>
          </h2>
          <p>
            We have been in the business for quite a while now, and in that time
            we have not only managed to make close relationships withnumerous
            suppliers all over the world, but also recognized whatpeople need.
            This means that we are always able to offer all the latest products,
            great prices, reliable servie, fast service and premium customer
            support
          </p>
        </div>
        <div className="about-around-section2">
          <img src="images/aboutAround.PNG" alt="aboutAround.PNG" />
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default AboutArround;
