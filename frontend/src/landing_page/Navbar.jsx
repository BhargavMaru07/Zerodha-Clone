import React from "react";
import {Link,NavLink}  from "react-router-dom"

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
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-primary" : "text-dark"}`
                    }
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-primary" : "text-dark"}`
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-primary" : "text-dark"}`
                    }
                    aria-disabled="true"
                  >
                    Product
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="pricing"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-primary" : "text-dark"}`
                    }
                    aria-disabled="true"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="support"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-primary" : "text-dark"}`
                    }
                    aria-disabled="true"
                  >
                    Support
                  </NavLink>
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
