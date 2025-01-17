import React from "react";
const ArrowIcon = ({ bgColor = "#143761" }) => {
    return (
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-lg`}
        style={{ backgroundColor: bgColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-12 h-12"
        >
          <path d="M9 5L16 12L9 19" />
        </svg>
      </div>
    );
  };
  
  export default ArrowIcon;
  ;