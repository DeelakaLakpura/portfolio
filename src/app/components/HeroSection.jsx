"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "react-typist/dist/Typist.css";
import Lottie from 'react-lottie';
import animationData from './contact.json';




// Background SVG Component
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

const TypingAnimation = () => {
  const phrases = [
    "I am a MERN Stack Developer",
    "I love coding with JavaScript",
    "Creating amazing web applications"
  ];

  const [displayText, setDisplayText] = useState("");
  const typingDelay = 150;
  const pauseDelay = 2000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const typeCharacter = () => {
      if (currentIndex < phrases[currentPhraseIndex].length) {
        setDisplayText(phrases[currentPhraseIndex].slice(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setCurrentIndex(0);
        }, pauseDelay);
      }
    };

    const typingTimeout = setTimeout(() => {
      typeCharacter();
    }, typingDelay);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [currentIndex, currentPhraseIndex, typingDelay]);

  return (
    <span className="text -2xl lg:text-3xl font-semibold text-green-500">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};



// Contact Form Popup Component
const ContactFormPopup = ({ isOpen, togglePopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // Ensure this is defined
  const [message, setMessage] = useState('');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch('/api/sendEmail', { // Make sure it starts with /api
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
  
    const result = await res.json();
  
    if (res.ok) {
      alert(result.message);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert(result.message);
    }
  };
  


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3 transform transition-transform duration-300 scale-100 hover:scale-105">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Contact Me</h2>
              <button onClick={togglePopup} className="text-red-500 hover:text-red-700">
                <i className="fas fa-times fa-lg"></i>
              </button>
            </div>
            <Lottie options={defaultOptions} height={150} width={150} />
            <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 text-black rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 text-black rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 text-black rounded w-full p-2"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={togglePopup}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto"
        >
          Close
        </button>
        <button
          type="submit"
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto"
        >
          Send <i className="fas fa-paper-plane ml-1"></i>
        </button>
      </div>
    </form>
          </div>
        </div>
      )}
    </>
  );
};

// Main Hero Section Component
export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  
  const downloadCV = () => {
    const cvUrl = 'https://firebasestorage.googleapis.com/v0/b/video-app-35cc0.appspot.com/o/CV%20(1).pdf?alt=media&token=9c4c75de-b19c-4bdd-aa29-89509ef6ff99';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank'; 
    link.download = 'Deelaka.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
    { icon: "fas fa-trophy", value: "3+", label: "Honors & Awards" },
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
        <div className="flex">
          <button
            onClick={togglePopup}
            className="mt-4 flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out w-full md:w-auto"
          >
            <i className="fas fa-comment-dots mr-2"></i>
            Contact Me
          </button>

          <button
            className="mt-4 flex items-center justify-center md:bg-blue-900 hover:bg-blue-700 ml-4 text-white font-bold py-2 px-4 rounded animate-pulse w-full md:w-auto"
            onClick={downloadCV}

          >
            <i className="fas fa-download mr-2"></i> Download CV
          </button>
        </div>

      </div>

      {/* Profile Image Section */}
      <div className="relative z-10 flex justify-center items-center mt-8 lg:mt-0 lg:ml-8">
        <img
          src="https://i.ibb.co/tQySgsC/Untitled-removebg-preview-p-Wgg-Tu9tz-transformed.png" // Replace with your actual image path
          alt="Profile"
          className="rounded-full w-60 h-60 border-4 border-green-500 shadow-lg transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={isPopupOpen} togglePopup={togglePopup} />



   
    </div>


 

  );
}


