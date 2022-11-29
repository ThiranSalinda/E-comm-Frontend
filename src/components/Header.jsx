import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          Smart Shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navigate("/cart")}>
                Cart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => navigate("")}>
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
