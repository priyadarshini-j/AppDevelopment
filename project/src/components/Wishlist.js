import React from 'react';
import { useWishlist } from '../components/WishlistContext'; // Adjust the path as necessary
import '../assets/css/Wishlist.css'; // Adjust the path as necessary

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  const handleBuyNow = () => {
    window.location.href = '/addresspage'; // Redirect to the address page
  };

  return (
    <div className="page-container">
      <div className="wishlist-title">Your Wishlist</div>
      <div className="content-wrap">
        {wishlistItems.length === 0 ? (
          <h2>Your Wishlist is Empty!</h2>
        ) : (
          <div>
            <div className="wishlist-items">
              {wishlistItems.map((item, index) => (
                <div key={index} className="wishlist-item">
                  <img src={item.image} alt={item.name} className="wishlist-item-image" />
                  <div className="wishlist-item-details">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="wishlist-item-buttons">
                    <button className="button" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                    <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="clear-wishlist-button" onClick={clearWishlist}>Clear Wishlist</button>
          </div>
        )}
        <button className="continue-shopping-button" onClick={() => window.location.href = '/categories'}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
