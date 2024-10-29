
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`full-page-menu ${isOpen ? 'open' : ''}`}>
        <div className="close-button" onClick={closeMenu}>
          &times;
        </div>
        <ul className="menu">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/hotel" onClick={closeMenu}>Hotel</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/news" onClick={closeMenu}>News</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
