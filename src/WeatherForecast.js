import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loader, setLoader] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoader(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoader(true);
  }

  if (loader) {
    return (
      <div
        className="weather-forecast row d-flex justify-content-center"
        id="forecast"
      >
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-lg-2 col-3 weather-forecast-bg" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "t6a8db7630cb9o483fccd0984e54c304";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
