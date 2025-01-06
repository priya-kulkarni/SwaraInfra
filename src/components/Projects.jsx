import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import completed1 from "../assets/completed1.jpg";
import completed2 from "../assets/completed2.jpg";
import completed3 from "../assets/completed3.jpg";
import completed4 from "../assets/completed4.jpg";
import completed5 from "../assets/completed5.jpg";
import completed6 from "../assets/completed6.jpg";
import completed7 from "../assets/completed7.jpg";
import completed8 from "../assets/completed8.jpg";
import completed9 from "../assets/completed9.jpg";
import completed10 from "../assets/completed10.jpg";
import completed11 from "../assets/completed11.jpg";
import ongoing1 from "../assets/ongoing1.jpg";
import ongoing2 from "../assets/ongoing2.jpg";
import ongoing3 from "../assets/ongoing3.jpg";
import SkeletonLoader from "../components/Loader"; 

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  const completedProjects = [
    { location: "Hubli", sqft: "2000 sqft", img: completed1 },
    { location: "Hubli", sqft: "2500 sqft", img: completed2 },
    { location: "Hubli", sqft: "1800 sqft", img: completed3 },
    { location: "Hubli", sqft: "2200 sqft", img: completed4 },
    { location: "Hubli", sqft: "2200 sqft", img: completed5 },
    { location: "Hubli", sqft: "2200 sqft", img: completed6 },
    { location: "Hubli", sqft: "2200 sqft", img: completed7 },
    { location: "Hubli", sqft: "2200 sqft", img: completed8 },
    { location: "Hubli", sqft: "2200 sqft", img: completed9 },
    { location: "Hubli", sqft: "2200 sqft", img: completed10 },
    { location: "Hubli", sqft: "2200 sqft", img: completed11 },
  ];

  const ongoingProjects = [
    { location: "Hubli", sqft: "3000 sqft", img: ongoing1 },
    { location: "Hubli", sqft: "2700 sqft", img: ongoing2 },
    { location: "Hubli", sqft: "2100 sqft", img: ongoing3 },
  ];

  const projects = activeTab === "completed" ? completedProjects : ongoingProjects;

  useEffect(() => {
    // Simulate an API call or delay to load data
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);
  }, []);

  return (
    <div className="projects-container">
      <h2>VIEW CONSTRUCTION</h2>
      <h3>Delivering high-quality construction services...</h3>

      <div className="tabs">
        <button
          className={activeTab === "completed" ? "active-tab" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
        <button
          className={activeTab === "ongoing" ? "active-tab" : ""}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing
        </button>
      </div>

      <div className="projects-grid">
        {isLoading
          ? Array(6) // Display 6 skeleton loaders
              .fill()
              .map((_, index) => <SkeletonLoader key={index} />)
          : projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.img} alt={`Project in ${project.location}`} />
                <div className="project-details">
                  <h4>{project.location}</h4>
                  <p>{project.sqft}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Projects;
