import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { useAuth } from './AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = {};
    if (formData.email.trim() === "") {
      formErrors.email = "Enter Email";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Enter Password";
    }

    if (Object.keys(formErrors).length === 0) {
      if (formData.email === "priya@gmail.com" && formData.password === "priya123") {
        login();
        navigate('/categories');
      }  else if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
        login();
        navigate('/admin'); // Navigate to admin dashboard
      } else {
        formErrors.general = "Incorrect email or password";
      }
    } 
    setError(formErrors);
    console.log(formData);
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error-message">{error.email}</p>}
          
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br />
          {error.password && <p className="error-message">{error.password}</p>}<br />
          {error.general && <p className="error-message">{error.general}</p>}
          
          <p><a href="/forgot-password">Forgot Password?</a></p>
          <button type="submit">Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="/Register">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

