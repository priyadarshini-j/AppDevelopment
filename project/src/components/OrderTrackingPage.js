import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import '../assets/css/OrderTrackingPage.css'; // Ensure this path is correct

const mockOrders = [
  {
    OrderID: '12345',
    OrderStatus: 'Shipped',
    TrackingNumber: 'ABC123456789',
    EstimatedDeliveryDate: '2024-08-10',
    ShippingDetails: '123 Toy Lane, Toy City, Toyland',
    Products: [
      { ProductID: '1', ProductName: 'Toy Car', Quantity: 2, Price: 20, Image: '/path/to/toy-car.jpg' },
      { ProductID: '2', ProductName: 'Toy Robot', Quantity: 1, Price: 35, Image: '/path/to/toy-robot.jpg' },
    ],
  },
  {
    OrderID: '67890',
    OrderStatus: 'Delivered',
    TrackingNumber: 'XYZ987654321',
    EstimatedDeliveryDate: '2024-07-30',
    ShippingDetails: '456 Doll Street, Doll City, Dollland',
    Products: [
      { ProductID: '3', ProductName: 'Doll House', Quantity: 1, Price: 50, Image: '/path/to/doll-house.jpg' },
    ],
  },
];

const OrderTrackingPage = () => {
  const [orders, setOrders] = useState([]);
  const { isLoggedIn, login, logout } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      setOrders(mockOrders);
    }
  }, [isLoggedIn]);

  return (
    <div className="order-tracking-page">
      <h1>Track Your Orders</h1>
      {!isLoggedIn ? (
        <>
          <p>Please log in to view your orders.</p>
          <button onClick={login}>Log In</button>
        </>
      ) : (
        <>
          <button onClick={logout}>Log Out</button>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <ul>
              {orders.map((order) => (
                <li key={order.OrderID}>
                  <h2>Order #{order.OrderID}</h2>
                  <p>Status: {order.OrderStatus}</p>
                  <p>Tracking Number: {order.TrackingNumber}</p>
                  <p>Estimated Delivery: {order.EstimatedDeliveryDate}</p>
                  <h3>Shipping Details</h3>
                  <p>{order.ShippingDetails}</p>
                  <h3>Products</h3>
                  <ul>
                    {order.Products.map((product) => (
                      <li key={product.ProductID}>
                        <img src={product.Image} alt={product.ProductName} className="product-image" />
                        <p>{product.ProductName}</p>
                        <p>Quantity: {product.Quantity}</p>
                        <p>Price: ${product.Price}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default OrderTrackingPage;
