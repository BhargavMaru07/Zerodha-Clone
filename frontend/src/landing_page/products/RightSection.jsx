import React from 'react'

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
  paddingTop,
}) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col" style={{ paddingTop }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col">
          <img src={imageURL} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default RightSection