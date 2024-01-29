import React from "react";
import "./About.css";
import AboutBanner from "../../Components/AboutBanner/AboutBanner.jsx";
import AboutSpeciality from "../../Components/AboutSpeciality/AboutSpeciality.jsx";
import AboutJoin from "../../Components/AboutJoin/AboutJoin.jsx";
import AboutArround from "../../Components/AboutArround/AboutArround.jsx";
import Slider from "react-slick";
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
  };
  return (
    <div className="about">
      <AboutBanner />
      <AboutSpeciality />

      <Slider {...settings} className="my-container">
        <div>
          <img src="/images/addidas.png" alt="addidas.png" />
        </div>
        <div>
          <img src="/images/calvin.png" alt="calvin.png" />
        </div>
        <div>
          <img src="/images/puma.png" alt="puma.png" />
        </div>
        <div>
          <img src="/images/garnier.png" alt="garnier.png" />
        </div>
        <div>
          <img src="/images/pepsi.png" alt="pepsi.png" />
        </div>
        <div>
          <img src="/images/samsung.png" alt="samsung.png" />
        </div>
        <div>
          <img src="/images/addidas.png" alt="addidas.png" />
        </div>
        <div>
          <img src="/images/calvin.png" alt="calvin.png" />
        </div>
        <div>
          <img src="/images/puma.png" alt="puma.png" />
        </div>
        <div>
          <img src="/images/garnier.png" alt="garnier.png" />
        </div>
        <div>
          <img src="/images/pepsi.png" alt="pepsi.png" />
        </div>
        <div>
          <img src="/images/samsung.png" alt="samsung.png" />
        </div>
      </Slider>

      <AboutJoin />
      <AboutArround />
    </div>
  );
};

export default About;
