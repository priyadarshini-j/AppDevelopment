import React, { useState } from 'react';
import '../assets/css/CartPage.css';

const CartPage = () => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? ' #e46081' : 'white',
    color: hover ? 'black' : 'black',
    border: 'solid',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const styles = {
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
  };

  return (
    <div className="page-container">
      <div className="cart-title">Your Cart</div>
      <div className="content-wrap">
        <h2 style={styles.heading}>Your Cart is Empty!</h2>
        <button
          style={buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => window.location.href = '/categories'}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;