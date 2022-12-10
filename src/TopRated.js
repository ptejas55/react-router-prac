import React from 'react';
import { Link } from 'react-router-dom';

function TopRated() {
  return (
    <>
      <h1>Toprated page</h1>
      <Link to="/" className="link">
        Home
      </Link>
      ;
    </>
  );
}
export default TopRated;
