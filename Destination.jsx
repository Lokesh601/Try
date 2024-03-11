import React, { useState, useEffect } from 'react';

const DestinationSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
      ' Paris - France',               
     'Dubai - United Arab Emirates',
      'London - United Kingdom',
      'Bangkok - Thailand',
      'New York City - United States',
      'Singapore - Singapore',
       'Tokyo - Japan',
      'Kuala Lumpur - Malaysia',
      'Rome - Italy',
      'Phuket - Thailand',
      'Macau - Macau    ',
       'Delhi - India    ',
       'Miami - United States',
       'Hong Kong - China',
       'Madrid - Spain   ',
       'Bali - Indonesia ',
       'Mumbai - India   ',
      'Mecca - Saudi Arabia',
       'Taipei - Taiwan  ',
       'Amsterdam - Netherlands',
       'Prague - Czech Republic',
       'Seoul - South Korea',
       'Barcelona - Spain',
        'Shenzhen - China ',
      'Berlin - Germany ',
      'Milan - Italy    ',
      'Cancun - Mexico  ',
      'Agra - India     ',
      'Las Vegas - United States',
       'Pattaya - Thailand',
       'Antalya - Turkey ',
       'Denpasar - Indonesia',
       'Osaka - Japan    ',
       'Los Angeles - United States',
       'Vienna - Austria ',
       'Istanbul - Turkey',
       'Shanghai - China ',
       'Johor Bahru - Malaysia',
       'Johannesburg - South Africa',
       'Riyadh - Saudi Arabia',
       'Ho Chi Minh City - Vietnam',
        'Venice - Italy   ',
        'Orlando - United States',
        'Chennai - India  ',
       'Jaipur - India   ',
       'Athens - Greece  ',
       'Dublin - Ireland ',
       'Florence - Italy ',
        'Moscow - Russia',
        'Toronto - Canada',
    ];

    const filterPlaces = () => {
      const filteredResults = availablePlaces.filter(place =>
        place.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    };
    filterPlaces();
  }, [searchQuery]); 

  const handleSearchClick = (place) => {
    const googleSearchUrl = `https://www.google.com/search?q=places to visit ${place}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <div>
      <h1>Places to Visit Vicky</h1>
      <input
        type="text"
        placeholder="Enter a place to search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {searchResults.map((place, index) => (
          <li key={index} onClick={() => handleSearchClick(place)}>
            {place}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;
