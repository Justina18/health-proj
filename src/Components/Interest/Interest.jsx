import React from "react";
import './Interest.css'
import { useNavigate } from "react-router-dom";

const Interest = () => {

    const navigate = useNavigate();

  return (
    <div className="interest">
      <div className="interest-wrap">
        <div className="int-text">
          <h3>We're here to help.</h3>
          <h1>Ready to give us a try?</h1>
          <p>While you don't need insurance to use Health360, it can often bring the cost lower. And alongside our satisfaction guarantee, is our promise that if Health360 can't treat you there's no change.</p>
           <button onClick={() => navigate("/choice")}>Sign Up Now!</button>
        </div>
        <div className="int-img">
            <img src="/heart.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Interest;
