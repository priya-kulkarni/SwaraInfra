import React, { useEffect, useState, useRef, useContext } from "react";
import "../styles/ProgressBar.css";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

function ProgressBar({ progress }) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const progressBarRef = useRef(null);
  const { theme } = useContext(ThemeContext); // Get theme from context

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentProgress(progress); // Fill the progress bar
        } else {
          setCurrentProgress(0); // Reset when it's out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the progress bar is visible
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [progress]);

  return (
    <div className={`progress-bar-container ${theme}`} ref={progressBarRef}>
      <div
        className={`progress ${theme}`} // Apply theme-based styling
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
