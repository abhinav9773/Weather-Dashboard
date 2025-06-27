import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <div className="flex w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for a city..."
          className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition-all">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
