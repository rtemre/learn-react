"use client"; // VoiceOwl Assement on CoderByte

import React, { useState } from "react";
// import { createRoot } from 'react-dom/client';

type City = "New York" | "Los Angeles" | "London";

type MockWeatherDataType = Record<
  City,
  {
    temperature: string;
    humidity: string;
    windSpeed: string;
  }
>;

type WeatherDataType = {
  temperature: string;
  humidity: string;
  windSpeed: string;
};

export default function WeatherDashboard() {
  // instead of requesting data from an API, use this mock data
  const mockWeatherData: MockWeatherDataType = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherDataType>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchInput !== null) {
      for (const key in mockWeatherData) {
        // Use "as keyof typeof mockWeatherData" to fix the type
        const typedKey = key as keyof typeof mockWeatherData;
        if (searchInput.toLowerCase() === key.toLowerCase()) {
          setWeatherData(mockWeatherData[typedKey]);
        }
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={searchInput === null ? "" : searchInput}
        onChange={handleInputChange}
      />
      <button id="searchButton" onClick={handleSearchClick}>
        Search
      </button>
      <div id="weatherData">
        <div>Temperature: {weatherData?.temperature}</div>
        <div>Humidity: {weatherData?.humidity}</div>
        <div>Wind Speed: {weatherData?.windSpeed}</div>
        <div>City not found.</div>
      </div>
      <div id="previousSearches">hello</div>
    </div>
  );
}

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<WeatherDashboard />);
