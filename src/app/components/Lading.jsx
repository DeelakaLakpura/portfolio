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
                {/* Rotating Cube */}
                <g>
                    <defs>
                        <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4c6ef5" />
                            <stop offset="50%" stopColor="#28a745" />
                            <stop offset="100%" stopColor="#ff4757" />
                        </linearGradient>
                    </defs>

                    <g>
                        <polygon points="25,15 15,25 25,35 35,25" fill="url(#cubeGradient)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                        <polygon points="75,15 85,25 75,35 65,25" fill="url(#cubeGradient)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 75 25"
                                to="360 75 25"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                        <polygon points="25,75 15,85 25,95 35,85" fill="url(#cubeGradient)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 25 75"
                                to="360 25 75"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                        <polygon points="75,75 85,85 75,95 65,85" fill="url(#cubeGradient)">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 75 75"
                                to="360 75 75"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                    </g>
                </g>

                {/* Pulsating Dots */}
                <g>
                    <circle cx="50" cy="20" r="4" fill="#ffc107">
                        <animate
                            attributeName="r"
                            from="4"
                            to="8"
                            dur="0.5s"
                            begin="0s;dot2.end"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            from="1"
                            to="0.5"
                            dur="0.5s"
                            begin="0s;dot2.end"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="20" cy="50" r="4" fill="#28a745" id="dot2">
                        <animate
                            attributeName="r"
                            from="4"
                            to="8"
                            dur="0.5s"
                            begin="0s;dot1.end"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            from="1"
                            to="0.5"
                            dur="0.5s"
                            begin="0s;dot1.end"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="50" cy="80" r="4" fill="#ff4757">
                        <animate
                            attributeName="r"
                            from="4"
                            to="8"
                            dur="0.5s"
                            begin="0s;dot3.end"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            from="1"
                            to="0.5"
                            dur="0.5s"
                            begin="0s;dot3.end"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="80" cy="50" r="4" fill="#4c6ef5" id="dot3">
                        <animate
                            attributeName="r"
                            from="4"
                            to="8"
                            dur="0.5s"
                            begin="0s;dot4.end"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            from="1"
                            to="0.5"
                            dur="0.5s"
                            begin="0s;dot4.end"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            </svg>
            <p className="text-white mt-4 text-xl md:text-2xl animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
