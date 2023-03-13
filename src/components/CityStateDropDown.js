import React, { useState } from 'react'
export default function City() {
  
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const states = [
      { value: "CA", label: "California" },
      { value: "NY", label: "New York" },
      { value: "TX", label: "Texas" },
    ];
    const citiesByState = {
      CA: [
        { value: "LA", label: "Los Angeles" },
        { value: "SF", label: "San Francisco" },
        { value: "SD", label: "San Diego" },
      ],
      NY: [
        { value: "NYC", label: "New York City" },
        { value: "BUF", label: "Buffalo" },
        { value: "ROC", label: "Rochester" },
      ],
      TX: [
        { value: "DAL", label: "Dallas" },
        { value: "HOU", label: "Houston" },
        { value: "AUS", label: "Austin" },
      ],
    };
  
    const handleStateChange = (event) => {
      const stateValue = event.target.value;
      setSelectedState(stateValue);
      setSelectedCity("");
    };
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="state-dropdown">Select a state:</label>
        <select
          id="state-dropdown"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">--Please choose a state--</option>
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="city-dropdown">Select a city:</label>
        <select
          id="city-dropdown"
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedState}
        >
          <option value="">--Please choose a city--</option>
          {selectedState &&
            citiesByState[selectedState].map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
        </select>
      </div>
    );
  };


    