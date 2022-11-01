/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const router = useLocation();
  console.log("LOCATION", router.pathname);
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav
          id="sticky_navbar"
          className="navbar navbar-expand-lg navbar-light sticky_navbar"
        >
          <div className="container box_1620">
            <Link className="navbar-brand logo_h brand-name" to="/">
              AlternativeUI
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li
                  className={`${
                    router.pathname === "/" ? "nav-item active" : "nav-item"
                  }`}
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/portfolio"
                      ? "nav-item active"
                      : "nav-item"
                  }`}
                >
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>

                <li
                  className={`${
                    router.pathname === "/services"
                      ? "nav-item active submenu dropdown"
                      : "nav-item submenu dropdown"
                  }`}
                >
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown_nav-link"
                        to="/services/frontend"
                      >
                        Frontend Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown_nav-link"
                        to="/services/design"
                      >
                        UI/UX Designs
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${
                    router.pathname === "/contact" ? "nav-item active" : "nav-item"
                  }`}>
                  <Link className="nav-link" to="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="navbar-right">
                <li className="nav-item">
                  <button className="button button-header bg">Sign up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
