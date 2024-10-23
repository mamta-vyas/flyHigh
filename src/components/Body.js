import React from "react";
import DealCard from "./DealCard";
import DestinationCard from "./DestinationCard";
import dataObj from "../utils/mockData";




const Body = () => {
  return (
  
    <div>
      <div className="min-h-screen w-full relative">
       <DealCard/> 
    <div className="flex flex-wrap">
      {/* don't use index as keys it has to be unique 
    not using keys (not acceptable) <<< index as key is the last resolve
    <<< unique id(best practice) 

    */}
    {dataObj.map((data) => (<DestinationCard key={data.id} dataList = {data}/>))}
  
    
       </div>
      
  </div>
 

  </div>
);
};

export default Body;
