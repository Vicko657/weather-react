import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}°`;
  }
  function minTemp() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="">
      <div className="weather-forecast-date">{day()}</div>
      <div className="weather-forecast-icon">
        <WeatherIcon code={props.data.condition.icon} />
      </div>
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">{maxTemp()} </span>
        <span className="weather-forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
