import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="search-form" id="search-form">
      <input
        type="search"
        placeholder="Enter a city..."
        className="search-form-input"
        id="search-form-input"
        required
      />
      <input type="submit" value="Search" className="search-form-button" />
    </form>
  );
}
