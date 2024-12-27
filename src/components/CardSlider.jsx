import React, { useEffect } from "react";
import "../styles/CardSlider.css"; // Import the CSS for the slider
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const CardSlider = () => {
  const cards = [
    {
      title: "1. Select any package",
      icon: "📦", // Replace with actual icons/images
    },
    {
      title: "2. Review & compare briefly",
      icon: "📝",
    },
    {
      title: "3. Download to know",
      icon: "⬇",
    },
    {
      title: "4. Customize requirements",
      icon: "⚙",
    },
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="slider-container">
      <h2 data-aos="fade-up">How It Works</h2>
      <p data-aos="fade-up" data-aos-delay="100">Convenience, & Transparency at your fingertips.</p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="slider-card"
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`} // Delay for each card to appear in sequence
          >
            <div className="card-icon" data-aos="fade-in">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
