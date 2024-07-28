import React from 'react';
import '../assets/css/AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Toy Shop! We started our journey in 2005 with the aim of bringing joy to children of all ages. Over the years, we have grown into a trusted name for quality toys and games.
        </p>
      </section>
      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a wide variety of toys that inspire creativity and imagination in children. We believe in the power of play and strive to offer products that are both fun and educational.
        </p>
      </section>
      
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading toy shop that sparks imagination and fosters learning in every child. We aim to create a joyful and educational shopping experience for parents and children alike.
        </p>
      </section>
      
      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We ensure the highest quality standards for all our products.</li>
          <li><strong>Safety:</strong> Safety is our top priority in every toy we offer.</li>
          <li><strong>Innovation:</strong> We continually seek innovative products to enrich children's playtime.</li>
          <li><strong>Customer Satisfaction:</strong> We strive to exceed customer expectations in every interaction.</li>
        </ul>
      </section>
      
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://cdn2.vectorstock.com/i/1000x1000/92/71/businesswoman-avatar-cartoon-character-profile-vector-25639271.jpg" alt="John Doe" />
            <h3>Priyadharshini</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://www.shutterstock.com/image-vector/businesswoman-260nw-155754371.jpg" alt="Jane Smith" />
            <h3>Dharshini</h3>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7o9OIyOHP0fG1_Lit_KjTzqYcGkz-HWy52A&s" alt="Emily Johnson" />
            <h3>Ramya</h3>
            <p>Head of Product Development</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
