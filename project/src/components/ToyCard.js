
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ToyCard = ({ toy, isLoggedIn }) => {
  const handleBuyNow = () => {
    if (isLoggedIn) {
      // Redirect to buy now page or perform buy now action
      window.location.href = `/paymentpage`;
    } else {
      alert('You need to be logged in to buy this item.');
      window.location.href="/login";
    }
  };

  return (
    <div className="toy-card">
      <img src={toy.image} alt={toy.name} className="toy-image" />
      <h3>{toy.name}</h3>
      <p>{toy.description}</p>
      <div className="rating">
        {[...Array(5)].map((star, index) => (
          <FaStar key={index} color={index < toy.rating ? "#ffc107" : "#e4e5e9"} />
        ))}
        <span>{toy.rating}</span>
      </div>
      <p className="price">${toy.price}</p>
      <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default ToyCard;
