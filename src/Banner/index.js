import React, { useState } from "react";
import { Setting } from "../images/setting";

export const Banner = () => {
  const [isSettingOpen, handleSettingPanel] = useState(false);

  const openSettingPanel = () => {
    handleSettingPanel(!isSettingOpen);
  };

  return (
    <div>
      <div className="banner boxShadow">
        <span>AI News</span>
        <div className="setting-btn" onClick={openSettingPanel}>
          <Setting />
          {isSettingOpen && (
            <div className="list">
              <ul>
                <li>AI News </li>
                <li>Sources </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
