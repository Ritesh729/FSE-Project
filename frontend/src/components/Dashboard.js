
import React, { useEffect, useState } from 'react';
import './styles/Dashboard.css';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fse-project.onrender.com/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="dashboard">
      {/* Navbar */}
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

      {/* Hero Banner */}
      <div
        className="hero-banner"
        style={{ backgroundImage: "url('/images/main2webp.webp')" }}
      >
        <div className="hero-banner-content">
          <h1>GO AIR POP</h1>
          <h3>Pop it. Play it.</h3>
          <button className="shop-button">SHOP NOW</button>
        </div>
      </div>

      {/* Marquee */}
      <section>
        <div className="custom-marquee" role="region">
          <div className="track">
            {Array.from({ length: 8 }).map((_, index) => (
              <span className="content marquee-text" key={index}>
                GET 10% OFF ON ALL ORDER USE COUPON CODE ELEC10
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <div className="category-wrapper">
        <h2 className="category-heading">SHOP BY CATEGORY</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <div className="category-card" key={cat.id}>
              <img
                src={`https://fse-project.onrender.com/${cat.category_image}`}
                alt={cat.category_name}
                className="category-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
