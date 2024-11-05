"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        {/* Left Column: Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold text-green-400 mb-4 animate-pulse">
            DEELAKA LAKPURA
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
          Software Developer &#38; UI/UX Designer. Passionate about creating innovative and user-friendly applications that enhance the user experience and solve real-world problems.
          </p>
          <motion.a
            href="mailto:deelaka@gmail.com"
            className="bg-green-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-lg transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Middle Column: Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl font-bold text-green-400 mb-4">My Skills</h3>
          <div className="grid grid-cols-2 gap-4">
  {["React", "Flutter", "Tailwind CSS", "Node.js"].map((skill, index) => (
    <motion.div
      key={index}
      className="flex items-center bg-gray-700 p-3 rounded-lg shadow-lg"
      whileHover={{ scale: 1.1, color: "#A0AEC0" }}
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and shifted down
      animate={{ opacity: 1, y: 0 }} // Fade in and bounce to the original position
      transition={{
        type: "spring", // Use spring animation for a bouncing effect
        stiffness: 100, // Control the spring's stiffness
        damping: 10, // Control the bounce damping
        duration: 0.8, // Duration of the animation
        delay: index * 0.3 // Delay each item for a staggered effect
      }}
    >
      <span className="text-gray-400 text-lg">{skill}</span>
    </motion.div>
  ))}
</div>
        </motion.div>

        {/* Right Column: Social Media & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl font-bold text-green-400 mb-4">Connect With Me</h3>
          <div className="flex justify-center text-center md:justify-start space-x-8 mb-4">
            {["facebook", "github", "linkedin"].map((icon) => (
              <motion.a
                key={icon}
                href={`https://www.${icon}.com/deelaka.lakpura`}
                className="text-gray-400 hover:text-green-400 transition duration-300 text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <i className={`fab fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-gray-500">Follow me for the latest updates!</p>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-gray-500 relative z-10">
        <motion.p
          animate={{ y: [0, -10, 0] }}
          transition={{ loop: Infinity, duration: 2 }}
          className="text-lg"
        >
          &copy; {currentYear} <a href="https://deelakalakpura.netlify.app/" className="text-green-400">Deelaka Lakpura</a>. All rights reserved.
        </motion.p>
      </div>

      {/* Floating SVG Shapes for Extra Flair */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
          <circle cx="50" cy="50" r="40" fill="#4A5568" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
          <circle cx="50" cy="50" r="40" fill="#4A5568" />
        </svg>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          className="wave-animation"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            fill="#2D3748"
            d="M0,256L30,240C60,224,120,192,180,165.3C240,139,300,117,360,117.3C420,117,480,139,540,165.3C600,192,660,224,720,240C780,256,840,256,900,245.3C960,235,1020,213,1080,181.3C1140,149,1200,107,1260,117.3C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            style={{ animation: "wave 10s ease-in-out infinite" }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
