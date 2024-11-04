import React from 'react';
import appStoreImg from '../assets/Images/app-store.svg';
import googlePlayImg from '../assets/Images/google-play.svg';
import iphoneMyBudgetImg from '../assets/Images/iphone-my-budget-desktop.svg';
import iphoneYourCardsImg from '../assets/Images/iphone-your-cards-desktop.svg';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        
        <div className="content">
          <p>
            We offer you a new generation of the mobile banking.
            Save, spend & manage money in your pocket.
          </p>
          <div className="buttons">
            <a className="btn-download-app" href="#"><img src={appStoreImg} alt="Appstore" /></a>
            <a className="btn-download-app" href="#"><img src={googlePlayImg} alt="Google Play" /></a>
          </div>
          
          <a className="discover-more" onClick={(e) => e.preventDefault()}>
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>

        </div>

        <div className="images">
          <img className="img-back" src={iphoneMyBudgetImg} alt="iphone my budget" />
          <img className="img-front" src={iphoneYourCardsImg} alt="iphone your cards" />
        </div>
      </div>
    </section>
  );
}

export default Hero;


