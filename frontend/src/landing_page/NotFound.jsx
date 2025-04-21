import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="lead text-muted mb-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-lg btn-outline-primary px-4">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
