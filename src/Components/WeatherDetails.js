import React from "react";

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null;
  const current = weatherData;
  const weatherInfo = [
    {
      label: "Humidity",
      value: `${current.main.humidity}%`,
      icon: "💧",
    },
    {
      label: "Wind Speed",
      value: `${current.wind.speed} km/h`,
      icon: "🌬️",
    },
    {
      label: "Pressure",
      value: `${current.main.pressure} hPa`,
      icon: "📈",
    },
    {
      label: "Visibility",
      value: `${current.visibility / 1000} km`,
      icon: "👀",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {weatherInfo.map((item, index) => (
        <div
          key={index}
          className="bg-white/50 shadow-md rounded-2xl p-3 text-center space-y-2 border border-white/30"
        >
          <div className="text-2xl">{item.icon}</div>
          <div className="text-black font-semibold">{item.label}</div>
          <div className="text-lg text-black">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
