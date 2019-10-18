import React, { useState } from "react";
import { Logo } from "../images/logo";
import { Menu } from "../Menu";
import { Search } from "../Search";
import { Button } from "../Button";

export const sections = [
  {
    Products: []
  },
  {
    Hub: []
  },
  {
    Resources: ["a", "b"]
  },
  {
    "About Us": []
  },
  {
    More: ["a", "b"]
  },
  {
    Pricing: []
  }
];

export const Header = () => {
  return (
    <div className="header-wrapper">
      <Logo />
      <span className="logo">hackstrap</span>
      <Menu sections={sections} />
      <div className="cta">
        <Search />
        <Button name="Sign In" bgColor="#F4F5F9" color="#10389B" />
        <Button name="Sign Up" bgColor="#F4F5F9" color="#10389B" />
      </div>
    </div>
  );
};
