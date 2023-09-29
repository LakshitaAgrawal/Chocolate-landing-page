import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/custom1.png";
import BannerImage from "../Assets/home-image.jpg";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Our patisserie produces unique sweets for lovers of yummy
          </h1>
          <p className="primary-text">
            Each chocolate is meticulously crafted by hand to ensure the utmost
            quality and flavor.
          </p>
          <p className="primary-text">Gift Happiness, Gift Chocolate</p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <div className="rounded-image">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
