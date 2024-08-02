import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/PaymentPage.css'; 

const PaymentPage = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      cardName === 'priya' &&
      cardNumber === '1234512345' &&
      cardCvv === '123' &&
      expiryDate === '04/2024'
    ) {
        alert('Your Payment successfully Submitted');
        window.location.href="/feedbackform";
    } else {
        alert('Payment failed. Please check your details and try again.');
    }
  };

  return (
    <div className='payment'>
    <div className="payment-container">
        <h2>Payment</h2><br />
        <form id="payment-form" className="payment-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="Enter Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div><br />
          <div className="form-field">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="0000-0000-0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div><br />

          <div className="payment-form-group-field">
            <div className="form-field">
              <label htmlFor="cardCvv">CVV</label>
              <input
                type="password"
                id="cardCvv"
                name="cardCvv"
                placeholder="CVV"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                required
              />
            </div><br />
            <div className="form-field expiry-field">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YYYY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div><br />
          </div>
          <button type="submit" className="btn btn-danger">Pay Now</button>
        </form>
    </div>
    </div>
  );
};

export default PaymentPage;
