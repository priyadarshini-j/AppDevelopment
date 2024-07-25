import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Navbar.css'; // Assuming custom styles are added here

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <a className="navbar-brand" href="#">Toy Haven</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Brand</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/action">Action</Link>
              <Link className="dropdown-item" to="/another-action">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/something-else">Something else here</Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" width="50"/>
        <button type="submit" class="btn btn-outline-danger">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
