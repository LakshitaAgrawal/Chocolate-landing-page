import React from "react";
import AboutBackground from "../Assets/custom2.png";
import AboutBackgroundImage from "../Assets/about-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <div className="rounded-image">
          <img src={AboutBackgroundImage} alt="" />
        </div>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          From Bean to Bliss, We're Chocolate Experts
        </h1>
        <p className="primary-text">
          Each chocolate is meticulously crafted by hand to ensure the utmost
          quality and flavor. Our pastry chefs create sweets only with
          creativity and love.
        </p>
        <p className="primary-text">
          Beyond taste, we're committed to sustainability, sourcing ethically
          and supporting cocoa farmers.
        </p>
        <p className="primary-text">Pure Cocoa Passion in Every Creation</p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
