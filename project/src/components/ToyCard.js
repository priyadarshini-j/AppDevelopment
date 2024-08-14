

import React, { useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useCart } from '../components/CartContext'; // Adjust the path as necessary
import { useAuth } from '../components/AuthContext'; // Adjust the path as necessary
import { useWishlist } from '../components/WishlistContext'; // Adjust the path as necessary
import '../assets/css/ToyCard.css'; // Ensure the CSS file is correctly placed

const ToyCard = ({ toy, onAddToCart, onAddToWishlist }) => {
  const { isLoggedIn } = useAuth();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const [isInWishlist, setIsInWishlist] = useState(
    wishlistItems.some(item => item.id === toy.id)
  );

  const handleBuyNow = () => {
    if (isLoggedIn) {
      window.location.href = `/addresspage`;
    } else {
      alert('You need to be logged in to buy this item.');
      window.location.href = "/login";
    }
  };

  const handleAddToCart = () => {
    onAddToCart(toy);
    alert('Item added to cart');
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(toy.id);
    } else {
      addToWishlist(toy);
      onAddToWishlist(toy); // Add to parent component wishlist state
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="toy-card">
      <div className="wishlist-icon-container">
        <FaHeart 
          className={`add-to-wishlist-icon ${isInWishlist ? 'in-wishlist' : ''}`} 
          onClick={handleAddToWishlist} 
        />
      </div>
      <img src={toy.imageUrl} alt={toy.productName} className="toy-image" />
      <h3>{toy.productName}</h3>
      <p>{toy.description}</p>
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FaStar key={index} color={index < toy.rating ? "#ffc107" : "#ffc107"} />
        ))}
        <span>{toy.rating}</span>
      </div>
      <p className="price">${toy.productPrice}</p>
      <div className="toy-actions">
        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

ToyCard.propTypes = {
  toy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToWishlist: PropTypes.func.isRequired
};

export default ToyCard;
