import React from 'react';
import learnMoreButton from '../assets/Images/learn-more-btn.svg';
import squareGraph from '../assets/Images/square-graph.svg';

const MoneyTransfer = () => {
  return (
    <section className="money-transfer">
      <div className="container">
        <div className="simple-transfer">
          
          <div className="simple-transfer-text">
            <h2>Make your money<br />transfer simple and clear</h2>
            
            <div className="checkmark-text">
              <i className="fa-sharp fa-solid fa-circle-check"></i>
              <p>Banking transactions are free for you</p>
            </div>

            <div className="checkmark-text">
              <i className="fa-sharp fa-solid fa-circle-check"></i>
              <p>No monthly cash commission</p>
            </div>

            <div className="checkmark-text">
              <i className="fa-sharp fa-solid fa-circle-check"></i>
              <p>Manage payments and transactions online</p>
            </div>

            <div className="simple-btn">
              <img src={learnMoreButton} alt="Learn more" />
            </div>        
            
          </div>

          <div className="square-graph">
            <img src={squareGraph} alt="Square graph" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default MoneyTransfer;
