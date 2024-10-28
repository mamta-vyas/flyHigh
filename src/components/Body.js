import React, { useState } from "react";
import DealCard from "./DealCard";
import DestinationCard from "./DestinationCard";
import dataObj from "../utils/mockData";

const Body = () => {
  const [filteredData, setFilteredData] = useState(dataObj);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const filtered = dataObj.filter(data => 
      data.cityName.toLowerCase() === fromCity.toLowerCase() && 
      data.destination.toLowerCase() === toCity.toLowerCase()
    );

    setFilteredData(filtered.length ? filtered : dataObj);
    
    // Debugging: log input values and filtered results
    console.log("From City:", fromCity);
    console.log("To City:", toCity);
    console.log("Filtered Data:", filtered);
  };

  return (
    <div className="min-h-screen w-full relative">
      <DealCard 
        fromCity={fromCity} 
        toCity={toCity} 
        onFromCityChange={(e) => 
          {setFromCity(e.target.value)
          setFilteredData(dataObj);}
        } 
        onToCityChange={(e) => {
          setToCity(e.target.value)
          setFilteredData(dataObj);
        }} 
        onSearch={handleSearch} 
      />
      <div className="flex flex-wrap">
        {filteredData.map((data) => (
          <DestinationCard key={data.id} dataList={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
