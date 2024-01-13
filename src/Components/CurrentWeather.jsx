import {
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiDaySunny,
  WiDayCloudy,
} from "react-icons/wi";
import "./CurrentWeather.css";
import TempConverter from "./TempConverter";

// eslint-disable-next-line react/prop-types
const CurrentWeather = ({ weatherData }) => {
  return (
    <div className="current-weather-container">
      {/* <h1>Weather Data</h1> */}
      {weatherData && (
        <>
          <div className="weather-detail-con">
            <div className="weather-details">
              <h3 className="title">
                {/* eslint-disable-next-line react/prop-types */}
                <p> {weatherData.name}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <span>{weatherData.sys.country}</span>
              </h3>
              <div className="weather-temp">
                <WiDayCloudy size={60} />
                <span>
                  {/* {weatherData.main.temp} °{unit === "metric" ? "C" : "F"} */}
                  {/* eslint-disable-next-line react/prop-types */}
                  <TempConverter celsius={weatherData.main.temp} />
                </span>
              </div>
            </div>

            <div className="weather-info">
              <p>
              {/* eslint-disable-next-line react/prop-types */}
                Humidity: {weatherData.main.humidity}%
                <span>
                  <WiHumidity size={30} />
                </span>{" "}
              </p>
              <p>
                {/* eslint-disable-next-line react/prop-types */}
                Wind: {weatherData.wind.speed} m/s, {weatherData.wind.deg}°
                <WiStrongWind size={30} />
              </p>
              {/* eslint-disable-next-line react/prop-types */}
              <p>
                {/* eslint-disable-next-line react/prop-types */}
                Description: {weatherData.weather[0].description}{" "}
                <span>
                  <WiDaySunny size={20} style={{ color: "orange" }} />
                </span>
              </p>
              <p>
                {/* eslint-disable-next-line react/prop-types */}
                Max/Min: {weatherData.main.temp_max}/{weatherData.main.temp_min}
                <span>
                  <WiThermometer size={20} style={{ color: "blue" }} />
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
