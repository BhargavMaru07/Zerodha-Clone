import React from "react";

const Hero = () => {
  return (
    <section className="support-hero py-5">
      <div className="container">

        <div
          className="d-flex justify-content-between align-items-center mb-4"
          id="supportWrapper"
        >
          <h3 className="mb-0 fw-normal">Support Portal</h3>
          <a href="#" className="text-decoration-underline">
            Track tickets
          </a>
        </div>

        <div className="row">
          <div className="col-12 col-md-7">
            <h1 className="hero-title mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <div className="position-relative mb-4">
              <input
                type="text"
                className="form-control hero-input"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              />
              <i className="fas fa-search search-icon"></i>
            </div>

            <div className="d-flex flex-wrap gap-3 quick-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className="col-12 col-md-4 offset-md-1 mt-5 mt-md-0">
            <h1 className="hero-title mb-4">Featured</h1>
            <ol className="featured-list ps-3">
              <li>
                <a href="#">Latest Intraday leverages and Square-off timings</a>
              </li>
              <li className="mt-2">
                <a href="#">Rights Entitlements listing in April 2025</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
