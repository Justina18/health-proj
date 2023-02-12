import React from "react";
import { useNavigate } from "react-router-dom";
import { RiVipCrown2Line } from "react-icons/ri";
import "./Prem.css";

const Prem = () => {
  const navigate = useNavigate();
  const payment = () => {
    const refVal = "my-ref" + Math.random() * 1000;
    window.Korapay.initialize({
      key: "pk_test_XQyhbERtfEJPqWZLyaWYGv9pptvyYc59W3cZ3UK2",
      reference: `${refVal}`,
      amount: 22000,
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
            The Health360 platform <br /> makes it possible for anyone with{" "}
            <br /> a smartphone or tablet to receive <br /> quality and
            affordable health <br /> consultation.
          </p>
          $150
          <button className="prem-butt" onClick={payment}>
            Subscribe
          </button>
        </div>

        <div className="prem-hold">
          <h1 className="prem-h1">Monthly Plan</h1>{" "}
          <RiVipCrown2Line color="#9E9E9E" fontSize={40} />
          <p className="prem-p">
            The Health360 platform <br /> makes it possible for anyone with{" "}
            <br /> a smartphone or tablet to receive <br /> quality and
            affordable health <br /> consultation.
          </p>
          $500
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
          </li>
          $1500
          <button className="prem-butt" onClick={payment}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prem;
