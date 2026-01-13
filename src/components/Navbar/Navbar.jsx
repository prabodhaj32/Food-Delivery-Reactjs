import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="navbar glass-surface">
      <Link to="/" className="logo-container" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="logo" className="logo" />
        <div className="brand">
          <span className="brand-kicker">Delivering happy bites</span>
          <span className="brand-name">Taste Corner</span>
        </div>
      </Link>

      <nav className={mobileOpen ? "navbar-menu mobile-show" : "navbar-menu"}>
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
            setMobileOpen(false);
            window.scrollTo(0, 0);
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            setMobileOpen(false);
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#food-display"
          onClick={() => {
            setMenu("popular");
            setMobileOpen(false);
          }}
          className={menu === "popular" ? "active" : ""}
        >
          Popular
        </a>

        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
            setMobileOpen(false);
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          App
        </a>

        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
            setMobileOpen(false);
          }}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>

      <div className="navbar-right">
        <button className="ghost-btn" onClick={() => setShowLogin(true)}>
          Sign in
        </button>
        <Link to="/cart" className="cart-chip">
          <img src={assets.basket_icon} alt="cart" />
          <span>Cart</span>
          {getTotalCartAmount() > 0 && <span className="dot"></span>}
        </Link>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={mobileOpen ? "bar open" : "bar"}></div>
          <div className={mobileOpen ? "bar open" : "bar"}></div>
          <div className={mobileOpen ? "bar open" : "bar"}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
