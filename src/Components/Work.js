
import React from "react";
import PickMeals from "../Assets/chocolate.png";
import ChooseMeals from "../Assets/choice.png";
import DeliveryMeals from "../Assets/delivery.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Handpicked Ingredients",
      text: "From nut-filled delights to fruity infusions and creamy truffles, we have it all.",
    },
    {
      image: ChooseMeals,
      title: "Choose Packaging",
      text: "Every detail, from the ribbon to the box, is carefully considered to create an exceptional opening experience.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Easily send chocolates to multiple addresses in a single order. Perfect for gifting.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Discover the rich heritage and tradition that make us a trusted name in chocolate.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
