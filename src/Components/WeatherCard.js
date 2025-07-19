import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;
  const current = weatherData;

  const city = current.name;
  const temp = Math.round(current.main.temp);
  const description = current.weather[0].main;

  const getWeatherIcon = (main) => {
    switch (main.toLowerCase()) {
      case "clouds":
        return <WiCloud size={40} className="text-gray-500" />;
      case "rain":
        return <WiRain size={40} className="text-blue-500" />;
      case "snow":
        return <WiSnow size={40} className="text-white" />;
      case "thunderstorm":
        return <WiThunderstorm size={40} className="text-yellow-600" />;
      case "clear":
      default:
        return <WiDaySunny size={40} className="text-yellow-400" />;
    }
  };

  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 text-center space-y-4 border border-white/30">
      <h2 className="text-2xl font-semibold text-black">{city}</h2>
      <p className="text-6xl font-bold text-blue-700">{temp}°C</p>

      <div className="flex items-center justify-center gap-2">
        {getWeatherIcon(description)}
        <p className="text-lg text-black">{description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
