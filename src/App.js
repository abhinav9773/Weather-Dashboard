import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import WeatherCard from "./Components/WeatherCard";
import WeatherDetails from "./Components/WeatherDetails";
import Clock from "./Components/Clock";
import Tip from "./Components/Tip";
import Forecast from "./Components/Forecast";
import HourlyGraph from "./Components/HourlyGraph";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-300 via-purple-200 to-pink-200 bg-[length:200%_200%] animate-gradient-x p-6 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-5 px-4">
        <SearchBar />
        <Header />
        <div className="grid md:grid-cols-2 gap-6">
          <WeatherCard />
          <Clock />
        </div>
        <WeatherDetails />
        <HourlyGraph />
        <div className="grid md:grid-cols-2 gap-6">
          <Tip />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
