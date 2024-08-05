import React, { useState } from 'react';
import '../assets/css/ContactUs.css'; // Ensure you have this CSS file for styling

const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   usr: '',
  //   mail: '',
  //   phone: '',
  //   address: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { usr, mail, address } = formData;
  //   if (usr === "priya" && mail === "priya@gmail.com" && address === "villupuram") {
  //     alert(`Thank you for contacting us, ${usr}! We will get back to you soon.`);
  //     setFormData({
  //       usr: '',
  //       mail: '',
  //       phone: '',
  //       address: '',
  //       message: ''
  //     });
  //   } else {
  //     alert('Please fill out all fields correctly.');
  //   }
  // };

  return (
    <div>
      <main>
        <section className="contact-info">
          <h2>Our Contact Information</h2>
          <p>Email: info@toyshop.com</p>
          <p>Phone: +91 81488-47753</p>
          <p>Address: 143 Main St, Chennai, India</p>
        </section>
        {/* <section className="contact-form">
          <h2>Contact Information</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="usr">UserName:</label>
            <input 
              type="text" 
              name="usr" 
              id="usr" 
              placeholder="Enter the username" 
              value={formData.usr}
              onChange={handleChange}
              required 
              autoFocus 
            />
            <label htmlFor="mail">Email ID:</label>
            <input 
              type="email" 
              name="mail" 
              id="mail" 
              placeholder="Enter the mail id" 
              value={formData.mail}
              onChange={handleChange}
              required 
            />
            <label htmlFor="phone">Phone No:</label>
            <input 
              type="text" 
              name="phone" 
              id="phone" 
              placeholder="Enter the Number" 
              value={formData.phone}
              onChange={handleChange}
              maxLength="10" 
              required 
            />
            <label htmlFor="address">Address:</label>
            <input 
              type="text" 
              name="address" 
              id="address" 
              placeholder="Enter correct Address" 
              value={formData.address}
              onChange={handleChange}
              required 
            />
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </section> */}
      </main>
    </div>
  );
};

export default ContactUs;
