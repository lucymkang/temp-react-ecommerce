import React from "react";
const ErrorRedirect = () => {
  return (
    <div className="section section-center text-center">
      <h2>
        oops, there was an error{" "}
        <span role="img" aria-label="emoji">
          &#128546;
        </span>
      </h2>
      <br />
      <h4>redirecting to Home...</h4>
    </div>
  );
};

export default ErrorRedirect;
