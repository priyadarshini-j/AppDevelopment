import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact</a></li>
            <li><a href="/privacypolicy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <ul>
            <li>
            <a
                className="social-btn"
                style={{ backgroundColor: 'black',fontSize:'25px',borderRadius:'50%' }}
                href="https://facebook.com"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              </li>
            <li>
            <a
                className="social-btn"
                style={{ backgroundColor: 'black',fontSize:'25px',borderRadius:'50%' }}
                href="https://instagram.com"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              </li>
            <li>
            <a
                className="social-btn"
                style={{ backgroundColor: 'black',fontSize:'25px',borderRadius:'50%' }}
                href="https://twitter.com"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              </li>
            
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: contact@toyhaven.com</p>
          <p>Phone: (91+) 81488-47753</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Toy Store</p>
      </div>
    </footer>
  );
};

export default Footer;
