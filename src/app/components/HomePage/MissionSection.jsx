/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { mission } from "../../../data";

const MissionSection = () => {
  return (
    <section className="section-padding--small bg-magnolia-3 mt-4">
      <div className="container">
        <div className="magnolia-area text-center">
          <h3 className="headers-title">Our Blog</h3>
          <h3 className="header-subtitle">
            Value proposition accelerator product management venture
          </h3>
        </div>
      </div>
      <div className="row mt-4 margin-auto">
        {mission &&
          mission.map((data) => (
            <div className="col-lg-12 flexbox mb-4 ">
              <div>
                <h3 className="bold-text">
                  {data.title && data.title === "progress." ? (
                    <span>
                      We aim for <span style={{color: '#69E6A6'}}>{data.title}</span>
                    </span>
                  ) : (
                    <span>
                      We are <span style={{color: '#69E6A6'}}>{data.title}</span>
                    </span>
                  )}
                </h3>
              </div>
              <div className="mission-text">
                <p className="paragraph text-grey">{data.text}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MissionSection;
