import React, { useRef, useEffect, useContext } from 'react';
import { AppContext, removeFromCart, updateQuantity } from '../context/AppContext';

export default function CartItem({ item }) {
  const renderCount = useRef(0);
  const { dispatch } = useContext(AppContext);
  
  useEffect(() => {
    renderCount.current += 1;
  });

  const handleIncrement = () => {
    dispatch(updateQuantity(item.productId, item.quantity + 1));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item.productId, item.quantity - 1));
    } else {
      dispatch(removeFromCart(item.productId));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.productId));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.name}</h4>
        <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button className="qty-btn" onClick={handleDecrement}>-</button>
            <span className="qty-value">{item.quantity}</span>
            <button className="qty-btn" onClick={handleIncrement}>+</button>
          </div>
          <button className="remove-btn" onClick={handleRemove}>Remove</button>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="render-counter" data-testid="render-count">
            CartItem: {renderCount.current}
          </span>
        </div>
      </div>
    </div>
  );
}
