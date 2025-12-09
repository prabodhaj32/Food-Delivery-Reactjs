import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-container">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className={mobileOpen ? "bar open" : "bar"}></div>
        <div className={mobileOpen ? "bar open" : "bar"}></div>
        <div className={mobileOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Menu Items */}
      <ul className={mobileOpen ? "navbar-menu mobile-show" : "navbar-menu"}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>

        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-seach-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>

          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
