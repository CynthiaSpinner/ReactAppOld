import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WatchlistProvider } from './contexts/WatchlistContext';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import SingleFilmPage from './pages/SingleFilmPage';
import './App.css';

function App() {
  return (
    <WatchlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/film/:id" element={<SingleFilmPage />} />
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
}


export default App;
