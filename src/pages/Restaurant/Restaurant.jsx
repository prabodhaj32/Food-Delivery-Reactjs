import React from 'react'
import './Restaurant.css'
import { assets } from '../../assets/assets'

const sampleMenu = [
  { id: 1, title: 'Signature Bowl', desc: 'Sesame rice, avocado, spicy glaze', price: 12.5, img: assets.food_1 },
  { id: 2, title: 'Charred Paneer Wrap', desc: 'Tandoori paneer, mint chutney, pickled onions', price: 10.0, img: assets.food_2 },
  { id: 3, title: 'Truffle Mushroom Pizza', desc: 'Wild mushrooms, truffle oil, fresh mozzarella', price: 15.0, img: assets.food_3 },
  { id: 4, title: 'Citrus Salmon Bowl', desc: 'Grilled salmon, yuzu mayo, edamame', price: 14.0, img: assets.food_4 },
]

const Restaurant = () => {
  return (
    <section className="restaurant">
      <div className="banner" style={{ backgroundImage: `url(${assets.headerim})` }}>
        <div className="banner-overlay" />
        <div className="banner-content">
          <p className="eyebrow">Top rated • Partner</p>
          <h1>Taste Corner - Cloud Kitchen</h1>
          <div className="badge-row">
            <span className="rating-pill">4.8 ★</span>
            <span className="tag">Fast delivery</span>
            <span className="tag">Hygiene+</span>
          </div>
        </div>
      </div>

      <div className="restaurant-body">
        <div className="info-row">
          <div className="info-chip">
            <span>Delivery</span>
            <strong>12-18 min</strong>
          </div>
          <div className="info-chip">
            <span>Cuisine</span>
            <strong>Asian • Fusion • Bowls</strong>
          </div>
          <div className="info-chip">
            <span>Location</span>
            <strong>Downtown • 1.2 km</strong>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-header">
            <div>
              <p className="eyebrow">Menu</p>
              <h2>Recommended</h2>
            </div>
            <button className="filter-btn" type="button">Veg & Non-veg</button>
          </div>

          <div className="menu-grid">
            {sampleMenu.map(item => (
              <article className="menu-card" key={item.id}>
                <div className="menu-media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="menu-info">
                  <div className="menu-title-row">
                    <h3>{item.title}</h3>
                    <span className="menu-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                  <div className="menu-actions">
                    <span className="mini-rating">4.7 ★</span>
                    <button type="button" className="add-mini">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-cart">
        <div>
          <p className="eyebrow">Cart total</p>
          <strong>$32.50</strong>
        </div>
        <button type="button">View cart</button>
      </div>
    </section>
  )
}

export default Restaurant



