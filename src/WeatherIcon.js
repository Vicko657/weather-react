import React from "react";

export default function WeatherIcon(props) {
  const codemapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rain",
    "09n": "rain",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-night-rain",
    "11d": "thunderstorms",
    "11n": "thunderstorms",
    "13d": "partly-cloudy-day-snow",
    "13n": "partly-cloudy-day-snow",
    "50d": "mist",
    "50n": "mist",
  };
  return (
    <div id="icon">
      <img
        className="weather-app-icon"
        src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${
          codemapping[props.code]
        }.svg`}
        alt={props.alt}
      />
    </div>
  );
}
