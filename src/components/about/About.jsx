


import React, { useRef } from 'react';
import './About.css';
import { BsPlayCircle } from "react-icons/bs";
import useOnScreen from '../useOnScreen.jsx'; // Adjust the path accordingly

const About = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={`main2 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="image"></div>
            <div className="content">
                <h1>Welcome To Our Website</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div className="play">
                    <span><BsPlayCircle /></span>
                    <h1>WATCH THE VIDEO</h1>
                </div>
            </div>
        </div>
    );
};

export default About;
