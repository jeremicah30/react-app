import React from "react";
import "./nav-bar.css";

import reactLogo from "../../image/react-logo.webp";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="sub-con">
        <img className="nav-img" src={reactLogo} alt="React Logo" />
        <h3 className="nav-h3">ReactFacts</h3>
        <h4 className="nav-h4">React Course - Project 1</h4>
      </div>
    </div>
  );
};

export default NavBar;
