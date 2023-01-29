import React from "react";
import CategoryComp from "./Components/CategoryComp";
import HeroImage from "./Components/CrouselBanner";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <HeroImage />
      <CategoryComp />
    </div>
  );
};

export default HomePage;
