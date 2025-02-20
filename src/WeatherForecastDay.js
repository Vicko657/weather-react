import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const { wind, ...filteredData } = props.data;
  const { condition, temperature, time } = filteredData;
  const { icon_url, ...filteredCondition } = condition;
  const { description, icon } = filteredCondition;
  const { day, humidity, ...filteredTemperature } = temperature;
  console.log(filteredTemperature);
  const { maximum, minimum } = filteredTemperature;

  function maxTemp() {
    let maxTemperature = Math.round(maximum);
    return `${maxTemperature}°`;
  }
  function minTemp() {
    let minTemperature = Math.round(minimum);
    return `${minTemperature}°`;
  }

  function dayOfTheWeek() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(time * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="">
      <div className="weather-forecast-date">{dayOfTheWeek()}</div>
      <div className="weather-forecast-icon">
        <WeatherIcon code={icon} alt={description} />
      </div>
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">{maxTemp()} </span>
        <span className="weather-forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
