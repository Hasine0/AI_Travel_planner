// src/components/LocationAutoComplete.jsx
import React, { useState } from 'react';

const LocationAutoComplete = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const res = await fetch(`https://photon.komoot.io/api/?q=${value}&limit=5`);
      const data = await res.json();
      setSuggestions(data.features);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (place) => {
    setQuery(place.properties.name + ', ' + (place.properties.city || '') + ', ' + place.properties.country);
    setSuggestions([]);
    onSelect(place);
  };

  return (
    <div className="relative">
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Search your destination..."
        value={query}
        onChange={handleInput}
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded shadow z-10 max-h-48 overflow-y-auto">
          {suggestions.map((place, i) => (
            <li
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(place)}
            >
              {place.properties.name}, {place.properties.city}, {place.properties.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutoComplete;
