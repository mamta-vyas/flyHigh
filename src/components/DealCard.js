import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constants'
const DealCard = () => {
  return (
    <div className='relative'>
      <img
          className="w-full h-screen bg-cover bg-center bg-no-repeat"
          src={BACKGROUND_IMAGE}
          alt="bg-image"
        />
        <div className="flex flex-col absolute inset-0 items-center justify-center text-white bg-black bg-opacity-20 ">
          <h1 className="mx-16 text-6xl font-extrabold text-white">
            The best flight offers from anywhere, to everywhere
          </h1>
        <div className="relative bg-blue-950 flex flex-col items-center justify-center w-[90%] h-[40%] ">
            <div className="flex space-x-1">
              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" name="option" className="hidden" />
                <span className="w-6 h-6 inline-flex items-center justify-center rounded-full border-2 border-gray-400 mr-2 relative">
                  <span className="w-2 h-2 rounded-full bg-blue-500 hidden absolute"></span>
                </span>
                Return
              </label>

              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" name="option" className="hidden" />
                <span className="w-6 h-6 inline-flex items-center justify-center rounded-full border-2 border-gray-400 mr-2 relative">
                  <span className="w-2 h-2 rounded-full bg-blue-500 hidden absolute"></span>
                </span>
                One way
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input type="radio" name="option" className="hidden" />
                <span className="w-6 h-6 inline-flex items-center justify-center rounded-full border-2 border-gray-400 mr-2 relative">
                  <span className="w-2 h-2 rounded-full bg-blue-500 hidden absolute"></span>
                </span>
                Multi-city
              </label>
              
             <div className="space-x-1">
             <input 
             className="w-52 h-8 border border-gray-500"
             type="text" id="myInput" placeholder="from India(IN)"/>
              <input 
              className="w-52 h-8 border border-gray-500"
              type="text" id="myInput" placeholder="To country,city or airport"/>
              <button 
               className="w-24 h-8 bg-sky-500 text-white rounded-xl"
              >Submit</button>
             </div>
             </div>
           </div>
         </div>
    </div>
  )
}

export default DealCard
