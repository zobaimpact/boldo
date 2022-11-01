import React from "react";

import { techStack } from "../../api/tech-stack";

const TechStackSection = () => {
  return (
    <section className="section-margin">
      <div className="container">
        <h2 className="section-intro__title text-center">
          Our Technology Expertise includes
        </h2>
        <div className="row">
          {techStack.map((data) => (
            <div className="col">
              <img
                className="img-fluid tech-stack-img"
                src={data.techImage}
                alt=""
              />
              {/* <caption className="section-intro__title text-center">{data.techName}</caption> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
