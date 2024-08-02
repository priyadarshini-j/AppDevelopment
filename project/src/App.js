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
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import TotalUsers from './components/TotalUsers';
import OrderDetails from './components/OrderDetails';
import BIChart from './components/BIChart';
import FeedbackForm from './components/FeedbackForm';
import AddressPage from './components/AddressPage';


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
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/totalusers" element={<TotalUsers />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/bichart" element={<BIChart />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/addresspage" element={<AddressPage />} />
        
      </Routes>
      
      <Footer />
    </Router>
    </AuthProvider>
  );
};

export default App;
