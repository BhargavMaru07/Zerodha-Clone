import React from "react";

const Hero = () => {
  return (
    <div className="container p-2">
      <div className="row py-3 px-5">
        <img src="images/homeHero.png" alt="Home page image" />
      </div>
      <div className="row text-center pt-1 mb-5">
        <div>
          <h1>Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>
        <div>
          <button className="btn btn-primary fs-5 py-2 px-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
