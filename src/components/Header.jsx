import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Smart Shop
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/cart")}>
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/manage")}>
                Manage Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
