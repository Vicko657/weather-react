import React from "react";

export default function WeatherIcon(props) {
  const codemapping = {
    "clear-sky-day": "clear-day",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "overcast-day",
    "few-clouds-night": "overcast-night",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "partly-cloudy-night",
    "broken-clouds-day": "overcast-day",
    "broken-clouds-night": "overcast-night",
    "shower-rain-day": "partly-cloudy-day-rain",
    "shower-rain-night": "partly-cloudy-night-rain",
    "rain-day": "rain",
    "rain-night": "rain",
    "thunderstorm-day": "thunderstorm-day-rain",
    "thunderstorm-night": "thunderstorm-night-rain",
    "snow-day": "overcast-day-snow",
    "snow-night": "extreme-night-snow",
    "mist-day": "mist",
    "mist-night": "mist",
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
