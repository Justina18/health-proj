import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import {HiLocationMarker} from 'react-icons/hi';
import {IoLogoTwitter} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs';
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
              <div className="cont-ic">
                <BsTelephoneFill  fontSize={18}
                  color="#4F5D75"/>
                <p>+234 910 3738 364</p>
              </div>

              <div className="cont-ic">
                <HiLocationMarker  fontSize={18}
                  color="#4F5D75"/>
                <p>161/163 Muyibi Street, Olodi-Apapa,<br/>Lagos State.</p>
              </div>
              <div className="cont-ic">
              <MdEmail
                  href="mailto:techhealth360.com"
                  fontSize={18}
                  color="#4F5D75"
                />
                <a className="cont-a" href="mailto:techhealth360.com">
                  Techhealth360.com
                </a>
              </div>  
            </div>
          </div>

          <div className="cont-lower-text-wrap">
            <div className="spin-wrap">
              <h1>Let's Talk</h1>
              <img className="spin" src="/spin.png" />
            </div>
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
                <div className="cont-icons-wrap"><IoLogoTwitter fontSize={30} color="#fff" /></div>
                <div className="cont-icons-wrap1"><AiFillInstagram fontSize={30} color="#fff" /></div>
                <div className="cont-icons-wrap2"><AiFillLinkedin fontSize={30} color="#fff" /></div>
                <div className="cont-icons-wrap3"><GrFacebookOption fontSize={30} color="#fff" /></div>
              </div>
            </div>
          </div>

          <div className="cont-img-text2">
              <div className="cont-ic">
                <BsTelephoneFill  fontSize={18}
                  color="#4F5D75"/>
                <p>+234 910 3738 364</p>
              </div>

              <div className="cont-ic">
                <HiLocationMarker  fontSize={18}
                  color="#4F5D75"/>
                <p>161/163 Muyibi Street, Olodi-Apapa,<br/>Lagos State.</p>
              </div>
              <div className="cont-ic">
              <MdEmail
                  href="mailto:techhealth360.com"
                  fontSize={18}
                  color="#4F5D75"
                />
                <a className="cont-a" href="mailto:techhealth360.com">
                  Techhealth360.com
                </a>
              </div>  
            </div>
        </div>
      </div>
      <div className="circle2"></div>
    </div>
  );
};

export default Contact;
