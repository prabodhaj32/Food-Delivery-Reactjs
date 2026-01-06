import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <section
      className="header"
      style={{ backgroundImage: `url(${assets.headerim})` }}
    >
      <div className="header-gradient" />

      <div className="header-grid">
        <div className="header-contents">
          <p className="eyebrow">Premium delivery • Under 20 mins avg.</p>
          <h1 className="hero-title">
            Delicious restaurant flavours,
            <span> delivered fresh.</span>
          </h1>
          <p className="lede">
            Curated dishes from top-rated kitchens. Track live, earn rewards,
            and enjoy greener, faster delivery.
          </p>
          <div className="header-actions">
            <a href="#explore-menu" className="primary-btn">Explore menu</a>
            <a href="#app-download" className="ghost-link">Get the app</a>
          </div>

          <div className="stats">
            <div>
              <strong>4.8</strong>
              <span>Avg. rating</span>
            </div>
            <div>
              <strong>650+</strong>
              <span>Partner kitchens</span>
            </div>
            <div>
              <strong>12 min</strong>
              <span>Median ETA</span>
            </div>
          </div>
        </div>

        <div className="header-card glass-surface">
          <div className="card-top">
            <p className="eyebrow">Live order</p>
            <h3>Chef’s Signature Bowl</h3>
            <p className="card-desc">Spicy sesame rice • Avocado • Umami glaze</p>
          </div>
          <div className="card-meta">
            <div><span>ETA</span><strong>11 min</strong></div>
            <div><span>Prep</span><strong>Fresh</strong></div>
            <div><span>Fee</span><strong>$0</strong></div>
          </div>
          <button className="card-cta" type="button">Track order</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
