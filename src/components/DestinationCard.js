import React from 'react'


// for inline styling
// const styleCard ={
//   backgroundColor: "#f8f8f8",
// }


const DestinationCard = (props) => {
  const {dataList} = props;

const {cityName , destination , img , price , country ,directFlight} = dataList;
  // const {dataList} = props;
 

  return (
  
  <div className=''>
      <div 
    // style={styleCard}
    className='m-4 w-[300px] h-[300px] border bottom-[1px] border-solid border-black hover:scale-105 hover:shadow-lg border-opacity-10 bg-gray-50 hover:bg-gray-100 transition-all duration-500 rounded-xl cursor-pointer'>

    <img 
    className='h-[150px] w-full rounded-t-xl'
    src={img} alt="city-img" />
    
    <h3>From : - {cityName} - to - {destination}</h3>
    <h4>Price : {price}</h4>
    <h4>country : {country}</h4>
    <h4>directFlight : {directFlight}</h4>
 

    </div>
  </div>
  )
}

export default DestinationCard;
