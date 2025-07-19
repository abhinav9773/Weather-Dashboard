import React from "react";

const Tip = ({ weatherData }) => {
  const temp = weatherData?.main?.temp;
  let tip = "";

  if (temp >= 36) {
    tip = `🔥 It's extremely hot! Stay indoors during peak hours, hydrate often, and wear sunscreen.`;
  } else if (temp >= 30) {
    tip = `☀️ Stay hydrated and avoid direct sunlight during peak afternoon hours.
👕 Wear light-colored and breathable clothes.
🧴 Apply sunscreen if you're going out.`;
  } else if (temp >= 20) {
    tip = `🌤️ It's pleasant! Carry a light jacket if you're out in the evening.`;
  } else if (temp >= 10) {
    tip = `🧥 It's getting cold. Dress in layers and keep warm.`;
  } else if (temp < 10) {
    tip = `❄️ Cold weather! Wear woollens, stay warm, and avoid early morning chills.`;
  } else {
    tip = `🌈 Weather data not available.`;
  }

  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 border border-white/30 text-black dark:text-white">
      <h2 className="text-2xl font-semibold mb-2">💡 Weather Tip</h2>
      <p className="bg-yellow-100/30 backdrop-blur-sm text-yellow-900 dark:text-yellow-200 border border-yellow-300/40 rounded-xl px-4 py-6 shadow-sm whitespace-pre-line">
        {tip}
      </p>
    </div>
  );
};

export default Tip;
