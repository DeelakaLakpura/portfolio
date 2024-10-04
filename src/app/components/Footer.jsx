"use client";
import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 relative overflow-hidden">
      {/* SVG Abstract Background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1440 320" className="w-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4B5563", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#6B7280", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" d="M0,320L1440,128L1440,0L0,0Z" />
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-4 animate-pulse">DEELAKA LAKPURA</h2>
          <p className="text-gray-400 mb-6">
            I'm a Mobile App Developer and UI/UX Designer. Passionate about creating beautiful and functional mobile applications.
          </p>
         
        </motion.div>

        {/* Additional Section: Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Mobile App Development</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>Web Development</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>UI/UX Design</motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>API Development</motion.li>
          </ul>
        </motion.div>

        {/* Section: Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {["facebook", "github", "linkedin"].map((icon) => (
              <motion.a
                key={icon}
                href={`https://www.${icon}.com/deelaka.lakpura`}
                className="text-gray-400 hover:text-green-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className={`fab fa-${icon} fa-lg`}></i>
              </motion.a>
              
            ))}
          </div>
        </motion.div>
      
      </div>

      {/* Additional Section: Contact */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Get in Touch</h3>
        <p className="text-gray-400 mb-6">Feel free to reach out for collaborations or just a friendly chat!</p>
        <motion.a
          href="mailto:deelaka@example.com"
          className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
      Email Me 
        </motion.a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 relative z-10">
        <motion.p
          animate={{ y: [0, -10, 0] }}
          transition={{ loop: Infinity, duration: 2 }}
        >
          &copy; {currentYear} <a href="https://deelakalakpura.netlify.app/">Deelaka Lakpura.</a> All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
