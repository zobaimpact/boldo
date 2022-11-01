import React from "react";
// import { Link } from "react-router-dom";

const Portfolio = ({ portfolioData }) => {
  return (
    <>
      {portfolioData.length > 0
        ? portfolioData.map((data) => (
            <section className="section-padding--small bg-magnolia">
              <div className="container">
                <div className="row no-gutters align-items-center">
                  <div className="col-md-5 mb-5 mb-md-0 p-4">
                    <div className="about__content">
                      <h2>{data ? data.title : ""}</h2>
                      <p>{data ? data.description : ""}</p>
                      <a
                        className="button button-light"
                        href={"https://octamart.vercel.app"}
                        target="_blank" rel="noreferrer"
                      >
                        Preview Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 mb-5 mb-md-0">
                    <div id="about__img">
                      <div className="about__img-inner">
                        <img
                          className="img-fluid"
                          src={data.image ? data.image : ""}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))
        : ""}
    </>
  );
};

export default Portfolio;
