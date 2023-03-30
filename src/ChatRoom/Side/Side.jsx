import React from "react";
import "../Apps.css";
import Header from "../Headers/Header";

const Side = () => {
  return (
    <div className="Side">
      <Header />

      <div className="fri-cards">

        <div className="cardss-wrap">
           <div className="cardss">
          <img  className="body-head-img" src="/chat.webp" alt="" />
          <div className="card-text">
            <div className="card-text-up">
              <h3>Mary Law</h3>
              <h5>10:02</h5>
            </div>
            <p>Yes Doc...I haven't been able to have as the...</p>
          </div>
        </div>
        </div>

        <div className="cardss-wrap">
           <div className="cardss">
          <img  className="body-head-img" src="/chat.webp" alt="" />
          <div className="card-text">
            <div className="card-text-up">
              <h3>Mary Law</h3>
              <h5>10:02</h5>
            </div>
            <p>Yes Doc...I haven't been able to have as the...</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Side;
