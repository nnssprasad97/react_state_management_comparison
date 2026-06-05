import React, { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductListPage() {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <main className="main-content">
      <h1 style={{ marginBottom: '2rem' }}>
        Featured Products
        <span className="render-counter" data-testid="render-count">
          ProductList: {renderCount.current}
        </span>
      </h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </main>
  );
}
