import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FilmsPage from './components/FilmsPage';
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
      </Routes>
    </BrowserRouter>
  );
}


export default App;
