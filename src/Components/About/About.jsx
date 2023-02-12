import React from "react";
import "./About.css";
import { CgShapeZigzag } from "react-icons/cg";
import { GiTrophyCup } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";

const About = () => {
  return (
    <div className="about">
      <h1 className="miss-h1">About Us</h1>
      <div className="about-wrap">
        <div className="abt-text">
          <p>
            <b>Health360</b> is a healthcare solution aimed <br /> at providing
            all round quality healthcare <br /> through an app
          </p>
        </div>
        <div className="abt-img-wrap">
          <img className="abt-img" src="/About.jpg" />
        </div>
      </div>
      <div className="mission">
        <div className="mission-wrap">
          <div className="wrap-wrap">
            <div className="mission-img-wrap">
              <img className="mission-img" src="/logo.png" />
            </div>
            <h1 className="miss-h1">Our Mission</h1>
            <br />
            <div className="miss-zig">
              <CgShapeZigzag fontSize={25} />
            </div>
            <br />
            <h4 className="miss-h4">
              Health360's mission is to make quality healthcare accessible{" "}
              <br /> to every person that has access to any smart device.
            </h4>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="why-wrap">
          <div>
            <div className="why-hold">
              <h1 className="why-h1">
                Why use <br /> Health360
              </h1>
              <CgShapeZigzag fontSize={25} />
              <p className="why-p">
                The Health360 platform <br /> makes it possible for anyone with{" "}
                <br /> a smartphone or tablet to receive <br /> quality and
                affordable health <br /> consultation.
              </p>
            </div>
          </div>
          <div className="why-hold">
            <GiTrophyCup color="#FDD13F" fontSize={55} />
            <h1 className="why-h1">
              Quality <br /> Healthcare
              <br /> Services
            </h1>
            <br />
            <CgShapeZigzag fontSize={25} />
            <br />
            <p className="why-p">
              With a wide range of <br /> healthcare services to <br /> choose
              from, you can <br /> always find what you <br /> need.
            </p>
          </div>

          <div className="why-hold">
            <FaAward color="#FDD13F" fontSize={55} />
            <h1 className="why-h1">
              High User <br /> Satisfaction
            </h1>
            <br />
            <CgShapeZigzag fontSize={25} />
            <br />
            <p className="why-p">
              We take pride in <br /> ensuring all services <br /> rendered are
              done to <br /> perfection
            </p>
          </div>

          <div className="why-hold">
            <GiClockwork color="#FDD13F" fontSize={55} />
            <h1 className="why-h1">
              Round the <br /> clock <br /> availability
            </h1>
            <br />
            <CgShapeZigzag fontSize={25} />
            <br />
            <p className="why-p">
              With doctors from <br /> different countries, <br /> we ensure we
              always <br /> have someone available <br /> for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
