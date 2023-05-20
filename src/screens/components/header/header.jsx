import React from 'react';
import './Header.css';
import logo from  '../../../assets/images/shopping-cart.png'

function Header() {

  const redirectToCart = () => {
    window.location.href = "/Cart";
  };

  const redirectToHome = () => {
    window.location.href = "/";
  };

  return (
    <header>
      <div className="company-name" onClick={redirectToHome}>DRONEZETA</div>
      <div className="header-buttons">
        <a href="/products" className="header-button">Produtos</a>
        <a href="/login" className="header-button">Login</a>
        <div className="cart-icon" onClick={redirectToCart}>
          <img src={logo} className="cart-icon" alt="Ícone do Carrinho" />
        </div>
      </div>
    </header>
  );
}

export default Header;