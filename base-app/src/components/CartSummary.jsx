import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function CartSummary() {
  const { state } = useContext(AppContext);
  const { items } = state.cart;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart-summary">
      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="btn-primary checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  );
}
