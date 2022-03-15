import React from "react";
import "./main-content.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="bg-gray">
        <h1 className="mc-h1">Fun facts about React</h1>

        <ul className="mc-items">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
