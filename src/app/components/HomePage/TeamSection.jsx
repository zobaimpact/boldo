/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { users, managers } from "../../../data";

const TeamSection = () => {
  return (
    <section className="section-padding--big mt-4 container section-team">
      <div className="magnolia-area-2 mt-4">
        <h3 className="headers-title">Our Team</h3>
        <h2>The people behind the work</h2>
        <p id="magnolia-para-black">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="mt-4 margin-auto">
        <div className="flex-2">
          {users &&
            users.map((user) => (
              <div className="">
                <img
                  src={user.profile}
                  alt="user"
                  width={"250px"}
                  height={"200px"}
                  className="mb-2"
                />
                <h3>{user.name}</h3>
                <p className="paragraph">{user.role}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="row mt-4 margin-auto">
        {managers &&
          managers.map((user) => (
            <div className="col-lg-6 flex mb-4 small-container">
              <img src={user.profile} alt="user"
               width={"200px"}
               height={"100px"}
              />
              <div className="mt-4" style={{}}>
                <h3>{user.name}</h3>
                <p className="paragraph">{user.role}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TeamSection;
