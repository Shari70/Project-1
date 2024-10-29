
import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                if (index < Math.floor(rating)) {
                    return <span key={index} className="star filled">★</span>; // Full star
                } else if (index === Math.floor(rating) && rating % 1 !== 0) {
                    return <span key={index} className="star half">★</span>; // Half star
                } else {
                    return <span key={index} className="star unfilled">★</span>; // Unfilled star
                }
            })}
        </div>
    );
};

export default StarRating;
