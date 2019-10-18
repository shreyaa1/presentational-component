import React from "react";
import { IconDemo } from "../images/social";

export const SuggestedSource = () => {
  return (
    <div className="wrapper wrapper-source">
      <p className="heading">Suggested Sources</p>
      <div className="followers">
        <IconDemo />
        <div className="followers__text">
          <p>Deep Learning</p>
          <p>100 followers </p>
        </div>
      </div>
      <p>Find more</p>
    </div>
  );
};
