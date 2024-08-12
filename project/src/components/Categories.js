
import React, { useState } from 'react';
import ToyCard from './ToyCard';
import '../assets/css/Categories.css';
import { useAuth } from '../components/AuthContext'; // Adjust the path as necessary
import { useCart } from '../components/CartContext'; // Adjust the path as necessary

const toys = [
  {
    id: 1,
    name: 'Toy Car',
    description: 'A fast and furious toy car.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefNv0Dik6bgT-vuW5d6C0JEnZuxeWskMx3g&s',
    rating: 4,
    price: 100
  },
  {
    id: 2,
    name: 'Doll House',
    description: 'A beautiful doll house.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3uKUiZPa6WO8avkTuGax_Anh__uMz1wbpQ&s',
    rating: 5,
    price: 29.99
  },
  {
    id: 3,
    name: 'Action Figure',
    description: 'A cool action figure.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfO-CRr10yY7fg1BO5yJbOYC4Urd44EWQykQ&s',
    rating: 3,
    price: 14.99
  },
  {
    id: 4,
    name: 'Puzzle',
    description: 'A challenging puzzle game.',
    image: 'https://m.media-amazon.com/images/I/61FBfxXv+5L._AC_UF1000,1000_QL80_.jpg',
    rating: 4,
    price: 19.99
  },
  {
    id: 5,
    name: 'Board Game',
    description: 'A fun family board game.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHKnm7Fsr4g27XXpW7_OqV1ZsxvNeqXjsYQ&s',
    rating: 5,
    price: 24.99
  },
  {
    id: 6,
    name: 'Stuffed Animal',
    description: 'A soft and cuddly stuffed animal.',
    image: 'https://m.media-amazon.com/images/I/71eXKNFDjoL.jpg',
    rating: 4,
    price: 9.99
  },
  {
    id: 7,
    name: 'Lego Set',
    description: 'A creative Lego set.',
    image: 'https://m.media-amazon.com/images/I/91fLD7uWcaL._AC_UF1000,1000_QL80_.jpg',
    rating: 5,
    price: 49.99
  },
  {
    id: 8,
    name: 'Teddy Bear',
    description: 'A classic teddy bear.',
    image: 'https://images.meesho.com/images/products/20785957/d72ed_512.jpg',
    rating: 5,
    price: 19.99
  },
];

const Categories = () => {
  const { isLoggedIn } = useAuth(); // Get isLoggedIn from AuthContext
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (toy) => {
    setWishlist([...wishlist, toy]);
    alert(`Added ${toy.name} to wishlist!`);
  };
   
  return (
    <div className="category-page">
      {toys.map(toy => (
        <ToyCard 
          key={toy.id} 
          toy={toy} 
          isLoggedIn={isLoggedIn}
          onAddToCart={addToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      ))}
    </div>
  );
};

export default Categories;


