import React from "react";
import error from "../assets/404.png";
import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div>
        <img src={error} />
        <p>
          This page was built just for practice purposes. Try visiting{" "}
          <strong>#channels</strong> instead.
        </p>
      </div>
    </div>
  );
}

export default Error;
