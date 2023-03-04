import React from "react";
import "./Homed.css";
import { useNavigate } from "react-router-dom";

const Homed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="Home-wrap">
          <div className="clip-wrap">
            <div className="land-img-wrap">
              <img className="land-img animate__fadeInLeft" src="/home.png" />
            </div>

            <div className="clip">
              <a href="https://www.gsk.com">
                <img className="gsk" src="/gsk.png" />
              </a>
              <a href="https://www.emzorpharma.com">
                <img className="emzor" src="/emzor.png" />
              </a>
            </div>
          </div>
          <div className="land-img-two-wrap">
            <img className="land-img-two" src="/land.png" />
          </div>
          <div className="home-text">
            <h1 className="Home-h1">
              All it takes is a <br />
              <b className="home-b"> consultation</b> with a doctor.
            </h1>
            <p className="home-p">
              Top medical experts are prepared to provide feedbacks <br /> and solutions to
              your problems via an application.
            </p>
            <div className="home-buttons">
              <button
                onClick={() => navigate("book")}
                className="home-book-button"
              >
                Book Now
              </button>
              <button
                onClick={() => navigate("premium")}
                className="home-prem-button"
              >
                Go Premium
              </button>
            </div>
            <div className="home-butts">
              <button
                className="home-log-button "
                onClick={() => navigate("/log in")}
              >
                Log In
              </button>
              <button
                className="home-sign-button"
                onClick={() => navigate("/choice")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homed;
