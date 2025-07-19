import React, { useEffect, useState } from "react";
import "./WeatherLoader.css";

const loadingMessages = [
  "Scanning the skies...",
  "Tracking wind patterns...",
  "Analyzing humidity...",
  "Loading forecast...",
  "Almost there..."
];

const descriptions = [
  "Sunny",
  "Partly Cloudy",
  "Rain Expected",
  "Storm Building",
  "Nightfall"
];

const WeatherLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [description, setDescription] = useState(descriptions[0]);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let interval;

    const typeEffect = () => {
      const fullText = loadingMessages[messageIndex];

      if (isDeleting) {
        charIndex--;
        setTypedText(fullText.substring(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          setMessageIndex((prev) => Math.min(prev + 1, loadingMessages.length - 1));
        }
      } else {
        charIndex++;
        setTypedText(fullText.substring(0, charIndex));
        if (charIndex === fullText.length) {
          isDeleting = true;
        }
      }
    };

    interval = setInterval(typeEffect, isDeleting ? 50 : 80);
    return () => clearInterval(interval);
  }, [messageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.6;
        const descIndex = Math.floor(next / 20);
        if (descIndex < descriptions.length) {
          setDescription(descriptions[descIndex]);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTypedText("Forecast ready!");
          setDescription("All Clear!");
          if (onFinish) onFinish();
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="sky-gradient">
      <div className="loading-card">
        <div className="weather-description visible">{description}</div>
        <div className="loading-text">{typedText}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherLoader;
