import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <section className="cart">
      <div className="cart-item glass-surface">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list
          .filter((item) => cartItem[item._id] > 0)
          .map((item) => (
            <div key={item._id}>
              <div className="cart-item-title cart-item-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p className="qty-chip">{cartItem[item._id]}</p>
                <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="cross"
                  type="button"
                >
                  Remove
                </button>
              </div>
              <hr />
            </div>
          ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-total glass-surface">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>

            <div className="cart-total-details total">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
           </div>
           <button onClick={()=>navigate('/order')} type="button">Proceed to checkout</button>
        </div>
        <div className="cart-promocode glass-surface">
          <div>
            <p className="eyebrow">Promo</p>
            <h3>Have a promo code?</h3>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter promo code'/>
              <button type="button">Submit</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

