import React from "react";
import logo from "../images/justair.co_Logo.jpg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-title">
        <img src={logo} alt="JustData Logo" className="header-icon" />
        <h1>JustData</h1>
      </div>
      <p className="header-description">
        Deploy production-like MongoDB sandbox environments with one click. Test
        your features in a clean, isolated environment with real data snapshots.
      </p>
    </div>
  );
};

export default Header;
