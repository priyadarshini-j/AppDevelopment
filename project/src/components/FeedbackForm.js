import React, { useState } from 'react';
import '../assets/css/Feedback.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRating = (rate) => {
    setFormData({
      ...formData,
      rating: rate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    alert('Feedback submitted successfully!');
    window.location.href="/";
    // Here you can add the logic to send the feedback to the backend or API
    setFormData({
      rating: '',
      description: '',
    });
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= formData.rating ? 'filled' : ''}`}
                onClick={() => handleRating(star)}
                style={{ cursor: 'pointer', color: star <= formData.rating ? 'gold' : 'gray' }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <select
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          >
            <option value="">Select a description</option>
            <option value="Great quality, very satisfied">Great quality, very satisfied</option>
            <option value="Good value for the price">Good value for the price</option>
            <option value="Item arrived on time">Item arrived on time</option>
            <option value="Could be improved">Could be improved</option>
            <option value="Not as expected">Not as expected</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
