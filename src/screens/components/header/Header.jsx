import React from 'react';
import './Header.css';
import logo from  '../../../assets/images/shopping-cart.png'
import profileIcon from '../../../assets/images/profile.png';

function Header() {

  const LoggedUser = JSON.parse(localStorage.getItem('user'));

  const redirectToCart = () => {
    window.location.href = "/cart";
  };

  const redirectToHome = () => {
    window.location.href = "/"
  };

  const redirectToProfile = () => {
    window.location.href = "/userProfile"
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <header>
      <div className="company-name" onClick={redirectToHome}>
        DRONEZETA
      </div>
      <div className="header-buttons">
        <a href="/products" className="header-button">
          Produtos
        </a>
        {!LoggedUser && <a href="/login" className="header-button">Login</a>}
        {LoggedUser && (
          <>
            <button onClick={handleLogout} className="header-button">Logout</button>
            <div className="profile-icon" onClick={redirectToProfile}>
              <img src={profileIcon} className="profile-icon" alt="Ícone do Perfil" />
            </div>
          </>
        )}
        <div className="cart-icon" onClick={redirectToCart}>
          <img src={logo} className="cart-icon" alt="Ícone do Carrinho" />
        </div>
      </div>
    </header>
  );
}

export default Header;