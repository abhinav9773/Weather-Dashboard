import React, { useEffect, useState, useRef } from "react";
import "./WeatherLoader.css";

const loadingMessages = [
  "Scanning the skies...",
  "Tracking wind patterns...",
  "Analyzing humidity...",
  "Loading forecast...",
  "Almost there...",
];

const WeatherLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const typeInterval = setInterval(
      () => {
        const fullText = loadingMessages[messageIndex];
        let charIndex = charIndexRef.current;
        let isDeleting = isDeletingRef.current;

        if (isDeleting) {
          charIndex--;
          if (charIndex <= 0) {
            isDeleting = false;
            setMessageIndex((prev) =>
              Math.min(prev + 1, loadingMessages.length - 1)
            );
          }
        } else {
          charIndex++;
          if (charIndex >= fullText.length) {
            isDeleting = true;
          }
        }

        charIndexRef.current = charIndex;
        isDeletingRef.current = isDeleting;
        setTypedText(fullText.substring(0, charIndex));
      },
      isDeletingRef.current ? 50 : 80
    );

    return () => clearInterval(typeInterval);
  }, [messageIndex]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.6;

        if (next >= 100) {
          clearInterval(progressInterval);
          setTypedText("Forecast ready!");
          if (onFinish) onFinish();
        }

        return next;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onFinish]);

  return (
    <div className="sky-gradient">
      <div className="loading-card">
        <div className="loading-text">{typedText}</div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherLoader;
