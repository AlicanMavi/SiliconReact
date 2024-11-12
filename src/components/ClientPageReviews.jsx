import React from 'react';
import reviewsImage from '../assets/Images/reviews.svg';

const ClientPageReviews = () => {
  return (
    <section className="client-page-reviews">
      <div className="container">
        <div className="client-reviews">
          <div className="clients">
            <h2>Clients are<br />Loving Our App</h2>
          </div>

          <div className="reviews">
            <img src={reviewsImage} alt="Client Reviews" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientPageReviews;
