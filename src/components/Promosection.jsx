import React from 'react';
import '../styles/Promosection.css';

const PromoSection = () => {
  return (
    <div className="promo-container">
      <div className="promo-content">
        <h2>Ready To Get Started With Your Next Project?</h2>
        <p>
          Your dream project is just a step away. Reach out now to begin your
          construction journey with our skilled professionals. We're here to
          make your vision come to life.
        </p>
        <button className="promo-button">Get a Free Construction Estimate</button>
      </div>
      <div className="promo-image">
        <img
          src="https://thikedaar.com/siteassets/img/web/cta-man-service-details.png"
          alt="Smiling professional"
        />
      </div>
    </div>
  );
};

export default PromoSection;
