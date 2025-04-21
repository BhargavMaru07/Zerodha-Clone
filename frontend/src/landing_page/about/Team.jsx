import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row">
        <div className="col-5 text-center">
          <img
            src="images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "55%" }}
            alt="nithinKamath image"
          />
          <h5 className="mt-4 text-muted">Nithin Kamath</h5>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col pt-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team