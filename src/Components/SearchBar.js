import React, { useState, useEffect } from "react";

const SearchBar = ({ theme, setWeatherData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const response = await fetch(
        `https://weather-backend-kyxe.onrender.com/weather?city=${query}`
      );
      const data = await response.json();

      if (response.ok && data.current && data.forecast) {
        setWeatherData(data);
      } else {
        alert(data.error || "City not found!");
      }
    } catch (error) {
      alert("Failed to fetch weather data.");
    }
    setQuery("");
  };

  useEffect(() => {
    const fetchDefaultCity = async () => {
      try {
        const response = await fetch(
          `https://weather-backend-kyxe.onrender.com/weather?city=Delhi`
        );
        const data = await response.json();

        if (response.ok && data.current && data.forecast) {
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Failed to fetch default city weather:", error);
      }
    };
    fetchDefaultCity();
  }, [setWeatherData]);

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center items-center mt-2">
        <div
          className={`flex w-full max-w-2xl rounded-xl shadow-md overflow-hidden ${
            theme === "day"
              ? "bg-white/50 text-gray-800"
              : "bg-white/30 text-white"
          }`}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a city..."
            className={`flex-grow px-4 py-3 bg-transparent focus:outline-none ${
              theme === "day" ? "placeholder-gray-600" : "placeholder-white/60"
            }`}
          />
          <button
            type="submit"
            className="text-white px-6 py-3 hover:bg-blue-500 transition-all"
          >
            🔍
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
