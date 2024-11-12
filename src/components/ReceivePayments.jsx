import React from 'react';
import squareVisaCard from '../assets/Images/square-visa-card.svg';
import cardIcon from '../assets/Images/card-icon.svg';
import walletIcon from '../assets/Images/wallet-icon.svg';
import learnMoreButton from '../assets/Images/learn-more-btn.svg';

const ReceivePayments = () => {
  return (
    <section className="receive-payments">
      <div className="container">
        <div className="transfer-payments">

          <div className="square-visa-card">
            <img src={squareVisaCard} alt="Visa Card" />
          </div>

          <div className="receive-text">
            <h2>Receive payment from<br />international bank details</h2>

            <div className="receiver">
              <div>
                <img src={cardIcon} alt="Card Icon" />
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
              <div>
                <img src={walletIcon} alt="Wallet Icon" />
                <p>MA elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div> 
            </div>

            <div className="simple-btn">
              <img src={learnMoreButton} alt="Learn more" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ReceivePayments;
