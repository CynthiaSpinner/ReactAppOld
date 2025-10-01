// imports react and required dependencies for the application entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

// creates a react root using the new react 18 createRoot api
// this replaces the legacy ReactDOM.render method for better performance
// the root element is the div with id="root" in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// renders the app component to the dom using the new root api
// react strict mode enables additional checks and warnings for development
// it helps identify problems early and prepares for future react versions
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// measures and reports web vitals for performance monitoring
// web vitals are key metrics that affect user experience
// if you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
