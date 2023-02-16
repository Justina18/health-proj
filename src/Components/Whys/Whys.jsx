import React from "react";
import { GiClockwork } from "react-icons/gi";
import "./Whys.css";
import {MdAttachMoney} from 'react-icons/md';
import {BiConversation} from 'react-icons/bi'

const Whys = () => {
  return (
    <div className="whys">
      <div className="whys-wrap">
        <div className="whys-img-wrap">
          <img className="whys-img" src="/Group 28.png" />
        </div>
        <div>
          <div>
            <h5 className="whys-head-text">Why simple is better</h5>
            <h1 className="whys-head-h1">Smart and affordable</h1>
          </div>
          <div className="whys-text">
              <div className="whys-text-icon">
                <GiClockwork fontSize={30} color="#9EBCEA"/>
              </div>
              <div className="whys-head-text-wrap">
                <h4 className="whys-head-text">Round the clock availability</h4>
                <p className="whys-head-p">
                  With doctors from different countries,
                   we ensure we always have someone available
                   for you.
                </p>
              </div>
          </div>

          <div className="whys-text">
              <div className="whys-text-icon">
                <MdAttachMoney fontSize={30} color="#9EBCEA"/>
              </div>
              <div className="whys-head-text-wrap">
                <h4 className="whys-head-text">A price that doesn't hurt</h4>
                <p className="whys-head-p">
                  Quality services for pocket friendly prices just for you!
                  And beginners discounts.
                </p>
              </div>
          </div>

          <div className="whys-text">
              <div className="whys-text-icon">
                <BiConversation fontSize={30} color="#9EBCEA"/>
              </div>
              <div className="whys-head-text-wrap">
                <h4 className="whys-head-text">Communication is key</h4>
                <p className="whys-head-p">
                  Different ways to communicate with your doctors,
                 and end-to-end encryption of your conversations.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whys;
