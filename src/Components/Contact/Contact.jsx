import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="cont">
       <div className="circle"></div>
     <div className="cont-wrap">

        <div className="cont-lower">
          <div className="cont-lower-img">
            <img className="cont-img" src="/mail.png" />
            <div className="cont-img-text">
              <div>
                <h3>Opening hours</h3>
                <p>All days!</p>
              </div>

              <div>
                <h3>Address</h3>
                <p>161/163 Muyibi Street, Olodi-Apapa,Lagos State.</p>
              </div>
            </div>
          </div>
          <div className="cont-lower-text-wrap">
            <div className="cont-lower-text">
              <h2>Sales</h2>
              <p>
                Let us show you what Health360 can do for you and your business.
                Get in touch with our sales form or email us at{" "}
                <a className="cont-a" href="mailto:techhealth360.com">
                  techhealth360.com
                </a>
                .
              </p>
            </div>
            <div className="cont-lower-text">
              <h2>Media and Press</h2>
              <p>
                For press inquiries, contact us at{" "}
                <a className="cont-a" href="mailto:techhealth360.com">
                  techhealth360.com
                </a>
                .
              </p>
            </div>
            <div className="cont-lower-text">
              <h2>Technical Support</h2>
              <p>
                For any issues with our apps or this website, please use the
                contact / support form get in touch with our sales form or email
                us at{" "}
                <a className="cont-a" href="mailto:techhealth360.com">
                  techhealth360.com
                </a>
                .
              </p>
            </div>
            <div className="cont-lower-text">
              <h2>Follow Us </h2>
              <div className="cont-icons">
                <MdEmail
                  href="mailto:techhealth360.com"
                  fontSize={30}
                  color="#ffffff"
                />
                <AiFillInstagram fontSize={30} color="#ffffff" />
                <AiFillLinkedin fontSize={30} color="#ffffff" />
                <FaFacebook fontSize={30} color="#ffffff" />
                @techhealth360
              </div>
            </div>
          </div>
        </div>
      </div> 
       <div className="circle2"></div>
    </div>
  );
};

export default Contact;
