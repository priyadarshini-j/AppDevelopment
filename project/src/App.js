import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
