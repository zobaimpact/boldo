/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import brandLogo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container flex">
        <div style={{ width: "30%" }}>
          <Link className="navbar-brand logo_h  brand-name" to="/">
            <img src={brandLogo} alt="brand logo" />
          </Link>
          <p className="text-left mt-4">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved
          </p>
        </div>
        <div className="flex row" style={{ width: "70%" }}>
          <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
            <h4 style={{ color: "#000000" }}>Landings</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
            <h4 style={{ color: "#000000" }}>Company</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
            <h4 style={{ color: "#000000" }}>Resources</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
