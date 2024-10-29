// import React from 'react'
// import './Section3.css'
// import Cards from './Cards'

// const Section3 = (props) => {
//     return (

//         <div className="section3">

//             <div className="heading">
//                 <h1>Recent Blog Post</h1>
//                 <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//             </div>
//             <div className="cards">
//                 <Cards/>
//             </div>



//         </div>

//     )
// }

// export default Section3

// src/Section3.js
import React from 'react';
import './Section3.css'; // Ensure you have your styles here
import Cards from './Cards';
import img1 from '../../assets/img_1.jpg.webp'; // Your image path
import img2 from '../../assets/img_2.jpg.webp'; // Your image path
import img3 from '../../assets/img_3.jpg.webp'; // Your image path

const Section3 = () => {

    
    // Create an array of card data with different content
    const cardData = [
        {
            img: img1,
            title: '45 Best Places To Unwind',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },

        {
            img: img2,
            title: '45 Best Places To Unwind',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },

        {
            img: img3,
            title: '45 Best Places To Unwind',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },


    ];

    return (
        <div className="section3">
            <div className="heading">
                <h1>Recent Blog Post</h1>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
            </div>
            <div className="cards">
                <Cards cardData={cardData} /> {/* Pass the card data as a prop */}
            </div>
        </div>
    );
};

export default Section3;
