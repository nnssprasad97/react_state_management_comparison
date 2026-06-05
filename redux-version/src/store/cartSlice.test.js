import { describe, it, expect } from 'vitest';
import cartReducer, { addToCart, removeFromCart, updateQuantity } from './cartSlice';

describe('cartSlice reducer', () => {
  const initialState = {
    items: [],
    isOpen: false,
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addToCart with new item', () => {
    const product = { productId: 'p1', name: 'Product 1', price: 100 };
    const actual = cartReducer(initialState, addToCart(product));
    
    expect(actual.items.length).toEqual(1);
    expect(actual.items[0]).toEqual({ ...product, quantity: 1 });
  });

  it('should handle addToCart with existing item (increment quantity)', () => {
    const stateWithItem = {
      items: [{ productId: 'p1', name: 'Product 1', price: 100, quantity: 1 }],
      isOpen: false,
    };
    const actual = cartReducer(stateWithItem, addToCart({ productId: 'p1' }));
    
    expect(actual.items.length).toEqual(1);
    expect(actual.items[0].quantity).toEqual(2);
  });

  it('should handle updateQuantity', () => {
    const stateWithItem = {
      items: [{ productId: 'p1', name: 'Product 1', price: 100, quantity: 2 }],
      isOpen: false,
    };
    const actual = cartReducer(stateWithItem, updateQuantity({ productId: 'p1', quantity: 5 }));
    
    expect(actual.items[0].quantity).toEqual(5);
  });

  it('should handle removeFromCart', () => {
    const stateWithItem = {
      items: [{ productId: 'p1', name: 'Product 1', price: 100, quantity: 1 }],
      isOpen: false,
    };
    const actual = cartReducer(stateWithItem, removeFromCart('p1'));
    
    expect(actual.items.length).toEqual(0);
  });
});
