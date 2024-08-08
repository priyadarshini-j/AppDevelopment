import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Register.css';
import axios from 'axios';
function Register() {
  const apiurl="http://127.0.0.1:8080/api/users/createUser"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate=useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formErrors = {};

    if (formData.name.trim() === "") {
      formErrors.name = "Enter Name";
    }
    if (formData.email.trim() === "") {
      formErrors.email = "Enter Email";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Enter Password";
    }

    if (formData.confirmPassword.trim() === "") {
      formErrors.confirmPassword = "Confirm Password";
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    setError(formErrors);
    console.log(formData);
    const newData=await axios
    .post("http://127.0.0.1:8080/api/users/createUser",{
      uid: 0,
      name:formData.name,
      email:formData.email,
      password:formData.password,
      roles:"USER",

    })
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.error(error);
    });
    if(!newData)
    {
      alert("successfully");
    }
    else{
      alert("login Successfully");
      navigate("/login");
    }
  };

  return (
    <div className="register">
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
  
        />
        {error.name && <p className="error">{error.name}</p>}<br></br><br></br>
        
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p className="error">{error.email}</p>}<br></br><br></br>
        
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && <p className="error">{error.password}</p>}<br></br><br></br>
        
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error.confirmPassword && <p className="error">{error.confirmPassword}</p>}<br></br><br></br>
        
        <button type="submit">Register</button>
      </form>
      <div className="login-link">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    </div>
    </div>
  );
}

export default Register;
