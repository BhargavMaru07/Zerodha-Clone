import React from 'react'

const Hero = () => {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-5 p-3">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-2 fs-5" style={{marginBottom:"70px"}}>
          Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a>
        </p>
      </div>
    </div>
  );
}

export default Hero