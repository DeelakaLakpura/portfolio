// TypingAnimation.jsx
"use client";
import { useState, useEffect } from "react";

const TypingAnimation = () => {
  const phrases = [
    "I am a MERN Stack Developer",
    "I love coding with JavaScript",
    "Creating amazing web applications",
    "Creating Advanced mobile applications",

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
  }, [currentIndex, currentPhraseIndex]);

  return (
    <span className="text -2xl lg:text-3xl font-semibold text-green-500">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingAnimation;
