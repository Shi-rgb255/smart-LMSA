import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // ✅ custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm custom-navbar">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          Smart LMS
        </Link>

        {/* Toggle button (for mobile) */}
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

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Right side buttons */}
          <div className="d-flex">
            <Link to="/login" className="btn btn-light me-2 fw-semibold">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-light fw-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
