import React, { useState } from "react";
import Slider from "react-slick";
import PremiumPage from "./Premium"; 
import Premiumplus from "./Premium+";
import Luxury from "./Luxury"; 
import Luxuryplus from "./Luxury+";
import FreedomPage from "./Freedom"; 
import FreedomPlus from "./Freedom+";
import TheOne from "./TheOne";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PricingCarouselWithSlider.css";

const PricingCarouselWithSlider = () => {
  const [activeCard, setActiveCard] = useState(null); // Track the active card

  const plans = [
    {
      title: "Premium",
      price: 2170,
      buttonText: "Explore Premium",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"], // Ensure this array is always present
      component: <PremiumPage />, // Link to the Premium Page Component
    },
    {
      title: "Premium+",
      price: 2399,
      buttonText: "Upgrade to Premium+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <Premiumplus />, // Link to the Luxury Page Component (for example)
    },
    {
      title: "Luxury",
      price: 2620,
      buttonText: "Discover Luxury",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <Luxury />, // Link to the Luxury Page Component
    },
    {
      title: "LuxuryPlus",
      price: 2799,
      buttonText: "Explore Luxury+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <Luxuryplus />, // Link to the Luxury Page Component
    },
    {
      title: "Freedom",
      price: 2499,
      buttonText: "Start with Freedom",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <FreedomPage />, // Link to the Freedom Page Component
    },
    {
      title: "Freedomplus",
      price: 2650,
      buttonText: "Upgrade to Freedom+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <FreedomPlus />, // Link to the Freedom Page Component
    },
    {
      title: "TheOneplus",
      price: 3399,
      buttonText: "Experience The One+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <TheOne />, // Link to the Freedom Page Component
    },
    
  ];

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    afterChange: (index) => setActiveCard(null), // Reset active card when slider changes
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (plan) => {
    setActiveCard(plan); // Set active card to the clicked plan
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">Building Packages</h2>
      <p className="carousel-subtext">Click on a card to display more details!</p>

      {/* Main Slider */}
      <Slider {...settings}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className="pricing-card"
            onClick={() => handleCardClick(plan)} // Show the clicked plan's details
          >
            <h3>{plan.title}</h3>
            <p className="price">Price: Rs {plan.price}</p>
            <ul>
              {plan.features && plan.features.length > 0 ? (
                plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))
              ) : (
                <li>No features available</li> 
              )}
            </ul>
            <button className="buy-btn">{plan.buttonText}</button>
          </div>
        ))}
      </Slider>

      {/* Display Active Card Details (on same page) */}
      {activeCard && (
        <div className="active-card">
          {activeCard.component} 
        </div>
      )}
    </div>
  );
};

export default PricingCarouselWithSlider;
