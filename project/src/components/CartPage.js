// import React, { useState } from 'react';
// import '../assets/css/CartPage.css';

// const CartPage = () => {
//   const [hover, setHover] = useState(false);

//   const buttonStyle = {
//     backgroundColor: hover ? ' #e46081' : 'white',
//     color: hover ? 'black' : 'black',
//     border: 'solid',
//     padding: '10px 20px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   };

//   const styles = {
//     heading: {
//       fontSize: '24px',
//       marginBottom: '20px',
//     },
//   };

//   return (
//     <div className="page-container">
//       <div className="cart-title">Your Cart</div>
//       <div className="content-wrap">
//         <h2 style={styles.heading}>Your Cart is Empty!</h2>
//         <button
//           style={buttonStyle}
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//           onClick={() => window.location.href = '/categories'}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React from 'react';
import { useCart } from '../components/CartContext'; // Adjust the path as necessary
import '../assets/css/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="page-container">
      <div className="cart-title">Your Cart</div>
      <div className="content-wrap">
        {cartItems.length === 0 ? (
          <h2>Your Cart is Empty!</h2>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        )}
        <button onClick={() => window.location.href = '/categories'}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;
