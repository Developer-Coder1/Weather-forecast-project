import { useState, useEffect } from "react";
import { Header } from "./Header";
import { getWeather } from "./weather";

export function Homepage() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleSearch("London"); // or whatever city you want as default
  }, []);
  async function handleSearch(city) {
    if (!city.trim()) return;
    setError(null);
    const data = await getWeather(city);
    if (data.cod !== 200) {
      setError(data.message || "City not found. Please try again.");
      setWeather(null);
    } else {
      setWeather(data);
    }
  }

  return (
    <>
      <Header onSearch={handleSearch} />

      <div style={{ paddingTop: "80px", padding: "80px 20px 20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && (
          <div className="weather-info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>
              <strong>City:</strong> {weather.name}, {weather.sys.country}
            </p>
            <p>
              <strong>Temperature:</strong> {weather.main.temp}°C (feels like{" "}
              {weather.main.feels_like}°C)
            </p>
            <p>
              <strong>Condition:</strong> {weather.weather[0].description}
            </p>
            <p>
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p>
              <strong>Wind:</strong> {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </>
  );
}
