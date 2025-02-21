import React, { useState } from "react";
import "./WeatherGeoLocation.css";

export default function WeatherGeoLocation({ GeoLocation }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const geoApiKey = process.env.REACT_APP_GEO_API_KEY;

  function handleLocationClick() {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    const cachedCity = localStorage.getItem("userCity");
    if (cachedCity) {
      GeoLocation(cachedCity);
      setIsLoading(false);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, Handleerror);
    } else {
      setIsLoading(false);
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const { coords } = position;
    const { latitude, longitude } = coords;

    setTimeout(() => {
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geoApiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.results && data.results.length > 0) {
            const geoCity =
              data.results[0].components.city ||
              data.results[0].components.town;
            if (geoCity) {
              localStorage.setItem("userCity", geoCity);
              GeoLocation(geoCity);
            } else {
              setError("Could not detect city");
            }
          }
        })
        .catch(() => {
          setIsLoading(false);
          setError("Could not detect city");
        });
    }, 2000);
  }
  function Handleerror(error) {
    setIsLoading(false);
    setError(error.message || "Location access denied");
  }

  return (
    <>
      <button
        onClick={handleLocationClick}
        className="Geobutton"
        title="Your Location"
      >
        <i className="fa-solid fa-location-crosshairs"></i>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </button>
    </>
  );
}
