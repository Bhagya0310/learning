'use client'

import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4">Star Rating</h2>
      <div className="text-4xl mb-2">
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              index <= (hover || rating) ? 'text-yellow-500' : 'text-black'
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p className="text-lg font-bold">Rating: {rating}/5</p>
    </div>
  );
};

export default StarRating;