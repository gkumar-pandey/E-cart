import React from "react";
import { errorImg } from "../../Assets";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorpage-container">
      <div className="img-container">
        <img src={errorImg} />
      </div>
      <div className="text">
        <h1>🤕Page Not Found!🤕</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
