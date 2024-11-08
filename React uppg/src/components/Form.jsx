import React from 'react';
import bellLogo from '../assets/Images/bell-logo.svg';
import envelopeIcon from '../assets/Images/envelope.svg';

const Form = () => {
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
            <input className="form-input email" type="email" placeholder="Your Email" />
            <button className="btn-form">Subscribe</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Form;
