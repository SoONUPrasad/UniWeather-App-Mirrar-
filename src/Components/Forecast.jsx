import {
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherDownpour,
} from "react-icons/ti";

import "./Forecast.css";
import TempConverter from "./TempConverter";

// eslint-disable-next-line react/prop-types
const Forecast = ({ forecastData }) => {


  const filterFiveDayForecast = () => {
    // eslint-disable-next-line react/prop-types
    if (forecastData && forecastData.list) {
      const currentDate = new Date();
      // eslint-disable-next-line react/prop-types
      const upcomingDays = forecastData.list.filter((item) => {
        const itemDate = new Date(item.dt_txt + 10);
        return itemDate > currentDate;
      });

      return upcomingDays.slice(0, 5);
    }
    return [];
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return <TiWeatherPartlySunny size={30} />;
      case "01n":
        return <TiWeatherPartlySunny size={30} />;
      case "02d":
        return <TiWeatherCloudy size={30} />;
      case "02n":
        return <TiWeatherCloudy size={30} />;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <TiWeatherPartlySunny size={30} />;
      case "09d":
      case "09n":
        return <TiWeatherDownpour size={30} />;
      case "10d":
      case "10n":
        return <TiWeatherDownpour size={30} />;
      case "11d":
      case "11n":
        return <TiWeatherDownpour size={30} />;
      case "13d":
      case "13n":
        return <TiWeatherPartlySunny size={30} />;
      case "50d":
      case "50n":
        return <TiWeatherPartlySunny size={30} />;
      default:
        return null;
    }
  };
  return (
    <>
      {/* <h1>ForeCast</h1> */}
      {forecastData && (
        <div className="forecast-container">
          <h2>5-Day Forecast</h2>
          <div className="forecast-info">
            {filterFiveDayForecast().map((item, index) => (
              <div key={index} className="forecast-item">
                <p>{item.dt_txt}</p>
                <p className="forecast-temp">
                  <TempConverter celsius={item.main.temp} />
                </p>
                <p>{getWeatherIcon(item.weather[0].icon)}</p>
                <p>{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};


export default Forecast;
