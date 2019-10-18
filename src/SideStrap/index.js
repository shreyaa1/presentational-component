import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon1 } from "../images/svg1";
import { Icon2 } from "../images/svg2";
import { Icon3 } from "../images/svg3";
import { Icon4 } from "../images/svg4";
import { Icon5 } from "../images/svg5";
import { Icon6 } from "../images/svg6";
import { SearchIcon } from "../images/search-icon";
import { Setting } from "../images/setting";

class SideStrapBase extends React.Component {
  checkIfOpen = () => {
    this.props.toggle();
  };

  render() {
    return (
      <>
        <div className="notification">
          <Icon1 />
        </div>
        <div className="notification">
          <SearchIcon color="#fff" />
        </div>

        <div>
          <Icon2 />
        </div>

        <div>
          <Icon3 />
        </div>
        <div>
          <Icon4 />
        </div>
        <div className="notification" onClick={this.checkIfOpen}>
          {this.props.toggle && <span className="dot"></span>}
          <Icon5 />
        </div>
        <div>
          <Icon6 />
        </div>
        <div>
          <Setting color="#fff" />
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggle: () => dispatch({ type: "TOGGLE" })
  };
};

export const SideStrap = connect(
  null,
  mapDispatchToProps
)(SideStrapBase);
