import React, { useState, useEffect } from 'react';

const DestinationSearch = () => {
  const [placesToVisit, setPlacesToVisit] = useState([]);

  useEffect(() => {
    const availablePlaces = [
      'Statue of Liberty',
      'Eiffel Tower',
      'Mount Fuji',
      'Big Ben',
      'Sydney Opera House',
      'Colosseum',
      'Burj Khalifa',
      'Golden Gate Bridge',
      'Pyramids of Giza',
      'Brandenburg Gate',
    ];
    const updatePlaces = () => {
      setPlacesToVisit(availablePlaces);
    };
    updatePlaces();
  }, []); 

  const handleSearchClick = (place) => {
    const googleSearchUrl = `https://www.google.com/search?q=places to visit ${place}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <div>
      <h1>Places to Visit loki</h1>
      <input
        type="text"
        placeholder="Click to Search"
        onClick={() => handleSearchClick(placesToVisit[5])}
      />
      <ul>
        {placesToVisit.map((place, index) => (
          <li key={index} onClick={() => handleSearchClick(place)}>
            {place}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;
