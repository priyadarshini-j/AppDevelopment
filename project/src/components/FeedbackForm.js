
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Feedback.css';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    description: '',
  });

  const [error, setError] = useState({
    rating: '',
    description: '',
    general: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError({ ...error, [name]: "", general: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!formData.rating) {
      formErrors.rating = "Please provide a rating.";
    }
    if (!formData.description) {
      formErrors.description = "Please provide a description.";
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/feedback",
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Feedback submitted:', response.data);
      alert('Feedback submitted successfully!');
      navigate("/");
    } catch (err) {
      console.error(err);
      setError({ ...error, general: "An unexpected error occurred. Please try again later." });
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={error.rating ? 'input-error' : ''}
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          {error.rating && <p className="error-message">{error.rating}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={error.description ? 'input-error' : ''}
            placeholder="Write your feedback here..."
          />
          {error.description && <p className="error-message">{error.description}</p>}
        </div>

        {error.general && <p className="error-message">{error.general}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
