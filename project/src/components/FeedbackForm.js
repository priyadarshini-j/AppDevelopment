// import React, { useState } from 'react';
// import '../assets/css/Feedback.css';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     rating: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleRating = (rate) => {
//     setFormData({
//       ...formData,
//       rating: rate,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Feedback submitted:', formData);
//     alert('Feedback submitted successfully!');
//     window.location.href="/";
//     // Here you can add the logic to send the feedback to the backend or API
//     setFormData({
//       rating: '',
//       description: '',
//     });
//   };

//   return (
//     <div className="feedback-form-container">
//       <h2>Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="rating">Rating:</label>
//           <div className="rating-stars">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 className={`star ${star <= formData.rating ? 'filled' : ''}`}
//                 onClick={() => handleRating(star)}
//                 style={{ cursor: 'pointer', color: star <= formData.rating ? 'gold' : 'gray' }}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <select
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select a description</option>
//             <option value="Great quality, very satisfied">Great quality, very satisfied</option>
//             <option value="Good value for the price">Good value for the price</option>
//             <option value="Item arrived on time">Item arrived on time</option>
//             <option value="Could be improved">Could be improved</option>
//             <option value="Not as expected">Not as expected</option>
//           </select>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;





import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Feedback.css';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError({ ...error, [name]: "", general: "" });
  };

  const handleRating = (rate) => {
    setFormData({
      ...formData,
      rating: rate,
    });
    setError({ ...error, rating: "", general: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!formData.rating) {
      formErrors.rating = "Please provide a rating.";
    }
    if (!formData.description) {
      formErrors.description = "Please select a description.";
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/feedback", // Replace with your actual API URL
        formData
      );
      console.log('Feedback submitted:', response.data);
      alert('Feedback submitted successfully!');
      window.location.href = "/";
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
          {error.rating && <p className="error-message">{error.rating}</p>}
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
          {error.description && <p className="error-message">{error.description}</p>}
        </div>
        {error.general && <p className="error-message">{error.general}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

