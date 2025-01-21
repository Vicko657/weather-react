import React, { useState } from "react";
import axios from "axios";
import "./Main.css";
import FormattedDate from "./FormattedDate";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

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
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-form-input"
            id="search-form-input"
            required
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
        <main className="Main">
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city" id="weather-app-city">
                {weatherData.city}
              </h1>
              <p className="weather-app-details">
                <span id="time">
                  <FormattedDate date={weatherData.date} />
                </span>
                ,
                <span className="text-capitalize" id="description">
                  {weatherData.description}
                </span>
                <br />
                Humidity: <strong id="humidity">{weatherData.humidity}</strong>,
                Wind:
                <strong id="wind">{weatherData.wind}</strong>
              </p>
            </div>
            <div className="weather-app-temp-container">
              <div id="icon">
                <img
                  className="weather-app-icon"
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />
              </div>
              <div className="weather-app-temp" id="temperature">
                {weatherData.temperature}
              </div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "The app is loading..";
  }
}
