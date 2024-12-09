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
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger animation

  const plans = [
    {
      title: "Premium",
      price: 2170,
      buttonText: "Explore Premium",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <PremiumPage />,
    },
    {
      title: "Premium+",
      price: 2399,
      buttonText: "Upgrade to Premium+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <Premiumplus />,
    },
    {
      title: "Luxury",
      price: 2620,
      buttonText: "Discover Luxury",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <Luxury />,
    },
    {
      title: "LuxuryPlus",
      price: 2799,
      buttonText: "Explore Luxury+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <Luxuryplus />,
    },
    {
      title: "Freedom",
      price: 2499,
      buttonText: "Start with Freedom",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <FreedomPage />,
    },
    {
      title: "Freedomplus",
      price: 2650,
      buttonText: "Upgrade to Freedom+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <FreedomPlus />,
    },
    {
      title: "TheOneplus",
      price: 3399,
      buttonText: "Experience The One+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
      component: <TheOne />,
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    afterChange: () => {
      setActiveCard(null); // Reset active card when slider changes
      setAnimationKey((prevKey) => prevKey + 1); // Restart animation
    },
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
    if (activeCard === plan) return; // If clicking the same card, do nothing
    setActiveCard(plan); // Set active card
    setAnimationKey((prevKey) => prevKey + 1); // Trigger animation
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
            onClick={() => handleCardClick(plan)}
          >
            <h3>{plan.title}</h3>
            <p className="price">Price: Rs {plan.price}</p>
            <ul>
              {plan.features && plan.features.length > 0 ? (
                plan.features.map((feature, i) => <li key={i}>{feature}</li>)
              ) : (
                <li>No features available</li>
              )}
            </ul>
            <button className="buy-btn">{plan.buttonText}</button>
          </div>
        ))}
      </Slider>

      {/* Display Active Card Details with Animation */}
      {activeCard && (
        <div key={animationKey} className="active-card animated-card">
          {activeCard.component}
        </div>
      )}
    </div>
  );
};

export default PricingCarouselWithSlider;
