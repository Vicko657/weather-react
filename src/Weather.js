import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [cityName, setCityName] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coord: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = process.env.REACT_APP_WEATHER_ANON_KEY;
    if (!apiKey) {
      console.error("API key is undefined. Please check your .env file.");
      return;
    }
    const url = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityName(event) {
    setCityName(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-form-input"
            id="search-form-input"
            required
            onChange={handleCityName}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "The app is loading..";
  }
}
