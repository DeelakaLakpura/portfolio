import React from 'react';

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
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4c6ef5"
                    strokeWidth="8"
                    strokeLinecap="round"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        from="0 251.2"
                        to="251.2 0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="#28a745"
                    strokeWidth="6"
                    strokeLinecap="round"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        from="0 188.4"
                        to="188.4 0"
                        dur="1.5s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke="#ffc107"
                    strokeWidth="4"
                    strokeLinecap="round"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        from="0 125.6"
                        to="125.6 0"
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
