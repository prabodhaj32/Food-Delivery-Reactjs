import React, { useState } from 'react'
import './OrderTracking.css'
import { assets } from '../../assets/assets'

const OrderTracking = () => {
  const [currentStage, setCurrentStage] = useState(2) // 0: Ordered, 1: Preparing, 2: Delivering, 3: Delivered

  const stages = [
    { id: 0, label: 'Ordered', time: '12:30 PM' },
    { id: 1, label: 'Preparing', time: '12:35 PM' },
    { id: 2, label: 'On the way', time: '12:48 PM' },
    { id: 3, label: 'Delivered', time: '12:55 PM' },
  ]

  return (
    <section className="order-tracking">
      <div className="tracking-header">
        <div>
          <p className="eyebrow">Order #TC-2025-001</p>
          <h1>Track your order</h1>
        </div>
        <div className="eta-card">
          <span className="eta-label">ETA</span>
          <strong className="eta-time">7 min</strong>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-bar">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div className={`progress-step ${currentStage >= stage.id ? 'active' : ''}`}>
                <div className="step-dot" />
                <div className="step-info">
                  <p className="step-label">{stage.label}</p>
                  <span className="step-time">{stage.time}</span>
                </div>
              </div>
              {index < stages.length - 1 && (
                <div className={`progress-line ${currentStage > stage.id ? 'active' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="tracking-grid">
        <div className="rider-card">
          <div className="rider-header">
            <div className="rider-avatar">
              <img src={assets.profile_icon || 'https://via.placeholder.com/60'} alt="Rider" />
            </div>
            <div className="rider-info">
              <h3>Alex Johnson</h3>
              <p className="rider-badge">Verified rider</p>
            </div>
          </div>
          <div className="rider-meta">
            <div className="meta-item">
              <span>Vehicle</span>
              <strong>Bike • TC-7892</strong>
            </div>
            <div className="meta-item">
              <span>Rating</span>
              <strong>4.9 ★</strong>
            </div>
          </div>
          <button className="contact-btn" type="button">Contact rider</button>
        </div>

        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-icon">📍</div>
            <p>Live tracking map</p>
            <span className="map-note">Real-time location updates</span>
          </div>
        </div>
      </div>

      <div className="order-summary">
        <h3>Order details</h3>
        <div className="summary-row">
          <span>Items</span>
          <strong>3 dishes</strong>
        </div>
        <div className="summary-row">
          <span>Total</span>
          <strong>$32.50</strong>
        </div>
        <div className="summary-row">
          <span>Payment</span>
          <strong>Card • Paid</strong>
        </div>
      </div>
    </section>
  )
}

export default OrderTracking

