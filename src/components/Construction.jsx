import React, { useState, useContext } from "react";
import "../styles/Construction.css"; 
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { theme } = useContext(ThemeContext);  // Access theme from context

  const faqs = [
    {
      question: "We have 30 plus years in the building industry",
      answer:
        "With over 30 years of expertise in the building industry, we specialize in delivering high-quality construction services tailored to meet diverse needs. Our commitment ensures excellence and client satisfaction in every project.",
    },
    {
      question: "Quality construction continues after the project",
      answer:
        "Our commitment to quality extends beyond project completion, ensuring lasting durability and customer satisfaction. We provide ongoing support to maintain the integrity and excellence of our work.",
    },
    {
      question: "We use technology to do the job more quickly",
      answer:
        "We leverage advanced technology to streamline processes, ensuring faster project completion without compromising quality. Efficiency meets precision in every task we undertake.",
    },
    {
      question: "Employees are continually trained on safety issues",
      answer:
        "Our employees receive ongoing training on safety protocols to ensure a secure work environment and minimize risks. We prioritize safety at every stage of the project.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`faq-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <h2 className={`faq-heading ${theme === "dark" ? "dark-theme" : "light-theme"}`}>Why Choose Us</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <div
              onClick={() => handleToggle(index)} 
              className={`faq-question ${theme === "dark" ? "dark-theme" : "light-theme"}`}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span> 
            </div>

            {openIndex === index && (
              <div className={`faq-answer ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
