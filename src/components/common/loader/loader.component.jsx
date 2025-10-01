// imports react and loader styles
import React from 'react';
import '../../../styles/loader.css';

// reusable loading spinner component with customizable size
function Loader({ size = 24 }) {
    return (
        <svg
            className="loader"
            xmlns="http://ww.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokelinejoin="round"
        >
            {/* animated circle that creates spinning effect */}
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
}

export default Loader;