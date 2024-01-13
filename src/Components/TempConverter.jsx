import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TempConverter = ({ celsius }) => {
  const [unit, setUnit] = useState("Celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  return (
    <>
      <strong>{unit === 'Celsius' ? Math.round(celsius) : Math.round((celsius * 9) / 5 + 32)}</strong>
      <span>
        {unit === 'Celsius' ? '°C' : <a href="/" onClick={showCelsius}>°C</a>} |{' '}
        {unit === 'Fahrenheit' ? '°F' : <a href="/" onClick={showFahrenheit}>°F</a>}
      </span>
    </>
  );
}

export default TempConverter;
