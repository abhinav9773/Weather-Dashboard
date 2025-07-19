import React from "react";

const Header = () => {
  const time = new Date().getHours();
  let greeting = "";
  if (time < 12 && time >= 0) {
    greeting = "Good Morning!🌤️";
  } else if (time < 17 && time >= 12) {
    greeting = "Good Afternoon!☀️";
  } else {
    greeting = "Good Evening!🌙";
  }
  return (
    <div className="bg-white/50 backdrop-blur-md shadow-md rounded-2xl p-6 text-white border border-white/30">
      <h1 className="text-4xl font-bold text-black mb-8 ">{greeting}</h1>
      <p className="text-black">Welcome to your Weather Dashboard</p>
    </div>
  );
};

export default Header;
