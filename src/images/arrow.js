import React from "react";

export function Arrow({ color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="11"
      fill="none"
      viewBox="0 0 8 11"
    >
      <path
        fill={color}
        d="M4.134 0L0 5.5 4.134 11H7.5L3.366 5.5 7.5 0H4.134z"
      ></path>
    </svg>
  );
}
