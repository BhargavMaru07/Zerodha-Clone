import React from 'react'

const Universe = () => {
  return (
    <div className="container " style={{ marginTop: "90px" }}>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="fs-5 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5" style={{ padding: "0px 90px" }}>
        <div className="col-4 p-3">
          <img
            src="images/zerodhaFundhouse.png"
            style={{ height: "50px", marginBottom: "20px" }}
            alt="image"
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="images/sensibullLogo.svg"
            style={{ height: "50px", marginBottom: "20px" }}
            alt="image"
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="images/tijori.svg"
            alt="image"
            style={{ height: "50px", marginBottom: "20px" }}
          />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mt-5" style={{ padding: "0px 90px" }}>
        <div className="col-4 p-3">
          <img
            src="images/streakLogo.png"
            alt="image"
            style={{ height: "50px", marginBottom: "20px" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="images/smallcaseLogo.png"
            alt="image"
            style={{ height: "50px", marginBottom: "20px" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="images/dittoLogo.png"
            alt="image"
            style={{ height: "50px", marginBottom: "20px" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="my-5 text-center">
        <button className="btn btn-primary fs-5 py-2 px-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe