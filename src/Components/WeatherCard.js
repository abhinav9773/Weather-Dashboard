import React from "react";
import { WiDaySunny } from "react-icons/wi";

const WeatherCard = () => {
  return (
    <div className="bg-white/20 backdrop-blur-md shadow-md rounded-2xl p-6 text-center space-y-4 border border-white/30">
      <h2 className="text-2xl font-semibold text-black">Delhi</h2>
      <p className="text-6xl font-bold text-blue-500">32°C</p>

      <div className="flex items-center justify-center gap-2">
        <WiDaySunny size={40} className="text-yellow-400" />
        <p className="text-lg text-black">Sunny</p>
      </div>

      <div className="flex justify-center items-center gap-4 text-sm text-black mt-2">
        <span>💧 Humidity: 45%</span>
        <span>🌬 Wind: 12 km/h</span>
      </div>
    </div>
  );
};

export default WeatherCard;
