import React from "react";
import { Outlet, Link } from "react-router-dom";
// import { CardContext } from "../hooks/CartContext";

const Layout = () => {
  // const { cartItems } = useContext(CardContext);

  return (
    <div className="header bg-white">
      <div className="container px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <a className="navbar-brand" href="index.html">
            <span className="fw-bold text-uppercase text-dark">FM HIDALGO</span>
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
                <Link className="nav-link" to="/">
                  Home
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Shop">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Shop">
                  Contacto
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <div className="nav-link">
                  <i className="fas fa-dolly-flatbed me-1 text-gray"></i>
                  <Link className="" to="/Cart">
                    Mi Carrito
                  </Link>
                  <small className="mx-1 text-bold text-muted">
                    {/* ({cartItems}) */}
                  </small>
                </div>
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
