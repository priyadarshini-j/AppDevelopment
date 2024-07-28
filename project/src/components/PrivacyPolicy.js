import React from 'react';
import '../assets/css/PrivacyPolicy.css'; // Ensure you have this CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <section className="policy-section">
        <h2>Introduction</h2>
        <p>
          Welcome to Toy Shop. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@toyshop.com.
        </p>
      </section>
      <section className="policy-section">
        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
        </p>
        <ul>
          <li>Personal Information: Name, email address, contact information.</li>
          <li>Payment Data: Payment instrument details (e.g., credit card number).</li>
          <li>Other Information: Preferences and interests, order history.</li>
        </ul>
      </section>
      <section className="policy-section">
        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and the login process.</li>
          <li>To manage user accounts.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To respond to user inquiries/offer support to users.</li>
          <li>To send administrative information to you.</li>
        </ul>
      </section>
      <section className="policy-section">
        <h2>Sharing Your Information</h2>
        <p>
          We may process or share data based on the following legal basis:
        </p>
        <ul>
          <li>Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
          <li>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
          <li>Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
        </ul>
      </section>
      <section className="policy-section">
        <h2>Your Privacy Rights</h2>
        <p>
          In some regions, such as the European Economic Area (EEA), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
