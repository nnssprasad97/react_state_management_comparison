import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cartSlice';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartSidebar() {
  const renderCount = useRef(0);
  const { items, isOpen } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={() => dispatch(toggleCart())} 
      />
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            Your Cart
            <span className="render-counter" data-testid="render-count">
              CartSidebar: {renderCount.current}
            </span>
          </h2>
          <button className="close-btn" onClick={() => dispatch(toggleCart())}>&times;</button>
        </div>
        
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">Your cart is empty.</div>
          ) : (
            items.map(item => (
              <CartItem key={item.productId} item={item} />
            ))
          )}
        </div>

        {items.length > 0 && <CartSummary />}
      </div>
    </>
  );
}
