import React, { useState } from 'react';
import '../assets/css/Login.css';
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });

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
        setError(formErrors);
        console.log(formData);
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>UserName:</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}/>

                {error.email && <p className="error-message">{error.email}</p>}

                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                /><br></br>
                {error.password && <p className="error-message">{error.password}</p>}<br></br>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
