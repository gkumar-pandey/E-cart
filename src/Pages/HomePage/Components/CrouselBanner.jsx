import React from "react";
import { Carousel } from "antd";

import {
  headPhoneBanner,
  smartPhoneBanner,
  shoesBanner,
  speakerBanner
} from "../../../Assets";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <>
      <div className="banner-container">
        <img src={headPhoneBanner} />
        <div className="banner-text">
          <div className="text-container">
            <h1>Put the world on mute</h1>
            <h3>Buy Headphone,Speakers,Smart watch</h3>
          </div>
          <div className="btn-wrapper">
            <Link to={"/products"}>
              <button>Shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
