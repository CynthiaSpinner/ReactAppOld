import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import SingleFilmPage from './pages/SingleFilmPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/film/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
