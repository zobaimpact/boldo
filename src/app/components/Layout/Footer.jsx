/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="https://octamart.vercel.app/">Octamart</a>
              </li>
              <li>
                <a href="#">React Admin (upcoming)</a>
              </li>
            </ul>
          </div>
        
          <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
             
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        
          <div className="col-xl-4 col-md-8 mb-4 mb-xl-0 single-footer-widget">
            <h4>Newsletter</h4>
            <p>You can trust us. we only send promo offers,</p>
            <div className="form-wrap" id="mc_embed_signup">
              <form
                target="_blank"
                action=""
                className="form-inline"
                novalidate="true"
              >
                <input
                  className="form-control"
                  name="email"
                  placeholder="Your Email Address"
                  onFocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Your Email Address '"
                  required=""
                  type="email"
                />
                <button className="click-btn btn btn-default">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center text-center text-lg-left">
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved
          </p>
          <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
