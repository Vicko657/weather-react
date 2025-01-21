import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <main className="Main">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="weather-app-city">
            {props.data.city}
          </h1>
          <p className="weather-app-details text-capitalize">
            <span id="time">
              <FormattedDate date={props.data.date} />
            </span>
            <span id="description">{props.data.description}</span>
            <br />
            Humidity: <strong id="humidity">{props.data.humidity}</strong>,
            Wind:
            <strong id="wind">{props.data.wind}</strong>
          </p>
        </div>
        <div className="weather-app-temp-container">
          <div id="icon">
            <img
              className="weather-app-icon"
              src={props.data.iconUrl}
              alt={props.data.description}
            />
          </div>
          <div className="weather-app-temp" id="temperature">
            {props.data.temperature}
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
    </main>
  );
}
