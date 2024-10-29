
import React, { useRef } from 'react';
import './Section5.css'
import sec5img1 from '../../assets/img_1.jpg.webp'
import sec5img2 from '../../assets/img_2.jpg.webp'
import sec5img3 from '../../assets/img_3.jpg.webp'
import StarRating from './StarRating'
import useOnScreen from '../useOnScreen.jsx';

const Section5 = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    return (

        <div ref={ref} className={`section5 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="heading">
                <h1>Top Destination</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>

            </div>
          
          


            <div className="items">
                <div className="item">
                    <div className="icon"><img src={sec5img1} alt="" /></div>
                    <h1>Food & Wines</h1>

                    <div className="rating">
                    <StarRating rating={3}/>
                    <span> 3,239 reviews</span>
                    </div>
                  
                </div>
                <div className="item">
                    <div className="icon"><img src={sec5img2} alt="" /></div>
                    <h1>Resort & Spa</h1>
                    <div className="rating">
                    <StarRating rating={3}/>
                    <span> 3,239 reviews</span>
                    </div>
                   
                  
                   
                   
                </div>
                <div className="item">
                    <div className="icon"><img src={sec5img3} alt="" /></div>
                    <h1>Hotel Rooms</h1>
                  
                    <div className="rating">
                    <StarRating rating={4}/>
                    <span> 3,239 reviews</span>
                    </div>
                  
                    
                    
                </div>
                <div className="item">
                    <div className="icon"><img src={sec5img3} alt="" /></div>
                    <h1>Mountain Climbing</h1>
                    
                    <div className="rating">
                    <StarRating rating={4}/>
                    <span> 3,239 reviews</span>
                    </div>
                   
                   
                </div>

        </div>
        </div>
    
    )
}

export default Section5
