import React from "react";

const FeatureSection = () => {
  return (
    <section className="section-margin">
      <div className="container">
        <div className="section-intro pb-85px text-center">
          <h4 className="section-intro__title">Our numbers</h4>
          <p className="section-intro__subtitle">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-feature  mb-4 mb-lg-0">
                <h3 className="card-feature__title">120m</h3>
                <p className="card-feature__subtitle">Cool feature title</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-feature mb-4 mb-lg-0">
                <h3 className="card-feature__title">10.000</h3>
                <p className="card-feature__subtitle">Cool feature title</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-feature mb-4 mb-lg-0">
               
                <h3 className="card-feature__title">240</h3>
                <p className="card-feature__subtitle">Cool feature title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
