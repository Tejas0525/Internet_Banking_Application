import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  custom-navbar">

      <div className="container-fluid">

        {/* Left side: icon + title */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="me-2" style={{ fontSize: '1.5rem' }}>🏦</span>
          iBank
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right-aligned links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link custom-link" style={{ color: '#000', fontWeight: 'bold' }} to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link" style={{ color: '#000', fontWeight: 'bold' }} to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link" style={{ color: '#000', fontWeight: 'bold' }} to="/contact">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link"  style={{ color: '#000', fontWeight: 'bold' }} to="/signup">Sign Up</Link></li>

            <li className="nav-item"><Link className="nav-link custom-link" style={{ color: '#000', fontWeight: 'bold' }} to="/create-account">Create Account</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
