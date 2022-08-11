import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="header bg-white">
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <a className="navbar-brand" href="index.html">
            <span className="fw-bold text-uppercase text-dark">Boutique</span>
          </a>
          <button
            className="navbar-toggler navbar-toggler-end"
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Details">
                  Details
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <div className="nav-link">
                  <i className="fas fa-dolly-flatbed me-1 text-gray"></i>
                  <Link className="" to="/Cart">
                    Cart
                  </Link>
                  <small className="text-gray fw-normal">(2)</small>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="far fa-heart me-1"></i>
                  <small className="text-gray fw-normal"> (0)</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fas fa-user me-1 text-gray fw-normal"></i>Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
