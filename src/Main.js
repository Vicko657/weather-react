import React, { useState } from "react";
import axios from "axios";
import "./Main.css";
import WeatherInfo from "./WeatherInfo";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [cityName, setCityName] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
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
      </div>
    );
  } else {
    search();
    return "The app is loading..";
  }
}
