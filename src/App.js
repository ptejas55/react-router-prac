import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import './style.css';
import Popluar from './Popluar';
import TopRated from './TopRated';
import Upcoming from './Upcoming';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="Popluar" className="link">
          Popluar
        </Link>
        <Link to="TopRated" className="link">
          TopRated
        </Link>
        <Link to="Upcoming" className="link">
          Upcoming
        </Link>
      </nav>

      <Outlet />
    </>
  );
};
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Popluar" element={<Popluar />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
