
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/PaymentPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const apiurl = 'http://127.0.0.1:8080/api/payment'; 
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cardCvv: '',
    expiryDate: '',
  });

  const [error, setError] = useState({
    cardName: '',
    cardNumber: '',
    cardCvv: '',
    expiryDate: '',
    general: ''
  });

  const navigate = useNavigate(); 
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login'); 
    }
  }, [token, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: '', general: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};

    if (formData.cardName.trim() === '') {
      formErrors.cardName = 'Enter Name on Card';
    }
    if (formData.cardNumber.trim() === '') {
      formErrors.cardNumber = 'Enter Card Number';
    }
    if (formData.cardCvv.trim() === '') {
      formErrors.cardCvv = 'Enter CVV';
    }
    if (formData.expiryDate.trim() === '') {
      formErrors.expiryDate = 'Enter Expiry Date';
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return; 
    }

    try {
      console.log('Sending data to backend:', formData); // Debugging line

      const response = await axios.post(
        apiurl,
        {
          cardName: formData.cardName,
          cardNumber: formData.cardNumber,
          cardCvv: formData.cardCvv,
          expiryDate: formData.expiryDate,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
          }
        }
      );

      console.log('Backend response:', response.data); // Debugging line

      if (response.status === 201 || response.status === 200) {
        alert('Your payment was successfully submitted');
        navigate('/feedbackform');
      }
    } catch (error) {
      console.error('Payment Submission Error:', error);
      const errorMessage =
        error.response?.status === 401
          ? 'Payment failed. Please check your details and try again.'
          : 'Payment submission failed. Please try again later.';
      setError((prevError) => ({ ...prevError, general: errorMessage }));
    }
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h2>Payment</h2>
        <br />
        <form id="payment-form" className="payment-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="Enter Name"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
            {error.cardName && <p className="error">{error.cardName}</p>}
          </div>
          <br />
          <div className="form-field">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="0000-0000-0000"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            {error.cardNumber && <p className="error">{error.cardNumber}</p>}
          </div>
          <br />
          <div className="payment-form-group-field">
            <div className="form-field">
              <label htmlFor="cardCvv">CVV</label>
              <input
                type="password"
                id="cardCvv"
                name="cardCvv"
                placeholder="CVV"
                value={formData.cardCvv}
                onChange={handleChange}
                required
              />
              {error.cardCvv && <p className="error">{error.cardCvv}</p>}
            </div>
            <br />
            <div className="form-field expiry-field">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YYYY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
              {error.expiryDate && <p className="error">{error.expiryDate}</p>}
            </div>
            <br />
          </div>
          {error.general && <p className="error">{error.general}</p>}
          <button type="submit" className="btn btn-danger">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
