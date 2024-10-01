"use client";
import "react-typist/dist/Typist.css";
import AbstractSvgBackground from './AbstractSvgBackground'
import TypingAnimation from './TypingAnimation'
import { motion } from 'framer-motion';



function HeroSection() {
 

  
  
  return (
    <div className="relative bg-gray-900 mt-2 text-white p-5 lg:px-20 lg:py-24 flex flex-col lg:flex-row justify-between items-center">
      {/* Background SVG */}
      <AbstractSvgBackground />

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 flex-1 space-y-6 lg:space-y-8 text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Hello, Check This Out!
        </h1>
        <TypingAnimation />

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center mt-8 space-x-4 space-y-4 md:space-y-0">
  {[
    { icon: "fas fa-check-circle", value: "50+", label: "Finished Projects" },
    { icon: "fas fa-user-friends", value: "20+", label: "Freelance Clients" },
    { icon: "fas fa-trophy", value: "5+", label: "Honors & Awards" },
  ].map((stat, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center transition-transform duration-500 transform hover:scale-105 bg-gray-800 p-4 rounded-lg shadow-lg space-y-2"
      whileHover={{ scale: 1.1, rotate: 10 }} // Added rotation on hover
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
        opacity: [0.5, 1, 0.5], // Added opacity change for entrance effect
        transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
      }}
    >
      <i className={`${stat.icon} text-green-500 text-3xl`}></i> {/* Increased icon size for better visibility */}
      <span className="text-green-500 font-bold text-lg">{stat.value}</span>
      <span className="text-gray-400 text-sm">{stat.label}</span>
    </motion.div>
  ))}
</div>

        {/* Contact Button */}
        <div className="flex flex-col items-center">
    <div className="flex flex-col md:flex-row md:space-x-4">
        <button
            className="mt-4 flex items-center justify-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bounce-animation w-full md:w-auto"
        >
            <i className="fas fa-download mr-2"></i>
            <a 
                href="https://firebasestorage.googleapis.com/v0/b/video-app-35cc0.appspot.com/o/CV%20(1).pdf?alt=media&token=9c4c75de-b19c-4bdd-aa29-89509ef6ff99" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Download CV
            </a>
        </button>

        <button
            className="mt-4 flex items-center justify-center bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shake-animation w-full md:w-auto"
        >
            <i className="fas fa-comment mr-2"></i>
            <a 
                href="mailto:deelaka.lakpura94@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition transform duration-300 hover:scale-105 hover:text-white"
            >
                Contact Me
            </a>
        </button>
    </div>
</div>


      </div>

      {/* Profile Image Section */}
      <div className="relative z-10 flex justify-center items-center mt-8 lg:mt-0 lg:ml-8">
      <img
        src="https://i.ibb.co/tQySgsC/Untitled-removebg-preview-p-Wgg-Tu9tz-transformed.png" // Replace with your actual image path
        alt="Profile"
        className="rounded-full w-60 h-60 border-4 border-green-500 shadow-lg zoom-animation" // Add the zoom-animation class here
      />
    </div>
    </div>

  );
}
export default HeroSection

