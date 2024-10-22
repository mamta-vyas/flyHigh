// Header.js
import React from 'react';
import { FLYHIGH_LOGO, USER_ICON } from '../utils/constants';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='relative bg-cyan-900 w-full h-30 flex flex-col z-50'>
      <div className='my-4 mx-8 flex justify-between'>
  
    <img className='w-[80px] h-[40px] rounded-xl mx-4' src={FLYHIGH_LOGO} alt="logo" />
   <div>
   <img className="w-12 h-12 object-cover rounded-md" src={USER_ICON} alt="user_icon" />
  <button className ="my-2 font-bold text-white bg-red-500">Sign Out</button>
   </div>
      </div>
      <div className='p-2 mx-6 flex space-x-1'>
        <Link to="/flights" className='p-2 m-0 w-[90px] h-[40px] text-sm text-white bg-blue-600 cursor-pointer rounded-3xl font-bold'> 
          ✈️ Flights
        </Link>
        <Link to="/hotels" className='p-2 m-0 w-[90px] h-[40px] text-sm text-white bg-transparent border border-blue-500 cursor-pointer hover:bg-blue-950 rounded-3xl font-bold'> 
          Hotels
        </Link>
        <Link to="/carhire" className='p-2 m-0 w-[90px] h-[40px] text-sm text-white bg-transparent border border-blue-500 cursor-pointer hover:bg-blue-950 rounded-3xl font-bold'> 
          Car Hire
        </Link>
      </div>
   

    </div>
  );
}

export default Header;
