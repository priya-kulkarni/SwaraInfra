import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import featuring from "../assets/featuring.jpg";

const AboutUs = () => {
  const [imageLoaded, setImageLoaded] = useState({
    mission: false,
    vision: false,
    featuring: false,
  });

  // Handle Image Loading State
  const handleImageLoad = (imageKey) => {
    setTimeout(() => {
      setImageLoaded((prevState) => ({ ...prevState, [imageKey]: true }));
    }, 500); // Artificial delay for effect
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div className="about-us-section py-5">
      <div className="container">
        {/* About Us Section */}
        <div className="text-center mb-5">
          <h2>About Us</h2>
          <p className="text-muted">
            Swarainfra turns that dream into reality. We're your one-stop shop
            for everything home construction. From expert civil engineers to a
            team that oversees every detail, we handle it all.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="row g-4 align-items-center">
          {/* Card 1 */}
          <div className="col-md-6 fade-in">
            {!imageLoaded.mission && (
              <div className="image-loader">Loading...</div>
            )}
            <img
              src={mission}
              alt="Our Mission"
              className={`img-fluid rounded hover-card-image ${
                imageLoaded.mission ? "visible" : "hidden"
              }`}
              onLoad={() => handleImageLoad("mission")}
            />
          </div>
          <div className="col-md-6 fade-in">
            <h3>Our Mission</h3>
            <p className="text-muted">
              We believe that just growing bigger isn’t growing better. Growing
              better means building a company and culture that endure and scale
              to meet the needs of our customers for years to come.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Card 2 */}
          <div className="col-md-6 order-md-2 fade-in">
            {!imageLoaded.vision && (
              <div className="image-loader">Loading...</div>
            )}
            <img
              src={vision}
              alt="Our Vision"
              className={`img-fluid rounded hover-card-image ${
                imageLoaded.vision ? "visible" : "hidden"
              }`}
              onLoad={() => handleImageLoad("vision")}
            />
          </div>
          <div className="col-md-6 order-md-1 fade-in">
            <h3>Our Vision</h3>
            <p className="text-muted">
              Our vision at Swara Infra is to be recognized as the premier
              construction company, setting the standard for excellence in the
              industry. We envision a future where our innovative solutions,
              sustainable practices, and unwavering commitment to quality
              propel us to the forefront of construction innovation. By
              fostering a culture of collaboration, integrity, and continuous
              improvement, we aim to not only meet but exceed the evolving
              needs of our clients, while positively impacting the communities
              we serve.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Card 3 */}
          <div className="col-md-6 fade-in">
            {!imageLoaded.featuring && (
              <div className="image-loader">Loading...</div>
            )}
            <img
              src={featuring}
              alt="Our Story"
              className={`img-fluid rounded hover-card-image ${
                imageLoaded.featuring ? "visible" : "hidden"
              }`}
              onLoad={() => handleImageLoad("featuring")}
            />
          </div>
          <div className="col-md-6 fade-in">
            <h3>Featuring</h3>
            <p className="text-muted">
              New & Trending Designs, No Subcontracts, No Hidden Charges,
              Timely Delivery, Fair Pricing, High-quality work with No
              Compromise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;