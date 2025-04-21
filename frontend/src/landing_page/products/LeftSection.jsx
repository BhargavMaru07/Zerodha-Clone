import React from 'react'

const LeftSection = ({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col " style={{ padding: "30px 100px" }}>
          <img src={imageURL} alt="image" />
        </div>
        <div className="col p-5" style={{ padding: "50px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} class="ml-3" style={{ textDecoration: "none" }}>
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              class="ml-3"
              style={{ textDecoration: "none", marginLeft: "30px" }}
            >
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg" alt="image" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="images/appstoreBadge.svg" alt="image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection