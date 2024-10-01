"use client";
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
 
    window.addEventListener('scroll', toggleVisibility);
    return () => {
   
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-full shadow-lg transition-transform duration-300 transform ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      } hover:scale-110 hover:shadow-xl focus:outline-none animate-bounce`}
      style={{ display: visible ? 'flex' : 'none', width: '60px', height: '60px' }}
    >
      <i className="fas fa-chevron-up fa-lg m-auto"></i>
      <style jsx>{`
        button {
          border: 4px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%; /* Ensures a perfectly round shape */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          display: flex; /* Centering icon */
          align-items: center; /* Centering icon */
          justify-content: center; /* Centering icon */
        }

        button:hover {
          animation: shake 0.5s ease-in-out forwards;
        }

        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </button>
  );
};

export default ScrollToTopButton;
