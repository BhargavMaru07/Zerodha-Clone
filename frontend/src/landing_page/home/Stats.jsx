import React from "react";

const statsArr = [
  {
    heading: "Customer-first always",
    para: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
  },
  {
    heading: "No spam or gimmicks",
    para: ' No gimmicks, spam, "gamification", or annoying push notifications High quality apps that you use at your pace, the way you like.',
  },
  {
    heading: "The Zerodha universe",
    para: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs",
  },
  {
    heading: "Do better with money",
    para: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
  },
];

const Stats = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="mb-4 fs-2">Trust with confidence</h1>
          {statsArr.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="fs-5">{item.heading}</h2>
              <p className="text-muted">{item.para}</p>
            </div>
          ))}
        </div>
        <div className="col-6 p-5">
          <img
            src="images/ecosystem.png"
            alt="ecosytem"
            style={{ width: "95%" }}
          />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row ">
        <img
          src="images/pressLogos.png"
          alt="pressLogos"
          className="text-center"
          style={{ width: "60%", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Stats;
