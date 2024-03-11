import React, { useState, useEffect } from 'react';

const PlaceSearch = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const availablePlaces = [
      'New York',
      'Paris',
      'Tokyo',
      'London',
      'Sydney',
      'Rome',
      'Dubai',
      'San Francisco',
      'Cairo',
      'Berlin',
      'Australia',
      'Newzland',
    ];

    const updatePlaces = () => {
      const randomPlaces = getRandomSubset(availablePlaces, 10);
      setPlaces(randomPlaces);
    };
    updatePlaces();
   }, []); 
   const getRandomSubset = (array, size) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
   };

   return (
    <div>
      <h1>Places Search Here</h1>
      <button onClick={() => setPlaces([])}>Clear Places</button>
      <input
        type="text"
        placeholder="Click to Search"
        onClick={() => setPlaces([])}
      />
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceSearch;
