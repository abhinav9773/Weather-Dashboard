import React, { useEffect, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString("en-GB");
  const dateString = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white/50 shadow-md rounded-2xl p-6 flex flex-col items-center justify-center h-full border border-white/30">
      <p className="text-5xl font-mono text-black">{timeString}</p>
      <p className="text-lg text-gray-900 mt-2">{dateString}</p>
    </div>
  );
};

export default Clock;
