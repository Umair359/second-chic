import React from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner.jsx";
import HomeCategory from "../../Components/HomeCategory/HomeCategory.jsx";
import HomeTrending from "../../Components/HomeTrending/HomeTrending.jsx";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <HomeCategory />
      <HomeTrending />
    </div>
  );
};

export default Home;
