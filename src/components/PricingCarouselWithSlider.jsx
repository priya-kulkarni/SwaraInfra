import React, { useState, useRef, useContext } from "react";
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
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const PricingCarouselWithSlider = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const [activeCard, setActiveCard] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [priceRange, setPriceRange] = useState(2170);
  const sliderRef = useRef(null);
  const activeCardRef = useRef(null);

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
      setActiveCard(null);
      setAnimationKey((prevKey) => prevKey + 1);
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
    if (activeCard === plan) return;
    setActiveCard(plan);
    setAnimationKey((prevKey) => prevKey + 1);

    // Scroll to the active card details
    setTimeout(() => {
      activeCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200); // Delay to ensure the component renders before scrolling
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
    const targetIndex = plans.findIndex((plan) => plan.price === value);
    if (targetIndex !== -1 && sliderRef.current) {
      sliderRef.current.slickGoTo(targetIndex);
      setActiveCard(plans[targetIndex]);
    }
  };

  return (
    <div
      className={`carousel-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <h2>Building Packages</h2>
      <p>Click on a card to display more details!</p>
      <div className="price-slider">
        <input
          type="range"
          min="0"
          max={plans.length - 1}
          value={plans.findIndex((plan) => plan.price === priceRange)}
          onChange={(e) => handleSliderChange(plans[Number(e.target.value)].price)}
          className="slider"
        />
      </div>

      {/* Main Slider */}
      <Slider {...settings} ref={sliderRef}>
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${theme === "dark" ? "dark-theme" : "light-theme"}`} onClick={() => handleCardClick(plan)}>
            <h3>{plan.title}</h3>
            <p className={`price ${theme === "dark" ? "dark-theme" : "light-theme"}`}>Price: Rs {plan.price}</p>
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

      {/* Display Active Card Details */}
      {activeCard && (
        <div ref={activeCardRef} key={animationKey} className={`active-card animated-card ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
          {activeCard.component}
        </div>
      )}
    </div>
  );
};

export default PricingCarouselWithSlider;
