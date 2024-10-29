
import React, { useRef } from 'react';
import Hero from '../../../hero/Hero'
import Header from '../../../Header/Header'
import './Hotel.css'
import icon1 from '../../../../assets/icon1.svg'
import icon2 from '../../../../assets/icon2.svg'
import icon3 from '../../../../assets/icon3.svg'
import icon4 from '../../../../assets/icon4.svg'
import icon5 from '../../../../assets/icon5.svg'
import icon6 from '../../../../assets/icon6.svg'
import '../../../Utility Classes/Utility.css'
import ImageSlider from '../../../section2/Sliders'
import Cards from '../../../section3/Cards'
import img1 from '../../../../assets/img_1.jpg.webp'; // Your image path
import img2 from '../../../../assets/img_2.jpg.webp'; // Your image path
import img3 from '../../../../assets/img_3.jpg.webp'; // Your image path
import Footer from '../../../footer/Footer'
import useOnScreen from '../../../useOnScreen';

const Hotel = () => {
    const contentRef = useRef();
    const leftcontentRef = useRef();
    const sectionRef = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();
    const section4Ref = useRef();
    const isleftContentVisible = useOnScreen(leftcontentRef);
    const isContentVisible = useOnScreen(contentRef);
    const isSectionVisible = useOnScreen(sectionRef);
    const isSection2Visible = useOnScreen(section2Ref);
    const isSection3Visible = useOnScreen(section3Ref);
    const isSection4Visible = useOnScreen(section4Ref);
   

    const cardData = [
        {
            img: img1,
            title: 'Five Reasons to Stay at Villa Resort',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },

        {
            img: img2,
            title: 'Five Reasons to Stay at Villa Resort',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },

        {
            img: img3,
            title: 'Five Reasons to Stay at Villa Resort',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },


    ];

  return (
    <div className='hotel'>
        
    <div className="H-main" >
    
        <Header/>
        
        <div className="hero">


            <div className="Htext">
                <h1> Our Hotel</h1>
               
                <h3>A free template by <a href="#" target='blank'>Colorlib</a> Download and share!</h3>
                
                
            </div>


        </div>

        </div>


   
        <div ref={section2Ref} className={`section1 fade-in-up ${isSection2Visible ? 'visible' : ''}`}>
            
            
            

            <div className="items">
                <div className="item">
                    <div className="icon"><img src={icon1} alt="" /></div>
                    <h1>Good Foods</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="item">
                    <div className="icon"><img src={icon2} alt="" /></div>
                    <h1>Travel Anywhere</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="item">
                    <div className="icon"><img src={icon3} alt="" /></div>
                    <h1>Airplane</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="item">
                    <div className="icon"><img src={icon4} alt="" /></div>
                    <h1>Beach Resort</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="item">
                    <div className="icon"><img src={icon5} alt="" /></div>
                    <h1>Mountain Climbing</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="item">
                    <div className="icon"><img src={icon6} alt="" /></div>
                    <h1>Hot Air Balloon</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                
                
                
                

                </div>
        </div>

        
        <div className="main2 ">
            <div className="image">
            </div>
           
            <div ref={contentRef} className={`content slide-transition ${isContentVisible ? 'visible' : ''}`}>
            
                <h1>Family Room</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                
                    
                 
               <div className="btn">  Learn More</div>
                     </div>



            </div>





            <div className="main2 c-r">
           
           
      
         <div className="content">
            {/* <div ref={leftcontentRef} className={`content right-to-left ${isleftContentVisible ? 'visible' : ''}`}>
             */}
                <h1>Presidential Room</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                
                    
                 
               <div className="btn">  Learn More</div>
                     </div>

                     <div className="image">
                     </div>

            </div>





           
            <div ref={section3Ref} className={`section2 fade-in-up ${isSection3Visible ? 'visible' : ''}`}>
        <div className="heading">
                <h1>Hotel Gallery</h1>
                <p  
                >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            
            <div className="sliders">
                
                <ImageSlider/>
               
            </div>
           
           
    </div>        
      

      {/* ////////////////////////////////////////////////// */}
      <div className="section3" style={{backgroundColor:'#e9ecef'}}>
            <div className="heading">
                <h1>More Hotel Features</h1>
                <p  style={{color:'rgb(108, 117, 125'}}>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
            </div>
            
            <div ref={section4Ref} className={`cards fade-in-up ${isSection4Visible ? 'visible' : ''}`}>
                <Cards cardData={cardData} /> {/* Pass the card data as a prop */}
            </div>
        </div>
      <Footer/>
      </div>
   
   

    
  )
}

export default Hotel
