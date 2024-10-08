// import React from 'react';
// import { useCart } from '../components/CartContext'; // Adjust the path as necessary
// import '../assets/css/CartPage.css';

// const CartPage = () => {
//   const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

//   const handleBuyNow = () => {
//     window.location.href = '/addresspage'; // Redirect to the address page
//   };

//   return (
//     <div className="page-container">
//       <div className="cart-title">Your Cart</div>
//       <div className="content-wrap">
//         {cartItems.length === 0 ? (
//           <h2>Your Cart is Empty!</h2>
//         ) : (
//           <div>
//             <div className="cart-items">
//               {cartItems.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <img src={item.imageUrl} alt={item.productName} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <p>{item.productName}</p>
//                     <p>${item.productPrice}</p>
//                     <div className="quantity-selector">
//                       <button 
//                         className="quantity-button" 
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       >
//                         -
//                       </button>
//                       <input 
//                         type="text" 
//                         value={item.quantity} 
//                         readOnly 
//                         className="quantity-input"
//                       />
//                       <button 
//                         className="quantity-button" 
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="cart-item-buttons">
//                     <button className="button" onClick={() => removeFromCart(item.id)}>Remove</button>
//                     <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
//           </div>
//         )}
//         <button className="continue-shopping-button" onClick={() => window.location.href = '/categories'}>
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
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const handleBuyNow = () => {
    window.location.href = '/addresspage'; // Redirect to the address page
  };

  return (
    <div className="page-container">
      <div className="cart-title">Your Cart</div>
      <div className="content-wrap">
        {cartItems.length === 0 ? (
          <h2>Your Cart is Empty!</h2>
        ) : (
          <div>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.imageUrl} alt={item.productName} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.productName}</p>
                    <p>Price: ${item.productPrice}</p>
                    <p>Total: ${item.totalPrice.toFixed(2)}</p> {/* Displaying the total price based on quantity */}
                    <div className="quantity-selector">
                      <button 
                        className="quantity-button" 
                        onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)} // Ensure quantity doesn't go below 1
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        value={item.quantity} 
                        readOnly 
                        className="quantity-input"
                      />
                      <button 
                        className="quantity-button" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-buttons">
                    <button className="button" onClick={() => removeFromCart(item.id)}>Remove</button>
                    <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
          </div>
        )}
        <button className="continue-shopping-button" onClick={() => window.location.href = '/categories'}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartPage;
