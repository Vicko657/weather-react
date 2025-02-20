import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const celsius = props.celsius;

  const [unit, setUnit] = useState("celsius");
  function convertToFathrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="weather-app-temp" id="temperature">
          {Math.round(celsius)}
        </span>
        <span className="weather-app-unit">
          °C |{" "}
          <a className="unit" href="/" onClick={convertToFathrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="weather-app-temp" id="temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="weather-app-unit">
          <a className="unit" href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
