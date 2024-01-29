import React from "react";
import "./AboutSpecialityCard.css";
const AboutSpecialityCard = ({ icon, text, heading }) => {
  return (
    <div className="about-speciality-card">
      <img src={`images/${icon}`} alt="aboutSpecialty1.png" />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default AboutSpecialityCard;
