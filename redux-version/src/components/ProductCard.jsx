import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductCard({ product }) {
  const renderCount = useRef(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    renderCount.current += 1;
  });

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <span className="render-counter" data-testid="render-count">
            ProductCard: {renderCount.current}
          </span>
        </div>
      </div>
    </div>
  );
}
