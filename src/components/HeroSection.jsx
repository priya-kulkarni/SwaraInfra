import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h1>"Building the Future with Precision and Expertise"</h1>
        <p>
        At SwaraInfra, we specialize in turning your construction dreams into reality. 
        With a commitment to quality, we deliver projects that stand the test of time, using the latest technologies and sustainable practices. Our experienced team ensures
        every detail is meticulously planned and executed to create spaces that inspire and endure.
        </p>
      </div>
      <div className="images">
  <div className="main-image">
    <img src="https://html.rrdevs.net/ribuild/assets/imgs/our-skill/our-skill-2.jpg" alt="Main" />
  </div>
  <div className="secondary-image">
    <img src="https://html.rrdevs.net/ribuild/assets/imgs/our-skill/our-skill-1.jpg" alt="Secondary" />
  </div>
</div>
    </section>
  );
};

export default HeroSection;
