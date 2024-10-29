

import './Section2.css'
import ImageSlider from './Sliders'
import React, { useRef } from 'react';

import useOnScreen from '../useOnScreen.jsx';


const Section2 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    
    <div ref={ref} className={`section2 fade-in-up ${isVisible ? 'visible' : ''}`}>
        <div className="heading">
                <h1>International Tour Management.</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            
            <div className="sliders">
                
                <ImageSlider/>
               
            </div>
           
           
    </div>
   
   
  )
}

export default Section2
