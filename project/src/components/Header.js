import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHeart, FaShoppingCart } from 'react-icons/fa';
import '../assets/css/Header.css';
import Logo from '../assets/images/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo}  />
      </div>
      <h1>Toys Haven</h1>
      <nav>
        <ul>
        <li>
            <Link to="/wishlist">
              <FaHeart size={30} className="wishlist-icon" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart size={30} className="cart-icon" />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FaUserCircle size={30} className="login-icon" /> 
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
