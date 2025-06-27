import React from "react";

const Forecast = () => {
  const forecast = [
    { day: "Mon", temp: "30°C", condition: "☀️" },
    { day: "Tue", temp: "28°C", condition: "⛅" },
    { day: "Wed", temp: "26°C", condition: "🌧️" },
    { day: "Thu", temp: "27°C", condition: "🌦️" },
    { day: "Fri", temp: "31°C", condition: "☀️" },
  ];

  return (
    <div className="bg-white/20 backdrop-blur-md shadow-md rounded-2xl p-6 text-black border border-white/30">
      <h3 className="text-lg font-semibold text-black mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2 text-center">
        {forecast.map((f, index) => (
          <div key={index} className="bg-indigo-100 rounded-xl py-2">
            <p className="text-sm">{f.day}</p>
            <p className="text-xl">{f.condition}</p>
            <p className="text-sm font-medium">{f.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
