import React from 'react';
import iphoneVisaImg from '../assets/Images/iphone-visa-3d.svg';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="app-feature">
          <div>
            <img src={iphoneVisaImg} alt="iPhone Visa" />
          </div>
          <div>
            <h1>App Features</h1>
            <p id="feat-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            
            <div className="icons">
              <div>
                <div className="icon-alignment">
                  <i className="fa-regular fa-credit-card"></i>
                  <h4>Easy Payments</h4>
                </div>                
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>

              <div>
                <div className="icon-alignment">
                  <i className="fa-light fa-shield"></i>
                  <h4>Data Security</h4>
                </div> 
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
              </div>

              <div>
                <div className="icon-alignment">
                  <i className="fa-thin fa-chart-column"></i>
                  <h4>Cost Statistics</h4>
                </div> 
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div> 

              <div>
                <div className="icon-alignment">
                  <i className="fa-light fa-comments-question"></i>
                  <h4>Support 24/7</h4>
                </div> 
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
              </div>

              <div>
                <div className="icon-alignment">
                  <i className="fa-regular fa-wallet"></i>
                  <h4>Regular Cashback</h4>
                </div> 
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
                 
              <div>
                <div className="icon-alignment">
                  <i className="fa-light fa-face-smile-relaxed"></i>
                  <h4>Top Standards</h4>
                </div> 
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
