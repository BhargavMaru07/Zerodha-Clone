import React from 'react'

const Education = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="images/education.svg" alt="education image" />
        </div>
        <div className="col-6 mt-4">
          <h1 className='mb-4 fs-1'>Free and open market education</h1>
          <div className='mb-3'>
            <p className='text-muted mb-4 fs-5'>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className='mb-3'>
            <p className='text-muted mb-4 fs-5'>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education