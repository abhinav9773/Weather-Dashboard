import React from "react";

const Tip = () => {
  return (
    <div className="bg-white/20 backdrop-blur-md shadow-md rounded-2xl p-6 border border-white/30 text-black dark:text-white">
      <h2 className="text-2xl font-semibold mb-2">💡 Weather Tip</h2>
      <p className="bg-yellow-100/30 backdrop-blur-sm text-yellow-900 dark:text-yellow-200 border border-yellow-300/40 rounded-xl px-4 py-3 shadow-sm">
        ☀️ Stay hydrated and avoid direct sunlight during peak afternoon hours.
        <br />
        👕 Wear light-colored and breathable clothes.
        <br />
        🧴 Apply sunscreen if you're going out.
      </p>
    </div>
  );
};

export default Tip;
