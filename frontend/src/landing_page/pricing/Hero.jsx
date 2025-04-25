import React from 'react'

const Hero = () => {
  return (
    <div className="container ">
      <div className="row border-bottom p-5 mt-5 text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investment and flat 20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 my-5 text-center">
        <div className="col">
          <img
            src="images/pricingEquity.svg"
            alt="img"
            style={{ height: "200px", marginBottom: "30px" }}
          />
          <h1 className="fs-3 mb-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img
            src="images/intradayTrades.svg"
            alt="img"
            style={{ height: "200px", marginBottom: "30px" }}
          />
          <h1 className="fs-3 mb-3">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img
            src="images/pricingEquity.svg"
            alt="img"
            style={{ height: "200px", marginBottom: "30px" }}
          />
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero