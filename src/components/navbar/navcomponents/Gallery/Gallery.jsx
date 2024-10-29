import React from 'react'
import Aboutimg from '../../../../assets/about.jpg'
import './Gallery.css'
import Header from '../../../Header/Header'
import galimg1 from  '../../../../assets/img_1.jpg.webp'
import galimg2 from  '../../../../assets/img_2.jpg.webp'
import galimg3 from  '../../../../assets/img_3.jpg.webp'
import galimg4 from  '../../../../assets/img_4.webp'
import Footer from '../../../footer/Footer'



const Gallery = () => {
  return (
    
    <div className="gallery">
        
    <div className="H-main" style={{ backgroundImage: `url(${Aboutimg})` }}
    
    >

        <Header/>
        <div className="hero"  >

            <div className="Htext">
                <h1>Gallery</h1>
               
                <h3>A free template by <a href="#" target='blank'>Colorlib</a> Download and share!</h3>
                     
            </div>
        </div>
        </div>
              {/* //////////////////////////////////////////////// */}

    <div className="GalSec">

    <div className="items">
                <div className="item">
                    <div className="icon"><img src={galimg1} alt="" /></div>
                   
                   
                  
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg2} alt="" /></div>
                   
                   
                   
                  
                   
                   
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg3} alt="" /></div>
                   
                   
                  
                    
                    
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg4} alt="" /></div> 
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg3} alt="" /></div>
                   
                   
                  
                    
                    
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg4} alt="" /></div> 
                </div>

     
                <div className="item">
                    <div className="icon"><img src={galimg1} alt="" /></div>
                    
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg2} alt="" /></div> 
                   
                </div>
               
               

        </div>
        
    
     {/* ///////////////////////////////////// */}
        <div className="largeicons">
                   
                  <div className="item">
                    <div className="icon"><img src={galimg1} alt="" /></div>
                    
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg2} alt="" /></div> 
                   
                </div>
                </div>

                {/* ///////////////////////////// */}

                <div className="items">
                <div className="item">
                    <div className="icon"><img src={galimg3} alt="" /></div>
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg4} alt="" /></div>
                
                </div>
                <div className="item">
                    <div className="icon"><img src={galimg1} alt="" /></div> 
                </div>

     
                <div className="item">
                    <div className="icon"><img src={galimg2} alt="" /></div>
                    
                </div>
               
               
               
               

        </div>
         

</div>
        <Footer/>
        </div>
  )
}

export default Gallery
