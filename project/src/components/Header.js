import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
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
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/login">
              <FaUserCircle size={30} className="login-icon" /> {/* Login icon with link */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
