import dayjs from "dayjs";
import cloudy from "../assets/Images/cloudy.png";
import { useState } from "react";
import searchIcon from "../assets/Images/magnifying-glass.png";
import "./Header.css";

export function Header({ onSearch }) {
  const [city, setCity] = useState("");
  const today = dayjs().format("dddd, MMMM D, YYYY");

  function handleSearch() {
    onSearch(city);
  }

  return (
    <>
      <div className="mainheader">
        <div className="welcome">
          <p>
            <img src={cloudy} className="cloudy" /> Welcome to the Weather
            Forecaster
          </p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a city or town"
            value={city}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            onChange={(e) => setCity(e.target.value)}
            className="searchbar"
          />
          <button onClick={handleSearch} className="searchButton">
            <img src={searchIcon} className="searchIcon" />
          </button>
        </div>

        <div className="date">
          <strong>{today}</strong>
        </div>
      </div>
    </>
  );
}

