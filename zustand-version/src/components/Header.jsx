import React, { useRef, useEffect } from 'react';
import UserInfo from './UserInfo';
import CartItemCount from './CartItemCount';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">TechShop</div>
        <span className="render-counter" data-testid="render-count">
          Header: {renderCount.current}
        </span>
      </div>
      <div className="header-right">
        <UserInfo />
        <ThemeSwitcher />
        <CartItemCount />
      </div>
    </header>
  );
}
