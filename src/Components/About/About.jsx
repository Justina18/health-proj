import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import { CgShapeZigzag } from "react-icons/cg";
import { GiTrophyCup } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";
import { BsCheck } from "react-icons/bs";
import Footer from "../Foot/Footer";

const About = () => {

  const navigate = useNavigate();

  return (
    <div className="about">
      <div className="abt-head-img-wrap">
      <img
            className="prem-head-img"
            src="/Morest.png"
            onClick={() => navigate("/")}
          />
      </div>
      <h2 className="miss-h1">About Us</h2>
      <div className="about-wrap">
        <div className="abt-text">
          <h2 className="abt-text-h">Health 360</h2>
          <p>
            Health360 is a healthcare solution aimed <br /> at providing all
            round quality healthcare <br /> through an app
          </p>
        </div>
        <div className="abt-img-wrap">
          <img className="abt-img" src="/about1.png" />
        </div>
      </div>
      <div className="mission">
        <div className="mission-wrap">
          <div className="wrap-wrap">
            <div className="abt-head-img-wrap">
              <img className="abt-head-img" src="/Morest.png" />
            </div>
            <h1 className="miss-h1">Our Mission</h1>
            <br />
            <CgShapeZigzag color="#006edc" fontSize={25} />
            <br />
            <p className="miss-h4">
              Health360's mission is to make quality healthcare accessible{" "}
              <br /> to every person that has access to any smart device.
            </p>
          </div>
        </div>
      </div>

      <div className="meaning">
        <div>
          <h1 className="meaning-h1">
            The logo of Health360 signifies for
            <br /> our all round availability. We will always
            <br /> be reaching out for your health!
          </h1>
        </div>
        <div>
          <h4>Our Values</h4>
          <div>
            <p>
              <BsCheck color="#61CE70" /> Quality healthcare delivery.
            </p>
            <p>
              <BsCheck color="#61CE70" /> Affordable healthcare.
            </p>
            <p>
              <BsCheck color="#61CE70" /> Easily accessible healthcare.
            </p>
          </div>
        </div>
      </div>

      <div className="meet">
        <div className="meet-head">
          <div>
            <div className="meet-bounce-holder">
              <h1>Meet Us </h1>
              <div className="meet-bounce"></div>
            </div>
            <p>
              The young brilliant minds that made it their personal <br />
              goal to change the way healthcare is delivered!
            </p>
          </div>
        </div>
        <div className="meet-img-wrap">
          <div className="s">
            <img className="meet-img" src="Isaac.jpeg" />
            <div className="meet-img-text">
            <p>Back-End developer</p>
            <h2>Dev isaac </h2>
            <p>
              Mr. Isaac is an experienced technology <br />
              and back end expert
            </p>
            </div>
          </div>
          <div>
            <img className="meet-img" src="Lucia.jpeg" />
            <div className="meet-img-text">
              <p>Back-End developer</p>
              <h2>Dev Lucia </h2>
              <p>
                Mr. Isaac is an experienced technology <br />
                and back end expert
              </p>
            </div>
          </div>
          <div>
            <img className="meet-img" src="Joshua.jpeg" />
            <div className="meet-img-text">
              <p>Back-End developer</p>
              <h2>Dev Joshua </h2>
              <p>
                Mr. Isaac is an experienced technology <br />
                and back end expert
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
