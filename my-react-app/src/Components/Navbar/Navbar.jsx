import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top  bg-body-tertiary z-3">
        <div className="container ">
          <a className="navbar-brand" href="#">Noxe</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active px-2" to="/">All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2" to="movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2" to="tv">Tv</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2" to="people">People</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
