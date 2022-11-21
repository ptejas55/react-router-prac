import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Popluar from './Popluar';
import TopRated from './TopRated';
import Upcoming from './Upcoming';

export default function App() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="TopRated">TopRated</a>
      <a href="Upcomimg"> Upcoming</a>
      <Router>
        <Routes>
          <Route path="/" element={<Popluar />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
