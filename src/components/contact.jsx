import React, { useState, useContext } from "react";
import "../styles/contact.css"; // Import the styling for the contact section
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { theme } = useContext(ThemeContext); // Access theme from context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to send data to the backend
  };

  return (
    <div className={`contact-container ${theme}`}>
      <div className="image-placeholder">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.51234589949!2d107.00280043271502!3d11.537387973225078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMxJzE0LjkiTiAxMDfCsDAwJzE5LjAiRQ!5e0!3m2!1sen!2s!4v1689801453405"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="content">
        {/* Left Section */}
        <div className="left">
          <p><strong>Call Us</strong></p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/home.png"
              alt="Home icon"
            />
            Location: Shop No. 17 (Second Floor), Ridhi Sidhi Complex Opp. Giant's School, Akshay Park Gokul Road, Hubballi.
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Email icon"
            />
            Email-Us: swarainfra1@gmail.com
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone icon"
            />
            Call-Us: +91 9538675322, +91 9902718498
          </p>
        </div>

        {/* Right Section */}
        <div className="right">
          <p><strong>Get In Touch</strong></p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
            />

            {/* Dropdown for Subject */}
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="subject-dropdown"
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="quotation">Get Quotation</option>
              <option value="drawing">Drawing</option>
              <option value="plan">Plan</option>
              <option value="renovate">Renovate</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="on"
            ></textarea>
            <button className="send-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
