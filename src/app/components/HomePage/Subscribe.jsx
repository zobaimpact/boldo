/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Subscribe = () => {
  return (
    <section className=" container subcribe-area">
      <div className="illustration"></div>
      <div className="subcribe-text-wrapper">
        <>
          <h3>An enterprise template to ramp up your company website</h3>
          <form className="subcription_form mt-4">
            <input type="email" placeholder="Your email address" className="email-input sans-font" required />
            <button type="submit" className="btn submit-btn sans-font">
              Start now
            </button>
          </form>
        </>
      </div>
    </section>
  );
};

export default Subscribe;
