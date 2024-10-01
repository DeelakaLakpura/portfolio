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
                <defs>
                    <circle id="dot" r="3" fill="#4c6ef5">
                        <animate
                            attributeName="r"
                            values="3; 8; 3"
                            dur="0.8s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </defs>
                <g fill="none" strokeWidth="4">
                    <path
                        d="M 50,50
                           m -40, 0
                           a 40,40 0 1,0 80,0
                           a 40,40 0 1,0 -80,0"
                        stroke="#28a745"
                    />
                    <path
                        d="M 50,10
                           A 40,40 0 0,1 90,50
                           A 40,40 0 0,1 50,90
                           A 40,40 0 0,1 10,50
                           A 40,40 0 0,1 50,10"
                        stroke="#ffc107"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            from="0, 251.2"
                            to="251.2, 0"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <circle>
                        <use href="#dot">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="360 50 50"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </use>
                    </circle>
                </g>
            </svg>
            <p className="text-white mt-4 text-xl md:text-2xl animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
