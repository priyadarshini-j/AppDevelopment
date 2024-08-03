import React from 'react';
import '../assets/css/OrderDetail.css';
import ProductCard from '../components/ProductCard';
import DeliveryTracking from "../components/DeliveryTracking"

const orderProduct = [
  {
    id: 1,
    product_name: 'Toy Car',
    color: 'Red',
    price: 340,
    delivery_date: '30/04/2024',
    product_img_url:
      'https://m.media-amazon.com/images/I/61sIkSQM5cL.jpg',
  },
  {
    id: 2,
    product_name: 'Toy Robot',
    color: 'Black Mate',
    price: 899,
    delivery_date: '20/05/2024',
    product_img_url:
      'https://images-cdn.ubuy.co.in/634f3ae1f961a807890b60ec-rc-robot-toy-for-kids-smart-intelligent.jpg',
  },
  {
    id: 3,
    product_name: 'Doll House',
    color: 'Pink',
    price: 160,
    delivery_date: '30/02/2021',
    product_img_url:
      'https://m.media-amazon.com/images/I/71mQmzDUbbL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 4,
    product_name: 'Puzzle Game',
    color: 'Multi',
    price: 549,
    delivery_date: '15/01/2024',
    product_img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KKhiQGhGhQ-bPYgbOfyCVNmrVa8KScoyXroRjSfs88IAJFIseTALod0tWT8hOUzw-MY&usqp=CAU',
  },
  {
    id: 5,
    product_name: 'Lego Set',
    color: 'Various',
    price: 54999,
    delivery_date: '12/12/2023',
    product_img_url:
      'https://hmadmin.hamleys.in/product/493176426/665/493176426-1.jpg',
  },
];

const goToOrderDetailPage = (id, product_name) => {
  console.log(id, product_name);
};

const OrderDetails = () => {
  return (
    <div>
      {orderProduct.map((product, i) => (
        <ProductCard key={product.id} data={product} goToOrderDetailPage={goToOrderDetailPage} />
      ))}

      <div className="order-details">
        <div className="section">
          <div className="delivery-address">
            <h3>Delivery Address</h3>
            <p>PRIYADHARSHINI</p>
            <p>NO.82, NORTH STREET, MARANGIYUR POST</p>
            <p>MARANGIYUR, Thiruvennainallur - 607203, Tamil Nadu</p>
            <p>Phone number: 8220056524, 8148847753</p>
          </div>
          <div className="actions">
            <button className="download-button">Download Invoice</button>
          </div>
        </div>
        <div className="section product-section">
          <div className="product-info">
            <img
              src="https://m.media-amazon.com/images/I/81kZ9ZgdwqL._AC_UF1000,1000_QL80_.jpg"
              alt="Toy Product"
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">Barbie</h2>
              <p className="product-color">Color: Pink</p>
              <p className="product-seller">Seller: Toy Store</p>
              <p className="product-price">
                ₹374 <span className="offers-applied">2 Offers Applied</span>
              </p>
            </div>
          </div>
          <div className="order-status">
            <DeliveryTracking />
            <p>Your item has been delivered</p>
          </div>
          <div className="product-actions">
            <button className="review-button">★ Rate & Review Product</button>
            <button className="chat-button">Chat with us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
