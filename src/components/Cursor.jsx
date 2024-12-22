import React, { useEffect, useState } from "react";
import "../styles/Cursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, a");
    textElements.forEach((el) => {
      el.addEventListener("mouseover", addHover);
      el.addEventListener("mouseout", removeHover);
    });

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseover", addHover);
        el.removeEventListener("mouseout", removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className={`ball ${hovered ? "split" : ""}`} />
    </div>
  );
};

export default CustomCursor;
