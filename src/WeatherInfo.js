import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <main className="Main">
      <div className="weather-app-data">
        <div className="col-md-9 col-sm-4">
          <h1 className="weather-app-city" id="weather-app-city">
            {props.data.city}
          </h1>
          <p className="weather-app-details">
            <span id="time">
              <FormattedDate date={props.data.date} />
            </span>
            <span id="description" className="text-capitalize">
              {props.data.description}
            </span>
            <br />
            Humidity: <strong id="humidity">{props.data.humidity}</strong>,
            Wind:
            <strong id="wind">{props.data.wind}</strong>
          </p>
        </div>
        <div className="weather-app-temp-container col-md-3 col-sm-4">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </main>
  );
}
