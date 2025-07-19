import React from "react";

const Forecast = ({ forecastData }) => {
  if (!forecastData) return null;

  const dailyForecasts = forecastData.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 text-black border border-white/30">
      <h3 className="text-lg font-semibold text-black mb-5">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4 text-center">
        {dailyForecasts.slice(0, 5).map((day, index) => (
          <div key={index} className="bg-indigo-100 rounded-xl py-4">
            <p className="text-sm">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <p className="text-xl">
              {day.weather[0].main === "Rain"
                ? "🌧️"
                : day.weather[0].main === "Clouds"
                ? "⛅"
                : day.weather[0].main === "Clear"
                ? "☀️"
                : "🌥️"}
            </p>
            <p className="text-sm font-medium">{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
