import React from "react";

const Awards = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="row p-5">
        <div className="col-6">
          <img src="images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-3 my-1">
          <h1>Largest stock broker in india</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivaties</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Groth</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="images/pressLogos.png"
            alt="pressLogos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
