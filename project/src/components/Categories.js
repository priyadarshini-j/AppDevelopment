
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToyCard from './ToyCard'; // Adjust the path if necessary
import { useAuth } from '../components/AuthContext'; // Adjust the path as necessary
import { useCart } from '../components/CartContext'; // Adjust the path as necessary
import '../assets/css/Categories.css'; // Ensure the CSS file is correctly placed

const Categories = () => {
  const [toys, setToys] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { isLoggedIn } = useAuth(); // Get isLoggedIn from AuthContext
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://127.0.0.1:8080/api/products', config);
        setToys(response.data); // Ensure the data structure matches your expectations
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToWishlist = (toy) => {
    setWishlist([...wishlist, toy]);
    alert(`Added ${toy.productName} to wishlist!`);
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
