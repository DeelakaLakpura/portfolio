// AbstractSvgBackground.jsx
"use client";
import { useState, useEffect } from "react";

const AbstractSvgBackground = () => {
    const svgBackgroundAnimation = {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 2, ease: "easeInOut" },
    };
  
  
  
    
  
    return (
      <motion.svg
        className="absolute inset-0 z-0"
        {...svgBackgroundAnimation}
        initial="initial"
        animate="animate"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#444", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#222", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bgGradient)" rx="20" />
        <circle cx="15%" cy="15%" r="50" fill="rgba(255, 255, 255, 0.1)" />
        <circle cx="25%" cy="80%" r="40" fill="rgba(255, 255, 255, 0.2)" />
        <circle cx="75%" cy="25%" r="60" fill="rgba(255, 255, 255, 0.15)" />
        <circle cx="85%" cy="70%" r="30" fill="rgba(255, 255, 255, 0.1)" />
        <polygon points="50,10 90,50 50,90 10,50" fill="rgba(200, 200, 200, 0.3)" />
        <polygon points="70,20 110,60 70,100 30,60" fill="rgba(150, 150, 150, 0.3)" />
        <path d="M 10 90 C 40 20, 60 20, 90 90" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" fill="none" />
        <path d="M 20 50 Q 40 80, 70 40" stroke="rgba(200, 200, 200, 0.5)" strokeWidth="2" fill="none" />
        <rect x="25%" y="80%" width="15%" height="15%" fill="rgba(200, 200, 200, 0.3)" rx="5" />
        <rect x="75%" y="10%" width="20%" height="20%" fill="rgba(150, 150, 150, 0.3)" rx="10" />
        <rect x="5%" y="40%" width="5%" height="5%" fill="rgba(255, 255, 255, 0.2)" />
        <rect x="90%" y="85%" width="5%" height="5%" fill="rgba(255, 255, 255, 0.2)" />
      </motion.svg>
    );
  };
export default AbstractSvgBackground;
