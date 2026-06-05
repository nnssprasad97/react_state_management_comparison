import React from 'react';
import { AppProvider } from './context/AppContext';
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
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
