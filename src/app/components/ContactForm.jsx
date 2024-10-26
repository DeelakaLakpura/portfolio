// src/ContactForm.jsx
import React from 'react';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faMessage } from "react-icons/fa";
import animationData from './contact.json'; // Replace with your Lottie animation
import { motion } from 'framer-motion';

const ContactForm = () => {
  // Animation Variants for Framer Motion
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden lg:flex lg:flex-row-reverse">
        
        {/* Left Section - Lottie Animation */}
        <div className="lg:w-1/2 p-8 flex flex-col items-center justify-center space-y-6">
          <Lottie animationData={animationData} loop className="w-64 h-64 lg:w-80 lg:h-80" />
          <h3 className="text-2xl font-semibold text-white text-center">
            Let’s Build Something Great Together!
          </h3>
        </div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="lg:w-1/2 p-10"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center lg:text-left">
            Get in Touch
          </h2>

          <form className="space-y-6">
            {/* Name Input */}
            <motion.div
              variants={item}
              className="relative flex items-center bg-white/20 rounded-xl p-4 shadow-lg focus-within:ring-2 focus-within:ring-green-500 transition-all"
            >
              <FontAwesomeIcon icon={faUser} className="text-white/80 mr-4" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none text-white placeholder-white/70"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              variants={item}
              className="relative flex items-center bg-white/20 rounded-xl p-4 shadow-lg focus-within:ring-2 focus-within:ring-green-500 transition-all"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-white/80 mr-4" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent focus:outline-none text-white placeholder-white/70"
                required
              />
            </motion.div>

          
            <motion.div
              variants={item}
              className="relative flex items-center bg-white/20 rounded-xl p-4 shadow-lg focus-within:ring-2 focus-within:ring-green-500 transition-all"
            >
              <FontAwesomeIcon icon={faPhone} className="text-white/80 mr-4" />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full bg-transparent focus:outline-none text-white placeholder-white/70"
                required
              />
            </motion.div>

     
            <motion.textarea
              variants={item}
              placeholder="Your Message"
              className="w-full bg-white/20 rounded-xl p-4 shadow-lg focus:outline-none text-white placeholder-white/70 resize-none focus:ring-2 focus:ring-green-500 transition-all"
              rows="5"
              required
            ></motion.textarea>

         
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-xl transition-all"
            >
              <FontAwesomeIcon icon={faMessage} className="mr-2" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
