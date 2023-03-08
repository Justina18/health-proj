import React from "react";
import { useNavigate } from "react-router-dom";
import { RiVipCrown2Line } from "react-icons/ri";
import "./Prem.css";

const Prem = () => {
  const navigate = useNavigate();
  const payment = () => {
    let key = `key${Math.random()}`
    window.Korapay.initialize({
      key: "pk_test_XQyhbERtfEJPqWZLyaWYGv9pptvyYc59W3cZ3UK2",
      reference: key,
      amount: 150,
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com",
      },
      notification_url: "https://example.com/webhook",
    });
  };

  return (
    <div className="prem">
      <div className="prem-head">
        <div className="prem-head-img-holder">
          <img
            className="prem-head-img"
            src="/Premium.png"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <h1 className="prem-h">Premium Plans</h1>

      <div className="prem-wrap">
        <div className="prem-hold">
          <h1 className="prem-h1">Weekly Plans</h1>{" "}
          <RiVipCrown2Line color="#D27245" fontSize={40} />
          <p className="prem-p">
            The Health360 platform gives a 10% {" "}
             discount off every appointment and consultation of the week.
          </p>
          #1500
          <button className="prem-butt" onClick={payment}>
            Subscribe
          </button>
        </div>

        <div className="prem-hold">
          <h1 className="prem-h1">Monthly Plan</h1>{" "}
          <RiVipCrown2Line color="#9E9E9E" fontSize={40} />
          <p className="prem-p">
          The Health360 platform gives a 15% {" "}
             discount off every appointment and consultation of the week.
          </p>
          #5000
          <button className="prem-butt" onClick={payment}>
            Subscribe
          </button>
        </div>

        <div className="prem-hold">
          <h1 className="prem-h1">Annual Plan</h1>
          <RiVipCrown2Line color="#FDD13F" fontSize={40} />
          <li className="prem-p">
            Chat rooms are always open
            <br />
            You can make your very own posts
            <br />
            No Ads
            <br />
          <b> AND</b> 
            The Health360 platform gives a 20% {" "}
             discount off every appointment and consultation of the week!!
          </li>
          #50000
          <button className="prem-butt" onClick={payment}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prem;
