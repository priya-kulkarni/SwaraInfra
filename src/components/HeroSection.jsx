import React from "react";
import '../styles/HeroSection.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import hero from "../assets/hero1.mp4";
import hero1 from "../assets/hero2.mp4";
import hero2 from "../assets/hero3.mp4";

function HeroSection() {
  return (
    <div className="hero-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video 
              className="d-block w-100"
              autoPlay
              loop
              muted
              aria-label="Slide 1"
            >
              <source src={hero} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>We Focus on you</h5>
              <p>We Provide Expertise and genuine commited to qualify on every project no matter the size, market or delivery method.</p>
            </div>
          </div>
          <div className="carousel-item">
          <video 
              className="d-block w-100"
              autoPlay
              loop
              muted
              aria-label="Slide 1"
            >
              <source src={hero1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Leadership</h5>
              <p>We will make your building construction Project proceed in a straightforward manner with the least possible impact on your normal operation.</p>
            </div>
          </div>
          <div className="carousel-item">
          <video 
              className="d-block w-100"
              autoPlay
              loop
              muted
              aria-label="Slide 1"
            >
              <source src={hero2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>Construct Your Dream Home</h5>
              <p>Make your Dream home</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
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
  );
}

export default HeroSection;
