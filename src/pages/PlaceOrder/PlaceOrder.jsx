import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const PlaceOrder = () => {
  const { getTotalCartAmount, food_list, cartItem } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : 2;
  const total = subtotal === 0 ? 0 : subtotal + delivery;

  const recommendedItems = food_list.slice(0, 4);

  return (
    <div className="checkout-page">
      <div className="checkout-grid">
        <div className="checkout-left">
          <section className="address-section">
            <div className="section-header">
              <h2>Delivery address</h2>
              <button type="button" className="save-btn">Save address</button>
            </div>
            <div className="address-form">
              <div className="form-row">
                <input type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
              </div>
              <input type="email" placeholder="Email address" required />
              <input type="tel" placeholder="Phone number" required />
              <input type="text" placeholder="Street address" required />
              <div className="form-row">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Zip code" required />
                <input type="text" placeholder="Country" required />
              </div>
            </div>
          </section>

          <section className="payment-section">
            <h2>Payment method</h2>
            <div className="payment-options">
              <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="payment-info">
                  <span className="payment-icon">💳</span>
                  <div>
                    <strong>Card</strong>
                    <p>Credit or debit card</p>
                  </div>
                </div>
              </label>

              <label className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="payment-info">
                  <span className="payment-icon">📱</span>
                  <div>
                    <strong>UPI</strong>
                    <p>Pay via UPI apps</p>
                  </div>
                </div>
              </label>

              <label className={`payment-option ${paymentMethod === 'cash' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <div className="payment-info">
                  <span className="payment-icon">💵</span>
                  <div>
                    <strong>Cash on delivery</strong>
                    <p>Pay when you receive</p>
                  </div>
                </div>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="card-details">
                <input type="text" placeholder="Card number" maxLength="19" />
                <div className="form-row">
                  <input type="text" placeholder="MM/YY" maxLength="5" />
                  <input type="text" placeholder="CVV" maxLength="3" />
                </div>
                <input type="text" placeholder="Cardholder name" />
              </div>
            )}
          </section>
        </div>

        <aside className="checkout-right">
          <div className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-items">
              {food_list
                .filter((item) => cartItem[item._id] > 0)
                .map((item) => (
                  <div key={item._id} className="summary-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <span>Qty: {cartItem[item._id]}</span>
                    </div>
                    <strong>${(item.price * cartItem[item._id]).toFixed(2)}</strong>
                  </div>
                ))}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Delivery fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="total-row final">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <button className="place-order-btn" type="submit">
              Place order
            </button>
          </div>
        </aside>
      </div>

      <section className="recommended-section">
        <div className="section-header">
          <h2>Recommended for you</h2>
          <p className="subtext">Add more items to your order</p>
        </div>
        <div className="recommended-carousel">
          {recommendedItems.map((item) => (
            <div key={item._id} className="recommended-card">
              <img src={item.image} alt={item.name} />
              <div className="recommended-info">
                <h4>{item.name}</h4>
                <p className="recommended-price">${item.price.toFixed(2)}</p>
                <button type="button" className="add-recommended">Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlaceOrder;
