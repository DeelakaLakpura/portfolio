"use client";
import React from 'react';
// For React animations

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      {/* Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">DEELAKA LAKPURA</h2>
          <p className="text-gray-400">
            Empowering your business with modern and responsive web designs.
          </p>
        </motion.div>
        
        
        
        {/* Section 3: Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-green-400 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/deelaka.lakpura.54/" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://github.com/DeelakaLakpura" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-github fa-lg"></i>
            </a>
          
            <a href="https://www.linkedin.com/in/deelaka-lakpura/" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500">
      <p>&copy; {currentYear} Deelaka Lakpura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
