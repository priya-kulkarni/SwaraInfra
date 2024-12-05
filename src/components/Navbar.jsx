// import { BrowserRouter as  Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://swarainfra.homes/static/media/logo.b9aec6b0bfc6345fdc2e.png"
          alt="Swara Infra Logo"
          className="navbar-logo"
        />
        <div className="logo-text">Swara Infra</div>
      </div>
      {/* <ul className="nav-links"> */}
        {/* <li><a href="#home">Home</a></li>
        <li><a href="/construction">Construction</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li> */}

        <ul className="nav-links" >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/Packages">Packages</Link></li>

        </ul>
    </nav>
  );
}

export default Navbar;