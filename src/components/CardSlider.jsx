import React, { useContext } from "react";
import "../styles/CardSlider.css"; // Import the CSS for the slider
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const CardSlider = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

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

  return (
    <div className={`slider-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <h2 className={`heading ${theme === "dark" ? "dark-theme" : "light-theme"}`}>How It Works</h2>
      <p className={`description1 ${theme === "dark" ? "dark-theme" : "light-theme"}`}>Convenience, & Transparency at your fingertips.</p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className={`slider-card ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <div className={`card-icon ${theme === "dark" ? "dark-theme" : "light-theme"}`}>{card.icon}</div>
            <h3 className={`card-title ${theme === "dark" ? "dark-theme" : "light-theme"}`}>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
