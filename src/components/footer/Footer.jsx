import React from 'react'
import './Footer.css'



const Footer = () => {

   
    

  return (
   
    <div className="section6">
        
   <div className="footer">

    <div className="box1">
        <h1>Quick Link</h1>
     
       <a href="#top-section" className='remove-line'> 
         <h2> About Us </h2> </a>
       <a href="#top-section" className='remove-line'> 
         <h2>Terms & Conditions </h2> </a>
       <a href="#top-section" className='remove-line'> 
         <h2> Privacy Policy </h2> </a>
       <a href="#top-section" className='remove-line'> 
         <h2> Help us </h2> </a>
       <a href="#top-section" className='remove-line'> 
         <h2> Rooms</h2> </a>

       
       
    </div>
    <div className="box1">
        <h1>Support</h1>
        <h2>Our Location</h2>
        <h2>The Hosts</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Restaurant</h2>
    </div>
    <div className="box1">
        <h1>Contact Info</h1>
        <h3>Address</h3>
        <h2 style={{lineHeight:'3px'}}>98 West 21th Street, Suite 721</h2>
        <h2>New York NY 10016</h2>
        <h3>Phone:</h3>
        <h2  style={{lineHeight:'6px'}}>(+1) 435 3533</h2>
        <h3 style={{lineHeight:'36px'}}>
        Email:
        </h3>
        <h2 style={{lineHeight:'3px'}}>info@yourdomain.com</h2>
    </div>
    <div className="box1"  style={{marginBottom:'6rem'}}>
        <h1>Subscribe</h1>
        <h2>Sign up for our newsletter</h2>
        <input type="text" placeholder='Your email...'/>
        <hr />
        
        
    </div>
     
   </div>


      <p>Copyright © 2024 All rights reserved | This template is made by Colorlib</p>
 
 
   </div>
  )
}

export default Footer
