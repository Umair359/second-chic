import React from "react";
import "./AboutSpeciality.css";
import AboutSpecialityCard from "../../Components/AboutSpecialityCard/AboutSpecialityCard.jsx";
const AboutSpeciality = () => {
  return (
    <div className="my-container">
      <div className="about-speaciality-section1">
        <h2>Our Speciality</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere
          dolores beatae recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam facere dolores beatae recusandae.
        </p>
      </div>
      <div className="about-speaciality-section2">
        <AboutSpecialityCard
          heading="Over 1+ Million Regular Customers"
          text="You receive your product on time regardless of your location. Conditions applied."
          icon="Icon1.png"
        />
        <AboutSpecialityCard
          heading="Regular’s Offers & Discounts"
          text="We are in collaboration among the finest brands all around the whole world"
          icon="Icon2.png"
        />
        <AboutSpecialityCard
          heading="International Brands"
          text="Our tools are designed based on the best e-commerce experience for both sellers"
          icon="Icon3.png"
        />
        <AboutSpecialityCard
          heading="Worlwide Free Shipping"
          text="You receive your product on time regardless of your location. Conditions applied."
          icon="Icon4.png"
        />
      </div>
    </div>
  );
};

export default AboutSpeciality;
