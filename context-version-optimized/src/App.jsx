import React from 'react';
import { CartProvider, UserProvider, UIProvider } from './context/SplitContexts';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';
import CartSidebar from './components/CartSidebar';
import './index.css';

function AppContent() {
  return (
    <div className="app-container">
      <Header />
      <ProductListPage />
      <CartSidebar />
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <UIProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </UIProvider>
    </UserProvider>
  );
}

export default App;
