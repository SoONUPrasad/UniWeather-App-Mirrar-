import { useState } from "react";
import axios from "axios";
import Forecast from "./Components/Forecast";
import CurrentWeather from "./Components/CurrentWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [foreCast, setForeCast] = useState(null);

  const API_KEY = "f2f353cd75504bd75cd271b80c8ff2cf";

  const handleSearch = async () => {
    try {
      setCity("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      // console.log(response);
      setWeatherData(response.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      //   console.log(forecastResponse);
      setForeCast(forecastResponse.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City Name Not Correct . Please check your city name.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <CurrentWeather weatherData={weatherData} />
        <Forecast forecastData={foreCast} />
      </div>
    </>
  );
}

export default App;
