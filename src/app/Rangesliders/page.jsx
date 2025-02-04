'use client'

import React, { useState } from 'react';

const HomePage = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-4">Range Slider</h1>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <p className="text-lg font-bold mt-2">Value: {value}</p>
      </div>
    </div>
  );
};
export default HomePage