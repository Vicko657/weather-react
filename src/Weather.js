import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [cityName, setCityName] = useState(props.city);

  function handleResponse(response) {
    const { data } = response;
    const { coordinates, temperature, wind, city, time, condition } = data;
    console.log(data);
    const { feels_like, pressure, ...filteredTemperature } = temperature;
    const { current, humidity } = filteredTemperature;
    const { degree, ...filteredWind } = wind;
    const { speed } = filteredWind;
    const windSpeed = speed;
    const { icon_url, ...filteredCondition } = condition;
    const { description, icon } = filteredCondition;

    setWeatherData({
      loaded: true,
      coordinates,
      temperature: Math.round(current),
      windSpeed,
      city,
      date: new Date(time * 1000),
      description,
      humidity,
      icon,
    });
  }

  function search() {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
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
        <WeatherForecast coord={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "The app is loading..";
  }
}
