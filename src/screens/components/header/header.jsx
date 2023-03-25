import React from 'react';
import './Header.css';


function Header() {
  return (
    <header>
      <div className="topbar">
          <a href="#" className="logo">Dronezeta</a>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
    </header>
  );
}

export default Header;
