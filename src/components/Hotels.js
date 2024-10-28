import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Hotels = () => {
  const [hotels, setHotels] = useState([]); // State to store fetched hotels
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [hasMore, setHasMore] = useState(true); // State to manage if more hotels are available
  const [page, setPage] = useState(1); // State to manage pagination

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/c/a3c3-8617-4b29-8365?page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log("API Response:", data); // Log the full response

      // Filter out duplicates based on hotel id
      const newHotels = data.filter(hotel => !hotels.some(existingHotel => existingHotel.id === hotel.id));
      setHotels(prevHotels => [...prevHotels, ...newHotels]);
      
      // Check if there are more hotels based on the response
      setHasMore(newHotels.length > 0);

    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData when component mounts
  }, [page]); // Fetch data whenever the page changes

  if (loading && page === 1) return <p>Loading...</p>; // Show loading state only on first load
  if (error) return <p>Error: {error}</p>; // Show error message if any

  return (
    <InfiniteScroll
      dataLength={hotels.length} // Length of the hotel array
      next={() => setPage(prevPage => prevPage + 1)} // Function to call on scroll
      hasMore={hasMore} // Flag to indicate if more data is available
      loader={<p>Loading more hotels...</p>} // Loader component while fetching more hotels
      endMessage={<p>No more hotels available.</p>} // Message when no more hotels are available
    >
      <div className='flex flex-wrap justify-center'>
        {hotels.map(hotel => (
          <div 
            key={hotel.id}
            className='m-4 w-[300px] h-[300px] border border-solid border-black hover:scale-105 hover:shadow-lg border-opacity-10 bg-gray-50 hover:bg-gray-100 transition-all duration-500 rounded-xl cursor-pointer'
          >
            <img 
              className='h-[150px] w-full rounded-t-xl'
              src={hotel.image} 
              alt={hotel.name} 
            />
            <div className='p-2'>
              <h2 className='font-semibold'>{hotel.name}</h2>
              <p>Location: {hotel.location}</p>
              <p>Price: ₹{hotel.price}</p>
              <p>Availability: {hotel.availability ? "Available" : "Not Available"}</p>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Hotels;
