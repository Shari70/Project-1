
import React, { useRef } from 'react';
import Header from '../../../Header/Header'
import Aboutimg from '../../../../assets/about.jpg'
import './NavAbout.css'
import '../../../Utility Classes/Utility.css'
import Aboutimg2 from '../../../../assets/hero_1.webp'
import ImageSlider from '../../../section2/Sliders'
import person3 from '../../../../assets/person_3.webp'
import person2 from '../../../../assets/person_2.webp'
import person1 from '../../../../assets/person_1.webp'
import Footer from '../../../footer/Footer'
import useOnScreen from '../../../useOnScreen';


const NavAbout = () => {

    const contentRef = useRef();
    const sectionRef = useRef();
    const section2Ref = useRef();
    const isContentVisible = useOnScreen(contentRef);
    const isSectionVisible = useOnScreen(sectionRef);
    const isSection2Visible = useOnScreen(section2Ref);
   
    
  return (
    

    <div className="about">
        
    <div className="H-main" style={{ backgroundImage: `url(${Aboutimg})` }}
    
    >

        <Header/>
        <div className="hero"  >

            <div className="Htext">
                <h1>About Us</h1>
               

                <h3>A free template by <a href="#" target='blank'>Colorlib</a> Download and share!</h3>
                     
            </div>
        </div>
        </div>
        
        <div className="main2">
        
            <div className="image"  style={{ backgroundImage: `url(${Aboutimg2})` }}>
            </div>
            <div ref={contentRef} className={`content slide-transition ${isContentVisible ? 'visible' : ''}`}>
            
                
                
                <h1>Welcome To Our Website</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                
                <div className="btn">  Learn More</div>
                     </div>
        </div>

        
    
        <div ref={section2Ref} className={`section2 fade-in-up ${isSection2Visible ? 'visible' : ''}`}>
        <div className="heading">
                <h1>Hotel Gallery</h1>
                <p style={{color:'grey'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            
            <div className="sliders">
                
                <ImageSlider/>
               
            </div>       
    </div>    

       
   {/* //////////////////////////////////////////////     */}
  
  

   <div ref={sectionRef} className={`section1 fade-in-up ${isSectionVisible ? 'visible' : ''}`}>
            <div className="heading">
                <h1>Experience Once In Your Life Time</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>


            <div className="items">
                <div className="Abitem">
                    <div className="navicon"><img src={person3} alt="" /></div>
                    <h3>CEO, Co-Founder</h3>
                    <h1>Vince Richardson</h1>
                 
                 
                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={person1} alt="" /></div>
                    <h3>CTO, Co-Founder</h3>
                    <h1>Jean Love</h1>

                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={person2} alt="" /></div>
                    <h3>Marketer, Co-Founder</h3>
                    <h1>Jeff Stark</h1>
                   
                </div>
               
              
                <div className="Abitem">
                    <div className="navicon"><img src={person3} alt="" /></div>
                    <h3>CEO, Co-Founder</h3>
                    <h1>Vince Richardson</h1>
                 
                 
                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={person1} alt="" /></div>
                    <h3>CTO, Co-Founder</h3>
                    <h1>Jean Love</h1>

                </div>
                <div className="Abitem">
                    <div className="navicon"><img src={person2} alt="" /></div>
                    <h3>Marketer, Co-Founder</h3>
                    <h1>Jeff Stark</h1>
                   
                </div>
               
              
              
               
                

            </div>
        </div>

        <Footer/>

        </div>
  )
}

export default NavAbout
