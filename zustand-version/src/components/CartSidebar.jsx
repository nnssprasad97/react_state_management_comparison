import React, { useRef, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartSidebar() {
  const renderCount = useRef(0);
  const items = useAppStore(state => state.cart.items);
  const isOpen = useAppStore(state => state.cart.isOpen);
  const toggleCart = useAppStore(state => state.toggleCart);
  
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={toggleCart} 
      />
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            Your Cart
            <span className="render-counter" data-testid="render-count">
              CartSidebar: {renderCount.current}
            </span>
          </h2>
          <button className="close-btn" onClick={toggleCart}>&times;</button>
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
