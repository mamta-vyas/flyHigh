import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constants'
import { useState } from "react";
const DealCard = ({fromCity, toCity, onFromCityChange, onToCityChange, onSearch }) => {
  const [selectedOption, setSelectedOption] = useState('return'); // Default selection

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    // Optional: You can implement any additional functionality based on the selected option
    console.log("Selected Option:", e.target.value); // Debugging
  };
  return (
    <div className='relative'>
      <img
          className="w-full h-screen bg-cover bg-center bg-no-repeat"
          src={BACKGROUND_IMAGE}
          alt="bg-image"
        />
        <div className="flex flex-col absolute inset-0 items-center justify-center text-white bg-black bg-opacity-20 m-0">
          <h1 className="mx-16 text-6xl font-extrabold text-white">
            The best flight offers from anywhere, to everywhere
          </h1>
        <div className="relative bg-blue-950 bg-opacity-75 items-center justify-center w-[90%] h-[40%] text-xl font-bold space-y-2 ">
        <form onSubmit={onSearch} className="flex flex-col items-center">
            <div className="mx-10 flex space-y-2 flex-col">
              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" 
                name="flightOption" 
                value="return" 
                checked={selectedOption === 'return'} 
                onChange={handleOptionChange} 
                className="visible" 
                />
                <span className="w-6 h-6 inline-flex items-center justify-center rounded-full border-2 border-gray-400 mr-2 relative">
                <span className="w-2 h-2 rounded-full bg-blue-500 hidden absolute"></span>
                </span>
                Return
              </label>
             <label className="inline-flex items-center cursor-pointer">
                <input type="radio" 
                name="flightOption" 
                value="oneWay" 
                checked={selectedOption === 'oneWay'} 
                onChange={handleOptionChange} 
                className="visible"  />
                <span className="w-6 h-6 inline-flex items-center justify-center rounded-full border-2 border-gray-400 mr-2 relative">
                <span className="w-2 h-2 rounded-full bg-blue-500 hidden absolute"></span>
                </span>
                One way
              </label>
              <label className="inline-flex items-center cursor-pointer">
              <input type="radio" 
              name="flightOption" 
              value="multiCity" 
              checked={selectedOption === 'multiCity'} 
              onChange={handleOptionChange}
              className="visible" />
                <span className="w-6 h-6 inline-flex items-center justify-center rounded-full border-2 border-gray-400 mr-2 relative">
                <span className="w-2 h-2 rounded-full bg-blue-500 hidden absolute"></span>
                </span>
                Multi-city
              </label>
             </div>
           <div className=''> 
          
          <div className="mx-10 flex space-x-2 text-black">
             <input 
              className="w-52 h-8 border border-gray-500 rounded px-2"
              type="text"
              value={fromCity}
              onChange={onFromCityChange}
              placeholder="From city"
              required
             />
              <input 
              className="w-52 h-8 border border-gray-500 rounded px-2"
              type="text"
              value={toCity}
              onChange={onToCityChange}
              placeholder="To city"
              required
               />
              <button 
               className="w-24 h-8 bg-sky-500 text-white rounded-xl"
               type="submit"
              >Submit</button>
             </div>
         
          </div>  
          </form> 
           </div>
         </div>
    </div>
  )
}

export default DealCard
