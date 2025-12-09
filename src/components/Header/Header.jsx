import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.headerim})` }}
    >
      <div className="header-overlay"></div>

      <div className="header-contents">
        <h2>Fresh, Fast & Flavorful Meals</h2>
        <p>Order your favourite dishes delivered fresh and fast.</p>
        <button>Explore Menu</button>
      </div>
    </div>
  );
};

export default Header;
