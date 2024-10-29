


// src/MainLayout.js
import React from 'react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import { Outlet } from 'react-router-dom'; // To render child routes
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Footer from './components/footer/Footer';
import News from './components/navbar/navcomponents/news/News';

function MainLayout() {
  return (
    <div>
        
      <Hero />
      <About />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
     <Section5/>
     <Footer/>
     
     
     
     
    </div>
  );
}

export default MainLayout;

