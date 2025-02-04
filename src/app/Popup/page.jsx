'use client'

import React, { useState } from 'react';

function Popup() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="flex justify-center items-center h-screen" onClick={handleToggle}>
    
        <span className="rounded-md bg-blue-500 px-2 py-1 text-white cursor-pointer">Click me to toggle the popup!</span>
        {isOpen && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-48">
            <p className="block px-4 py-2 text-sm text-gray-700">A Simple Popup!</p>
          </div>
        )}
      </div>
    );
  }
  
  export default Popup;