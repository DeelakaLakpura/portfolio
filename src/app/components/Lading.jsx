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
                <circle cx="50" cy="50" r="5" fill="#4c6ef5">
                    <animate
                        attributeName="r"
                        from="5"
                        to="20"
                        dur="0.6s"
                        begin="0s"
                        repeatCount="indefinite"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        values="#4c6ef5; #28a745; #4c6ef5"
                        dur="0.6s"
                        begin="0s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="50" cy="50" r="5" fill="#28a745">
                    <animate
                        attributeName="r"
                        from="5"
                        to="20"
                        dur="0.6s"
                        begin="0.3s"
                        repeatCount="indefinite"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        values="#28a745; #ffc107; #28a745"
                        dur="0.6s"
                        begin="0.3s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="50" cy="50" r="5" fill="#ffc107">
                    <animate
                        attributeName="r"
                        from="5"
                        to="20"
                        dur="0.6s"
                        begin="0.6s"
                        repeatCount="indefinite"
                        fill="freeze"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffc107; #4c6ef5; #ffc107"
                        dur="0.6s"
                        begin="0.6s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
            <p className="text-white mt-4 text-xl md:text-2xl animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;
