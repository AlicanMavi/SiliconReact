import React, { useState } from 'react';
import bellLogo from '../assets/Images/bell-logo.svg';
import envelopeIcon from '../assets/Images/envelope.svg';

const Form = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  
  const handleSubscribeClick = () => {
    if (validateEmail(email)) {
      setIsSubscribed(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid email address');
    }
  };

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const handleClosePopup = () => {
    setIsSubscribed(false);
  };

  return (
    <section className="form">
      <div className="container">
        <div className="form-with-bell">

          <div className="subscribe">
            <img src={bellLogo} alt="Bell Logo" />
            <h4>Subscribe to our newsletter to stay<br />informed about latest updates</h4>
          </div>

          <div className="input-group">
            <img src={envelopeIcon} alt="Envelope Icon" />
            <input
              className="form-input email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="btn-form" onClick={handleSubscribeClick}>Subscribe</button>
          </div>

          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
      </div>

      {isSubscribed && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>&times;</span>
            <h2>Thank you for subscribing!</h2>
            <p>You are now subscribed to our newsletter.</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Form;
