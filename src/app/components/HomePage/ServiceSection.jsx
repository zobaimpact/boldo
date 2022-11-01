/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import serviceImage from "../../assets/images/xabout.png.pagespeed.ic.gSl88sjD_w.webp";

const ServiceSection = () => {
  return (
    <section className="section-padding--small bg-magnolia">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-md-5 mb-5 mb-md-0">
            <div className="about__content">
              <h2>We Revolutionalize Software Development!</h2>
              <p>
                From ideation to lauch, we work with you every step of
                the way. We build apps your users would love, and we create the
                perfect solution for clients (You!).
              </p>
              <a className="button button-light" href="#">
                Work With Us Now
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about__img">
              <img className="img-fluid" src={serviceImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
