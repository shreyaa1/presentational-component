import React from "react";
import heroImage from "../images/hero-image.png";

export const StoryCard = () => {
  return (
    <div className="wrapper">
      <img src={heroImage} alt="image" />
      <div className="wrapper__content">
        <h4 className="wrapper__heading">
          Email vs Chatbot marketing, whiic is better? What should modern
          organizations be doing when they are faced with numerious options?
        </h4>
        <p className="wrapper__descriptions">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of
          the printing
        </p>
      </div>
    </div>
  );
};
