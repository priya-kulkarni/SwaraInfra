// SkeletonLoader.js
import React from "react";
import "../styles/Loader.css"; // Create the CSS for the loader

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image"></div>
      <div className="skeleton-text">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
