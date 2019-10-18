import React from "react";
import { SideStrap } from "../SideStrap";
import { Arrow } from "../images/arrow";
import { UserIcon } from "../images/user";
import { Burger } from "../images/hamburger";
import { Menu } from "../Menu";
import { sections } from "./fixture";

export const Sidebar = () => {
  return (
    <div className="only-sideway sidebar-overlay">
      <div className="sidebar-wrapper">
        <div className="arrows">
          <Arrow color="#807E7E" />
          <Arrow />
        </div>
        <h3> Newsly </h3>
        <Menu sections={sections} />
        <div>
          <div className="list">
            <ul>
              <li>Invite Members </li>
              <li>Support </li>
            </ul>
          </div>
          <div className="user-wrapper">
            <UserIcon />
            <Burger />
          </div>
        </div>
      </div>
      <div className="svg-wrappers">
        <SideStrap />
      </div>
    </div>
  );
};
