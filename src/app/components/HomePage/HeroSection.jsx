/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import xhero from "../../assets/images/xhero-banner.png.pagespeed.ic.ZCbyoop1Xb.webp";

const HeroSection = () => {
  return (
    <section className="hero-banner mb-30px">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-banner__img">
              <img className="img-fluid" src={xhero} alt="" />
            </div>
          </div>
          <div className="col-lg-5 pt-5">
            <div className="hero-banner__content">
              <h1>Building software has never been this easy</h1>
              <p>
                Get to the market faster with our easy to be customized and
                ready to be deployed templates. Do the marketing of your idea,
                while we handle the complexity of writing the codes.
              </p>
              <a className="button bg" href="#">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
