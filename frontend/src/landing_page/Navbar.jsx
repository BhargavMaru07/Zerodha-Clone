import React from "react";
import {Link}  from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg border-bottom pb-3"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="images/logo.svg" style={{ width: "25%" }} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/product" class="nav-link active" aria-disabled="true">
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="pricing" class="nav-link  active" aria-disabled="true">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="support" class="nav-link  active" aria-disabled="true">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
