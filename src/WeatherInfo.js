import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  const { temperature, windSpeed, city, date, description, humidity, icon } =
    props.data;
  console.log(props.data);
  return (
    <main className="Main">
      <div className="weather-app-data rows">
        <div className="col-7">
          <h1 className="weather-app-city" id="weather-app-city">
            {city}
          </h1>
          <p className="weather-app-details">
            <span id="time">
              <FormattedDate date={date} />
            </span>
            <span id="description" className="text-capitalize">
              {" "}
              {description}
            </span>
            <br />
            Humidity: <strong id="humidity">{humidity}% </strong>| Wind:{" "}
            <strong id="wind"> {windSpeed} km/h</strong>
          </p>
        </div>
        <div className="weather-app-temp-container col-lg-5 col-md-5 col-sm-5">
          <div className="d-flex justify-content-end">
            <WeatherIcon code={icon} alt={description} />
            <WeatherTemperature celsius={temperature} />
          </div>
        </div>
      </div>
    </main>
  );
}
