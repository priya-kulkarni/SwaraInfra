import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons
import "../styles/Navbar.css"; // Import custom styles

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`custom-navbar ${theme}`}>
      {/* Social Links */}
      <div className="custom-social-links">
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="custom-hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`custom-nav-links ${isMenuOpen ? "custom-active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
      </ul>

      {/* Theme Toggle Button with Icons */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
