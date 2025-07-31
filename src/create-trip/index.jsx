// src/pages/CreateTrip.jsx
import React, { useState } from 'react';
import LocationAutoComplete from "../components/ui/LocationAutoComplete";


const CreateTrip = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    console.log('Selected Place:', place);
  };

  return (
    <div className="p-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10">
      <h2 className="font-bold text-3xl">Tell Us About Your Trip</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Help us understand your travel preferences—We’ll take care of the rest!
      </p>

      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">What is the destination of your choice?</h2>
        <LocationAutoComplete onSelect={handlePlaceSelect} />
      </div>

    
    </div>
  );
};

export default CreateTrip;
