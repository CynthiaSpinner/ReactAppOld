import React from 'react';
import './loader.css';

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
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
}

export default Loader;