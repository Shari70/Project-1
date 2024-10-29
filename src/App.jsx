
// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About';



import Hotel from './components/navbar/navcomponents/hotel/Hotel';
import NavAbout from './components/navbar/navcomponents/about/NavAbout';
import Gallery from './components/navbar/navcomponents/Gallery/Gallery';
import News from './components/navbar/navcomponents/news/News';
import Contact from './components/navbar/navcomponents/contact/Contact';
import Hero from './components/hero/Hero';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Footer from './components/footer/Footer';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
      <Hero />
      <About />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5 />
      <Footer/>
    </div>
    ),

   
  },
  
  

      {
        path : 'hotel',
        element : <Hotel/>,
       
        
      },
  

     
      
      {
        path : 'about',
        element : <NavAbout/>,
       
        
      },
      {
        path : 'Gallery',
        element : <Gallery/>,
       
        
      },
      {
        path : 'news',
        element : <News/>,
       
        
      },
      {
        path : 'contact',
        element : <Contact/>,
       
        
      },

    
      
  
 
      

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
