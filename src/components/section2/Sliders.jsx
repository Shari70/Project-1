


import React, { useState, useEffect } from 'react';
import './Sliders.css';
import  slider1 from '../../assets/slider-1.jpg.webp'
import  slider2 from '../../assets/slider-2.jpg.webp'
import  slider3 from '../../assets/slider-3.jpg.webp'
import  slider4 from '../../assets/slider-4.jpg.webp'
import  slider5 from '../../assets/slider-5.jpg.webp'
import  slider6 from '../../assets/slider-6.jpg.webp'


const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    
    
];


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`Slide ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className="controls">
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
