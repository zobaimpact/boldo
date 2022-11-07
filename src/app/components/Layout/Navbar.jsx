/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import brandLogo from '../../assets/icons/logo.svg';

const Navbar = () => {
  const router = useLocation();
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav
          id="sticky_navbar"
          className="navbar navbar-expand-lg navbar-light sticky_navbar"
        >
          <div className="container box_1620">
            <Link className="navbar-brand logo_h brand-name" to="/">
              <img src={brandLogo} alt='brand logo'/>
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
                    router.pathname === "/portfolio"
                      ? "nav-item active"
                      : "nav-item"
                  }`}
                >
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/services"
                      ? "nav-item active"
                      : "nav-item"
                  }`}
                >
                  <Link className="nav-link" to="/products">
                    Services
                  </Link>
                </li>

                <li
                  className={`${
                    router.pathname === "/contact"
                      ? "nav-item active"
                      : "nav-item"
                  }`}
                >
                  <Link className="nav-link" to="/about-us">
                    About
                  </Link>
                </li>
              </ul>
              <ul className="navbar-right">
                <li className="nav-item">
                  <button className="button button-header bg">Login</button>
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
