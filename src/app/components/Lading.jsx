import React from 'react';

// components/Loading.js

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
            <svg
                className="h-32 w-32 lg:h-48 lg:w-48"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="35" fill="none" stroke="#4c6ef5" strokeWidth="6" />
                <g>
                    <circle cx="50" cy="15" r="5" fill="#4c6ef5">
                        <animate
                            attributeName="cy"
                            values="15;50;85;50;15"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cx"
                            values="50;85;50;15;50"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="85" cy="50" r="5" fill="#28a745">
                        <animate
                            attributeName="cy"
                            values="50;85;50;15;50"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cx"
                            values="85;50;15;50;85"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="50" cy="85" r="5" fill="#ffc107">
                        <animate
                            attributeName="cy"
                            values="85;50;15;50;85"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cx"
                            values="50;15;50;85;50"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="15" cy="50" r="5" fill="#ff4757">
                        <animate
                            attributeName="cy"
                            values="50;15;50;85;50"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="cx"
                            values="15;50;85;50;15"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
                <g>
                    <path
                        d="M 50,50
                           m -35, 0
                           a 35,35 0 1,0 70,0
                           a 35,35 0 1,0 -70,0"
                        fill="none"
                        stroke="#28a745"
                        strokeWidth="6"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            from="0, 220"
                            to="220, 0"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </svg>
            <p className="text-white mt-4 text-xl md:text-2xl animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
