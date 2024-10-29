
import React, { useRef } from 'react';
import './Section1.css'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import icon6 from '../../assets/icon6.svg'
import useOnScreen from '../useOnScreen.jsx';



const Section1 = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (

       
        <div ref={ref} className={`section1 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="heading">
                <h1>Experience Once In Your Life Time</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>


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

    )
}

export default Section1
