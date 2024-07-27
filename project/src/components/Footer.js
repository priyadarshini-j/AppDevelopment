import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
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
