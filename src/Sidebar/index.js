import React, { useState } from "react";
import { sections } from "./fixture";

export const Sidebar = () => {
  const [openPanel, handlePanel] = useState(null);

  const openFilterPanel = (event, index) => {
    event.stopPropagation();
    event.preventDefault();
    let activeIndex = openPanel === index ? null : index;

    handlePanel(activeIndex);
    console.log("p0", index);
    console.log("p0", activeIndex);
  };

  const menuData = sections;

  return (
    <div className="sidebar-wrapper">
      <h3> Newsly </h3>
      <div className="sidebar">
        {menuData.map((menu, index) => {
          const submenuKey = Object.keys(menu);
          const getSubmenu = menu[submenuKey];

          return (
            <div key={`story-${index}`}>
              {submenuKey.map((menuFirst, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="menu"
                      onClick={event => openFilterPanel(event, index)}
                    >
                      {menuFirst}
                    </div>

                    <ul
                      className={`sub-list ${
                        index === openPanel ? "open" : ""
                      }`}
                    >
                      {getSubmenu.map((submenuFirst, index) => (
                        <li className="submenu">{submenuFirst}</li>
                      ))}
                    </ul>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
