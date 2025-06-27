import React from "react";

const WeatherDetails = () => {
  // Dummy data
  const weatherInfo = [
    { label: "Humidity", value: "72%", icon: "💧" },
    { label: "Wind Speed", value: "15 km/h", icon: "🌬️" },
    { label: "Pressure", value: "1015 hPa", icon: "📈" },
    { label: "Visibility", value: "8 km", icon: "👁️" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {weatherInfo.map((item, index) => (
        <div
          key={index}
          className="bg-white/20 backdrop-blur-md shadow-md rounded-2xl p-3 text-center space-y-2 border border-white/30"
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
