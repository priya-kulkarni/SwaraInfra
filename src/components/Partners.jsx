import React, { useContext } from "react";
import "../styles/Partners.css";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const partners = [
  { id: 1, name: "Partner 1", img: "https://www.swarainfra.homes/static/media/Kajaria-removebg-preview.f92111de18baf73b88eb.png" },
  { id: 2, name: "Partner 2", img: "https://www.swarainfra.homes/static/media/kamdenu-removebg-preview.37bb867c618e4a9bf62a.png" },
  { id: 3, name: "Partner 3", img: "https://www.swarainfra.homes/static/media/fixit-removebg-preview.f42fd6b5aaabeb31698e.png" },
  { id: 4, name: "Partner 4", img: "https://www.swarainfra.homes/static/media/Acc-removebg-preview.e93f3be7f4e82697aaa8.png" }
];

const Partners = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <section className={`partners ${theme}`}>
      <h2>Our Partners</h2>
      <p className="subtext">Clients Template for Business Website</p>
      <div className="partners-container">
        {partners.map((partner) => (
          <div className="partner" key={partner.id}>
            <img src={partner.img} alt={partner.name} />
            <h4>{partner.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
