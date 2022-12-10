import React from 'react';
import { Link } from 'react-router-dom';
function Popluar() {
  return (
    <>
      <h1>Popluar page</h1>
      <Link to="/" className="link">
        Home
      </Link>
      ;
    </>
  );
}

export default Popluar;
