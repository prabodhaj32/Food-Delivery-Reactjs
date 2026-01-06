import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-shell glass-surface">
        <div className="footer-grid">
          <div className="footer-block brand-block">
            <div className="footer-logo-row">
              <img src={assets.logo} alt="Taste Corner logo" className="footer-logo" />
              <div>
                <p className="eyebrow">Taste Corner</p>
                <h4>Fresh • Fast • Thoughtful</h4>
              </div>
            </div>
            <p className="footer-desc">
              Curated dishes from top kitchens delivered with care. Track live, earn rewards,
              and enjoy greener delivery.
            </p>
          </div>

          <div className="footer-block">
            <h3>Useful links</h3>
            <ul>
              <li>Home</li>
              <li>Explore menu</li>
              <li>Download app</li>
              <li>Restaurants</li>
            </ul>
          </div>

          <div className="footer-block">
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Safety & trust</li>
              <li>Accessibility</li>
              <li>Privacy & terms</li>
            </ul>
          </div>

          <div className="footer-block">
            <h3>Get in touch</h3>
            <ul>
              <li>076 547 0090</li>
              <li>contact@TasteCo.com</li>
              <li>Chat with support</li>
            </ul>
          </div>
        </div>

        <div className="footer-social-row">
          <p>Follow us</p>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="#" aria-label="Twitter"><img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="#" aria-label="LinkedIn"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 Taste Corner • Built for food lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;



