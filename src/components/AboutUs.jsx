import React from "react";
import "../styles/AboutUs.css";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import featuring from "../assets/featuring.jpg";

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Mission",
      description:
        "Building Your Dream Home with Thikedaar.Com: From Blueprint to Reality. Thikedaar.Com offers a comprehensive home construction service that begins with your dream...",
      image: vision, // Directly assign the imported image variable
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Transforming Business Environments with Thikedaar.Com: Tailored Commercial Spaces for Success. Thikedaar.Com understands that the design and construction of commercial spaces...",
      image: mission, // Directly assign the imported image variable
    },
    {
      id: 3,
      title: "Featuring",
      description:
        "Empowering Industries with Thikedaar.Com: Robust Construction Solutions. Thikedaar.Com provides tailored industrial construction services for efficient and functional spaces...",
      image: featuring, // Directly assign the imported image variable
    },
  ];

  return (
    <div className="container">
      {cards.map((card, index) => (
        <div
          className={`card ${index % 2 === 0 ? "card-left" : "card-right"}`}
          key={card.id}
        >
          {index % 2 === 0 && (
            <img src={card.image} alt={card.title} className="card-image" />
          )}
          <div className="card-content">
            <h1 className="card-number">0{card.id}</h1>
            <h2>{card.title}</h2>
            <div className="yellow-line"></div>
            <p>{card.description}</p>
            
          </div>
          {index % 2 !== 0 && (
            <img src={card.image} alt={card.title} className="card-image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;