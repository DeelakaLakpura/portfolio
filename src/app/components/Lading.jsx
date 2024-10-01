import React from 'react'

// components/Loading.js

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
            <svg 
                className="h-32 w-32 lg:h-48 lg:w-48" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4c6ef5">
                            <animate 
                                attributeName="stop-color" 
                                values="#4c6ef5;#28a745;#4c6ef5" 
                                dur="2s" 
                                repeatCount="indefinite" 
                            />
                        </stop>
                        <stop offset="100%" stopColor="#28a745">
                            <animate 
                                attributeName="stop-color" 
                                values="#28a745;#4c6ef5;#28a745" 
                                dur="2s" 
                                repeatCount="indefinite" 
                            />
                        </stop>
                    </linearGradient>
                </defs>

                {/* Larger Circle */}
                <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="8" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="0"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="251.2" 
                        dur="2s" 
                        repeatCount="indefinite" 
                    />
                </circle>

                {/* Smaller Circle */}
                <circle 
                    cx="50" 
                    cy="50" 
                    r="20" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="6" 
                    strokeDasharray="125.6" 
                    strokeDashoffset="0"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="125.6" 
                        dur="1.5s" 
                        repeatCount="indefinite" 
                    />
                </circle>

                {/* Inner Circle */}
                <circle 
                    cx="50" 
                    cy="50" 
                    r="10" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="4" 
                    strokeDasharray="62.8" 
                    strokeDashoffset="0"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="62.8" 
                        dur="1s" 
                        repeatCount="indefinite" 
                    />
                </circle>
            </svg>
            <p className="text-white mt-4 text-xl md:text-2xl animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
