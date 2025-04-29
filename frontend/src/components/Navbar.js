import React from 'react';
import './styles/Navbar.css';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ElectroCart</div>

      <ul className="navbar-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/">Shop</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <div className="navbar-icons">
        <FaSearch className="nav-icon" />
        <FaUser className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
