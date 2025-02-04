'use client'
import React from 'react';

function UserRating() {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl xl:text-5xl">
        User Rating
      </h2>

      <div className="flex mb-4 justify-center">
        <i className="fa fa-star text-yellow-500 text-lg mr-2"></i>
        <i className="fa fa-star text-yellow-500 text-lg mr-2"></i>
        <i className="fa fa-star text-yellow-500 text-lg mr-2"></i>
        <i className="fa fa-star text-yellow-500 text-lg mr-2"></i>
        <i className="fa fa-star text-gray-300 text-lg mr-2"></i>
      </div>

      <p className="mb-4 text-center md:text-lg lg:text-xl xl:text-2xl">
        4.1 average based on 254 reviews.
      </p>

      <hr className="border-t border-gray-200 my-4" />

      <div className="flex flex-col mb-4 md:flex-row md:justify-center lg:flex-wrap xl:flex-nowrap">
        <div className="flex flex-col mb-4 md:mr-4 lg:mr-0 xl:w-1/3">
          <div className="flex justify-between mb-2">
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">5 star</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">150</span>
          </div>
          <div className="bg-gray-200 h-2 mb-2">
            <div className="bg-green-500 h-2" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="flex flex-col mb-4 md:mr-4 lg:mr-0 xl:w-1/3">
          <div className="flex justify-between mb-2">
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">4 star</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">63</span>
          </div>
          <div className="bg-gray-200 h-2 mb-2">
            <div className="bg-blue-500 h-2" style={{ width: '30%' }}></div>
          </div>
        </div>

        <div className="flex flex-col mb-4 md:mr-4 lg:mr-0 xl:w-1/3">
          <div className="flex justify-between mb-2">
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">3 star</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">15</span>
          </div>
          <div className="bg-gray-200 h-2 mb-2">
            <div className="bg-cyan-500 h-2" style={{ width: '10%' }}></div>
          </div>
        </div>

        <div className="flex flex-col mb-4 md:mr-4 lg:mr-0 xl:w-1/3">
          <div className="flex justify-between mb-2">
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">2 star</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">6</span>
          </div>
          <div className="bg-gray-200 h-2 mb-2">
            <div className="bg-orange-500 h-2" style={{ width: '4%' }}></div>
          </div>
        </div>

        <div className="flex flex-col mb-4 md:mr-4 lg:mr-0 xl:w-1/3">
          <div className="flex justify-between mb-2">
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">1 star</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">20</span>
          </div>
          <div className="bg-gray-200 h-2 mb-2">
            <div className="bg-red-500 h-2" style={{ width: '15%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserRating;
