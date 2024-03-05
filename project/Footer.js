import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing with:', e.target.email.value);
    // Clear input field
    e.target.email.value = '';
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div>Binnimills, Babu circle, Hyderrabad</div>
          <div>Phone: +91 9304303443</div>
          <div>Email: kingdeepak010@example.com</div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Subscribe to our newsletter</h3>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input type="email" name="email" placeholder="Your email" required className="subscribe-input" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Our Story</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#" className="footer-link">Job Openings</a></li>
            <li><a href="#" className="footer-link">Internships</a></li>
            <li><a href="#" className="footer-link">Campus Placements</a></li>
            {/* Add more links here */}
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/kingdeepak010/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">&copy; 2023 Your Company Name. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
