import React from "react";
import "../styles/TopBar.css";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="social-links1">
      <Link to="*">
        <img src={Logo} alt="Swara Infra Logo" className="logo" alt="Swara Infra Logo"
          className="navbar-logo"   />
      </Link>
      <div className="logo-text">Swara Infra</div>
          
          </div>
        <div className="contact-info">
          
          <span>📞 +91 9538675322</span>
          <span>✉ Swarainfra1@gmail .com</span>
          <span>🕖 Mon-Fri: 7:00Am - 7:00Pm</span>        
          </div>
    </div>
  );
};

export default TopBar;