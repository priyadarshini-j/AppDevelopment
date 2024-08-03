import React from 'react';
import '../assets/css/ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <img
          src={props?.data?.product_img_url}
          alt="boAt Bassheads 100 Wired Headset"
          className="product-image"
        />
        <div
          className="product-details"
          onClick={(e) =>
            props.goToOrderDetailPage(
              props?.data?.id,
              props?.data?.product_name
            )
          }
        >
          <h2 className="product-title">{props?.data?.product_name}</h2>
          <p className="product-color">Color: {props?.data?.color}</p>
          <p className="product-price">₹{props?.data?.price}</p>
        </div>
      </div>
      <div className="product-status">
        <p className="delivery-status">
          <span className="delivery-dot"></span> Delivered on{' '}
          {props?.data?.delivery_date}
        </p>
        <p className="delivery-info">Your item has been delivered</p>
        <button className="review-button">★ Rate & Review Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
