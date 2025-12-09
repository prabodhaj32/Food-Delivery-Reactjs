import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list
          .filter((item) => cartItem[item._id] > 0) // Filter items in the cart
          .map((item) => (
            <div key={item._id}>

              <div className="cart-item-title cart-item-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItem[item._id]}</p>
                <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>

                <button
                  onClick={() => removeFromCart(item._id)} // Attach remove functionality
                  className="cross"
                >remove</button>

              </div>
              <hr />
            </div>
          ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>

            <div className="cart-total-details">
            <p>Delivery Free</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>

            <div className="cart-total-details">
            <p>Total</p>
            {/* +2 is delivery free */}
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
           </div>
           <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code ,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
