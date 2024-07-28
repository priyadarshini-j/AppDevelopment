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
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Categories from './components/Categories';
import { AuthProvider } from './components/AuthContext';
import Brands from './components/Brands';
import PaymentPage from './components/PaymentPage';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cartpage" element={<CartPage/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        
        <Route path="/categories" element={<Categories/>} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
      </Routes>
      
      <Footer />
    </Router>
    </AuthProvider>
  );
};

export default App;
