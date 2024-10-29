
import React, { useRef } from 'react';
import './Section4.css'
import sec4img1 from '../../assets/person_1.webp'
import sec4img2 from '../../assets/person_2.webp'
import sec4img3 from '../../assets/person_3.webp'
import useOnScreen from '../useOnScreen.jsx';

const Section4 = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    return (
        <div ref={ref} className={`section4 fade-in-up ${isVisible ? 'visible' : ''}`}>
     


            <div className="heading">
                <h1>Happy Customers</h1>


            </div>


            <div className="items1">
                <div className="item">
                    <div className="icon"><img src={sec4img1} alt="" /></div>
                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                    </p>


                    <h4>— Clare Gupta</h4>

                </div>
                <div className="item">
                    <div className="icon"><img src={sec4img2} alt="" /></div>
                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                    </p>


                    <h4>— Rogie Slater</h4>

                </div>
                <div className="item">
                    <div className="icon"><img src={sec4img3} alt="" /></div>
                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                    </p>


                    <h4>— John Doe</h4>

                </div>
              
              

            </div>
        </div>

    )
}

export default Section4
