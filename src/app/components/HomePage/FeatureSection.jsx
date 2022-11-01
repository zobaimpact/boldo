import React from "react";

const FeatureSection = () => {
  return (
    <section className="section-margin">
      <div className="container">
        <div className="section-intro pb-85px text-center">
          <h2 className="section-intro__title">
            Your product success is our goal!
          </h2>
          <p className="section-intro__subtitle">
            Partner with the best talent in the market and enjoy great technical
            support, time management, seamless communication and total product
            involvement.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="ti-package"></i>
                </span>
                <h3 className="card-feature__title">UI/UX Designs</h3>
                <p className="card-feature__subtitle">
                  Our designs are user eccentric and business logic oriented!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="ti-mouse-alt"></i>
                </span>
                <h3 className="card-feature__title">Business Solution</h3>
                <p className="card-feature__subtitle">
                  We ensure your solution and ideas is captured in every aspect
                  of our work!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-feature text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-feature__icon">
                  <i className="ti-headphone-alt"></i>
                </span>
                <h3 className="card-feature__title">Customer Support</h3>
                <p className="card-feature__subtitle">
                  our customer comes first and supporting them is our No: 1
                  priority!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;


