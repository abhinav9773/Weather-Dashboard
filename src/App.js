import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import WeatherCard from "./Components/WeatherCard";
import WeatherDetails from "./Components/WeatherDetails";
import Clock from "./Components/Clock";
import Tip from "./Components/Tip";
import Forecast from "./Components/Forecast";
import Loading from "./Components/Loading";
import Toggle from "./Components/Toggle";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("day");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  const backgroundClass =
    theme === "day"
      ? "bg-gradient-to-r from-sky-300 via-purple-200 to-pink-200"
      : "bg-gray-800";

  const textClass = theme === "day" ? "text-gray-800" : "text-white";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col items-center ${backgroundClass} bg-[length:200%_200%] animate-gradient-x p-6 ${textClass}`}
    >
      <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <div className="w-full sm:w-auto flex-1">
          <SearchBar theme={theme} setWeatherData={setWeatherData} />
        </div>
        <div className="self-end sm:self-auto">
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="w-full max-w-[900px] mx-auto space-y-6 px-2 sm:px-4">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeatherCard weatherData={weatherData?.current} />
          <Clock />
        </div>

        <WeatherDetails weatherData={weatherData?.current} />
        <Forecast forecastData={weatherData?.forecast?.list} />
        <Tip weatherData={weatherData?.current} />
      </div>
    </div>
  );
}

export default App;
