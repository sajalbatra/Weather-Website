import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Weatherdiv from '../weatherdiv/Weatherdiv';
import axios from 'axios';
import "./searchbar.scss";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const formRef = useRef(null);
  const [temperatureCelsius, setTemperatureCelsius] = useState(null);
  const [mainWeather, setMainWeather] = useState(null);

  const handleCitySearch = async (event) => {
    event.preventDefault();
    console.log("Searching for:", searchValue);

    const APIKEY = '9f5bff9bab134208922d4d64daf51892';

    try {
      const geoResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${APIKEY}`);
      
      // Check if geoResponse.data is not empty and has the expected structure
      if (geoResponse.data.length > 0 && geoResponse.data[0].lat && geoResponse.data[0].lon) {
        const location = geoResponse.data[0];

        const lat = location.lat;
        const lon = location.lon;

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);

        // Check if weatherResponse.data has the expected structure
        if (weatherResponse.data.main && weatherResponse.data.weather && weatherResponse.data.weather[0].main) {
          const temperatureFahrenheit = weatherResponse.data.main.temp;
          const mainWeather = weatherResponse.data.weather[0].main;

          console.log("Temperature (Fahrenheit):", temperatureFahrenheit);
          console.log("Main Weather:", mainWeather);

          // Convert temperature from Fahrenheit to Celsius
          const temperatureCelsius = (((temperatureFahrenheit - 217) - 32) * 5 / 9).toFixed(2);
          console.log("Temperature (Celsius):", temperatureCelsius);

          // Set state for temperatureCelsius and mainWeather
          setTemperatureCelsius(temperatureCelsius);
          setMainWeather(mainWeather);
        } else {
          console.log("Weather data not available in the response.");
        }
      } else {
        console.log("Location data not available in the response.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainDiv">
      <form ref={formRef} onSubmit={handleCitySearch}>
        <div className="searchDiv">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            className="searchbar"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <span className="search_icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>

          <button className="searchbutton" type="submit">
            Click Me
          </button>
        </div>
        <Weatherdiv searchValue={searchValue} temperature={temperatureCelsius} main={mainWeather} />
      </form>
    </div>
  );
};

export default Searchbar;
