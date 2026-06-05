import { create } from 'zustand';

export const useAppStore = create((set) => ({
  cart: {
    items: [],
    isOpen: false,
  },
  user: {
    name: 'Jane Doe',
    isLoggedIn: true,
  },
  ui: {
    theme: 'light',
    notification: null,
  },
  
  // Actions
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.items.find(item => item.productId === product.productId);
    if (existingItem) {
      return {
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      };
    }
    return {
      cart: {
        ...state.cart,
        items: [...state.cart.items, { ...product, quantity: 1 }],
      }
    };
  }),
  
  removeFromCart: (productId) => set((state) => ({
    cart: {
      ...state.cart,
      items: state.cart.items.filter(item => item.productId !== productId),
    }
  })),
  
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: {
      ...state.cart,
      items: state.cart.items.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      ),
    }
  })),
  
  toggleCart: () => set((state) => ({
    cart: {
      ...state.cart,
      isOpen: !state.cart.isOpen,
    }
  })),
  
  setTheme: (theme) => set((state) => ({
    ui: {
      ...state.ui,
      theme,
    }
  })),
  
  showNotification: (message, type = 'success') => set((state) => ({
    ui: {
      ...state.ui,
      notification: { message, type },
    }
  })),
  
  hideNotification: () => set((state) => ({
    ui: {
      ...state.ui,
      notification: null,
    }
  })),
}));
