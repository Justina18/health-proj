import React from "react";
import { useNavigate } from "react-router-dom";

const LogSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="logSuccess">
      <div className="logSuccess-wrap">
        <div>
          <img className="logSuccess-img" src="/success.png" />
        </div>
        <div className="this">
          <h2 className="logh2">
            You have successfully
            <br />
            <b className="suc">Logged In!</b>
          </h2>
          <button className="button" onClick={() => navigate("/dashboard")}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogSuccess;
