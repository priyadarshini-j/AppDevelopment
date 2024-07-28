import React from 'react';
import '../assets/css/Brands.css';
import { useAuth } from '../components/AuthContext';

const brands = [
  {
    id: 1,
    name: 'Lego',
    image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1672221228200px_x_200px_02-01.webp',
  },
  {
    id: 2,
    name: 'Barbie',
    image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/16923426373.webp',
  },
  {
    id: 3,
    name: 'Play Shifu',
    image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1672893854PlayShifu-Product-thumbnail-256x256.webp',
  },
  {
    id: 4,
    name: 'Play-Doh',
    image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1672893059256x256_PD.webp',
  },
  {
    id: 5,
    name: 'Nerf',
    image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1672221952256x256_Nerf_2.webp',
  },
  {
    id: 6,
    name: 'Shooting Star',
    image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/16600473767.webp',
  },
  {
    id: 7,
    name: 'Emotorad',
    image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/1718861864Shop_by_brand_1.webp',
  },
  // Add more brands as needed
];
const extraCards = [
    {
      id: 1,
      name: 'New Pony',
      image: 'https://m.media-amazon.com/images/I/71526DKIqCL.jpg',
      rating: 4.0,
      price: 100
    },
    {
      id: 2,
      name: 'Mini Motsu',
      image: 'https://m.media-amazon.com/images/I/51yyZxO537L._AC_UF1000,1000_QL80_.jpg',
      rating: 4.3,
      price: 200
    },
    {
      id: 3,
      name: 'Barbie Doll',
      image: 'https://m.media-amazon.com/images/I/71lXLbsZ6rL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.2,
      price: 240
    },
  ];
  
  const Brands = () => {
    const { isLoggedIn } = useAuth(); // Get isLoggedIn from AuthContext
  
    const handleBuyNow = (brandName) => {
      if (isLoggedIn) {
        alert(`Proceeding to buy ${brandName}`);
        window.location.href="/paymentpage";
        // Redirect to buy now page or add your buy now logic here
      } else {
        alert('Please log in to buy this item.');
        window.location.href="/login";
      }
    };
  return (
    <div className="brands-page">
      <h1>Shop by Brand</h1>
      <div className="brands-container">
        {brands.map(brand => (
          <div key={brand.id} className="brand-card">
            <img src={brand.image} alt={brand.name} className="brand-image" />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
      <div className="extra-cards">
        <h2>New Collection</h2>
        <div className="extra-cards-container">
          {extraCards.map(card => (
            <div key={card.id} className="extra-card">
              <img src={card.image} alt={card.name} className="extra-card-image" />
              <h3>{card.name}</h3>
              <p>Rating: {card.rating} ★</p>
              <p>Price: ${card.price.toFixed(2)}</p>
              <button onClick={() => handleBuyNow(card.name)} className="buy-now-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

