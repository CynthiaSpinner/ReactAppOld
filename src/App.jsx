// imports react and routing components for single-page application
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WatchlistProvider } from './contexts/WatchlistContext';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import SingleFilmPage from './pages/SingleFilmPage';
import './styles/App.css';

// main app component that serves as the root of the react component tree
// this is a functional component using react hooks instead of class components
function App() {
  return (
    // react context provider wraps entire app to share state globally
    // this allows any component to access watchlist state without prop drilling
    <WatchlistProvider>
      {/* browser router enables client-side routing without page refreshes */}
      {/* this allows navigation between different views while maintaining state */}
      <BrowserRouter>
        <Routes>
          {/* route definitions map url paths to react components */}
          {/* when user visits "/", react renders the HomePage component */}
          <Route path="/" element={<HomePage />} />
          {/* when user visits "/films", react renders the FilmsPage component */}
          <Route path="/films" element={<FilmsPage />} />
          {/* dynamic route with parameter - :id is captured and passed to component */}
          <Route path="/film/:id" element={<SingleFilmPage />} />
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
}

export default App;