import React from "react";
import "../styles/HeroSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        {/* Bootstrap Carousel */}
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-content">
              <h1>"Building the Future with Precision and Expertise"</h1>
        <p>
          At SwaraInfra, we specialize in turning your construction dreams into reality. 
          With a commitment to quality, we deliver projects that stand the test of time, using the latest technologies and sustainable practices. Our experienced team ensures
          every detail is meticulously planned and executed to create spaces that inspire and endure.
        </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="carousel-content">
                <h1>"Engineering Excellence for a Better Tomorrow"</h1>
                <p>
                At SwaraInfra, we take pride in engineering structures that blend innovation with durability. Our expertise ensures that every project is designed with precision, built with integrity, and delivered with excellence to meet the evolving needs of modern infrastructure.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="carousel-content">
                <h1>"Crafting Sustainable and Smart Solutions"</h1>
                <p>
                We are committed to building not just structures, but sustainable ecosystems. By integrating smart technologies and eco-friendly practices, we create spaces that are efficient, resilient, and aligned with a vision for a greener future.                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Images section remains unaffected */}
      <div className="images">
        <div className="main-image">
          <img
            src="https://html.rrdevs.net/ribuild/assets/imgs/our-skill/our-skill-2.jpg"
            alt="Main"
          />
        </div>
        <div className="secondary-image">
          <img
            src="https://html.rrdevs.net/ribuild/assets/imgs/our-skill/our-skill-1.jpg"
            alt="Secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
