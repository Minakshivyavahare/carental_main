import React from "react";

const Loader = ({ size = "medium", className, text = "Loading..." }) => {
  // Map size to Tailwind classes
  const sizeClasses = {
    small: "w-10 h-10",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };
  
  // Map icon size based on loader size
  const iconSize = {
    small: "w-5 h-5",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className || ""}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div 
          className={`rounded-full border-t-transparent border-8 border-indigo-500/80 animate-spin ${sizeClasses[size]}`} 
          style={{ animationDuration: "2s" }}
        ></div>
        
        {/* Center car icon */}
        <div className="absolute">
          <svg 
            viewBox="0 0 24 24" 
            className={`animate-pulse text-indigo-400 ${iconSize[size]}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
      </div>
      
      {/* Loading text */}
      {text && (
        <div className="mt-4">
          <p className="font-medium text-indigo-300">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Loader;
