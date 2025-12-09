import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-section footer-left">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p>
            We are dedicated to delivering fresh, healthy, and delicious food
            straight to your doorstep. Quality and customer satisfaction
            are our top priorities.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h2>Get In Touch</h2>
          <ul>
            <li>076 547 0090</li>
            <li>contact@TasteCo.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className="footer-copy">
        © 2025 Taste Corner — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
