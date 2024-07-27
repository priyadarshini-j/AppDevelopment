import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import CartPage from './components/CartPage';
import Wishlist from './components/Wishlist';
// import Categories from './components/Categories';

const App = () => {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cartpage" element={<CartPage/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        {/* <Route path="/categories" element={<Categories/>} /> */}
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
