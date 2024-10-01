import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './assets/laoding.json'; 

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
     
          className="w-62 h-62 md:w-48 md:h-48"
        />
        <h2 className="mt-4 text-xl font-bold text-white animate-bounce">
          Loading, please wait...
        </h2>
     
      </div>
    </div>
  );
};

export default LoadingScreen;
