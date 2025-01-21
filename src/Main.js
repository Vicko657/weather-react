import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <main className="Main">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="weather-app-city">
            {props.city}
          </h1>
          <p className="weather-app-details">
            <span id="time">{props.time}</span>,
            <span id="description">{props.description}</span>
            <br />
            Humidity: <strong id="humidity">{props.humidity}</strong>, Wind:
            <strong id="wind">{props.wind}</strong>
          </p>
        </div>
        <div className="weather-app-temp-container">
          <div id="icon">{props.icon}</div>
          <div className="weather-app-temp" id="temperature">
            {props.temp}
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
    </main>
  );
}
