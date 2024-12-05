import React from "react";
import "../styles/TeamSection.css";

const teamMembers = [
  {
    name: "John Joe",
    role: "Junior Architect",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/2.jpg",
  },
  {
    name: "Richard Wagner",
    role: "Civil Engineer",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/4.jpg",
  },
  {
    name: "Sarah Spence",
    role: "Construction Assistant",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/3.jpg",
  },
  {
    name: "John Halpern",
    role: "Construction Manager",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/4.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">MEET OUR TEAM</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
      {/* <button className="view-more-button">View More</button> */}
    </section>
  );
};

export default TeamSection;