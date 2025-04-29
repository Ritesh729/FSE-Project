
import React from 'react';
import './styles/HeroBanner.css';

const HeroBanner = () => {
  return (
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
  );
};

export default HeroBanner;

