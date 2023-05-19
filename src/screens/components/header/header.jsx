import React, { useState } from 'react';
import './Header.css';
import logo from  '../../../assets/images/shopping-cart.png'

//fazer função par verificas se o usuário é admin e habilitar menu de cadastro de produtos

function Header() {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header>
    <div className="company-name">DRONEZETA</div>
    <div className="header-buttons">
      <a href="#" className="header-button">Produtos</a>
      <a href="#" className="header-button">Mais Vendidos</a>
      <a href="#" className="header-button">Login</a>
      <div className="cart-icon" onClick={toggleCart}>
        <img src={logo} className="cart-icon" alt="Ícone do Carrinho" />
      </div>
    </div>
    {showCart && (
      <div className="cart-items">
        <ul>
          {/* Itens do carrinho */}
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    )}
    </header>
  );
}

export default Header;
