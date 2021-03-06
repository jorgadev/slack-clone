import React from "react";
import error from "../assets/404.png";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div>
        <img src={error} />
        <p>
          This page was built just for practice purposes. You can add and visit{" "}
          <strong>#channels</strong> instead.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
