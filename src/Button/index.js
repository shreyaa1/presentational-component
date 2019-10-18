import React from "react";

export const Button = ({
  name = "button",
  bgColor = "#333",
  color = "#fff"
}) => {
  return (
    <button
      className="button boxShadow"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {name}
    </button>
  );
};
