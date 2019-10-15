import React from "react";

export const Button = ({ name = "button", bgColor = "#333" }) => {
  return (
    <div className="button boxShadow" style={{ backgroundColor: bgColor }}>
      {name}
    </div>
  );
};
