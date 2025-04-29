import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import CustomMarquee from './customMarquee';
import Category from './CategoryList'; 
import './styles/HeroBanner.css'; 
import './styles/Navbar.css';
import './styles/Category.css';

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <CustomMarquee />
      <Category /> 
       {/* <Dashboard /> */}
    </>
  );
}

export default Home;
