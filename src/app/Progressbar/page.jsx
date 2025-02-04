'use client'

import React, { useState, useEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (progress >= 100) {
          clearInterval(intervalId);
          setIsRunning(false);
        } else {
          setProgress((prevProgress) => prevProgress + 1);
        }
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [progress, isRunning]);

  const handleButtonClick = () => {
    setIsRunning(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
      <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">
        Progress Bar
      </h1>
      <div className="w-full bg-gray-200 h-4 mb-4" id="myProgress">
        <div
          className="bg-green-500 h-4"
          style={{ width: `${progress}%` }}
          id="myBar"
        ></div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Click Me
      </button>
    </div>
  );
}

export default ProgressBar;