import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/Navbar.css'; // Assuming custom styles are added here
import Logo from '../assets/images/toysLogo.png';
import UserPanel from './UserPanel';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const Search = `brands`;
    window.location.href = Search;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <div className="header-logo">
        <img src={Logo} />
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/brands">Brand</Link>
          </li>
        </ul>

      </div>
      <nav className='navbar-right'>
        <form className="header-search" onSubmit={handleSearch}>
          <input class="search-input" type="search" placeholder="Search" aria-label="Search" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} width="50" />
          <button type="submit" class="search-btn">Search</button>
        </form>
        <ul>
        <li>
            <Link to="/login">
            
              <FaSignInAlt size={30} className="login-icon" />
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <FaHeart size={30} className="wishlist-icon" />
            </Link>
          </li>
          <li>
            <Link to="/cartpage">
              <FaShoppingCart size={30} className="cart-icon" />
            </Link>
          </li>
          {/* <li style={{}}>Priyadharshini</li> */}
          {/* <li>
            <Link to="/login">
              <FaUserCircle size={30} className="login-icon" />
            </Link>
          </li> */}
          <UserPanel/>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
