import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="relative flex items-center justify-center w-40 h-40"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity }}
      >
        {/* SVG Circle Loader */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="100%" stopColor="#D0021B" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="75"
            className="transition-transform duration-1000 ease-in-out"
          />
        </svg>

        {/* Pulsing Dot */}
        <motion.div
          className="absolute w-8 h-8 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            loop: Infinity,
          }}
        />
      </motion.div>

      <motion.div
        className="mt-4 text-xl font-bold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
