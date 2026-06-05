import React, { createContext, useReducer, useContext } from 'react';

// Initial state matching the exact shape required
const initialState = {
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
};

// Action types
const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  TOGGLE_CART: 'TOGGLE_CART',
  SET_THEME: 'SET_THEME',
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existingItem = state.cart.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.map(item =>
              item.productId === action.payload.productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          },
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, { ...action.payload, quantity: 1 }],
        },
      };
    }
    case ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(item => item.productId !== action.payload),
        },
      };
    }
    case ACTIONS.UPDATE_QUANTITY: {
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.productId === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        },
      };
    }
    case ACTIONS.TOGGLE_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          isOpen: !state.cart.isOpen,
        },
      };
    }
    case ACTIONS.SET_THEME: {
      return {
        ...state,
        ui: {
          ...state.ui,
          theme: action.payload,
        },
      };
    }
    case ACTIONS.SHOW_NOTIFICATION: {
      return {
        ...state,
        ui: {
          ...state.ui,
          notification: action.payload,
        },
      };
    }
    case ACTIONS.HIDE_NOTIFICATION: {
      return {
        ...state,
        ui: {
          ...state.ui,
          notification: null,
        },
      };
    }
    default:
      return state;
  }
}

// Create Context
export const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Auto-hide notification logic could go here or in a component

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Action Creators helpers (optional but good practice)
export const addToCart = (product) => ({ type: ACTIONS.ADD_TO_CART, payload: product });
export const removeFromCart = (productId) => ({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });
export const updateQuantity = (productId, quantity) => ({ type: ACTIONS.UPDATE_QUANTITY, payload: { productId, quantity } });
export const toggleCart = () => ({ type: ACTIONS.TOGGLE_CART });
export const setTheme = (theme) => ({ type: ACTIONS.SET_THEME, payload: theme });
export const showNotification = (message, type = 'success') => ({ type: ACTIONS.SHOW_NOTIFICATION, payload: { message, type } });
export const hideNotification = () => ({ type: ACTIONS.HIDE_NOTIFICATION });
