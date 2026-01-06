import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  const inCart = cartItem[id];

  return (
    <article className="food-item">
      <div className="food-item-img-container">
        <div className="img-frame">
          <img className="food-item-image" src={image} alt={name} />
        </div>
        <div className="img-badge">Top pick</div>
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="food-item-desc">{description}</p>

        <div className="food-item-footer">
          <span className="food-item-price">${price}</span>

          {inCart ? (
            <div className="qty-control">
              <button type="button" onClick={() => removeFromCart(id)} aria-label="Remove one">-</button>
              <span>{inCart}</span>
              <button type="button" onClick={() => addToCart(id)} aria-label="Add one">+</button>
            </div>
          ) : (
            <button className="add-btn" type="button" onClick={() => addToCart(id)}>
              <img src={assets.add_icon_green} alt="" />
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default FoodItem;
