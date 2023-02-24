import React from "react";
import { GiClockwork } from "react-icons/gi";
import { CgShapeZigzag } from "react-icons/cg";
import { GiTrophyCup } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import "./Whys.css";



const Whys = () => {
  return (
    
<div className="why">
<div className="why-wrap">
  <div>
    <div className="why-hold">
      <h1 className="why-h1">
        Why use <br /> Health360
      </h1>
      <CgShapeZigzag  color="#F8D33B" fontSize={25} />
      <p className="why-p">
        The Health360 platform <br /> makes it possible for anyone with{" "}
        <br /> a smartphone or tablet to receive <br /> quality and
        affordable health <br /> consultation.
      </p>
    </div>
  </div>
  <div className="why-hold">
    <GiTrophyCup color="#006edc" fontSize={55} />
    <h1 className="why-h1">
      Quality <br /> Healthcare
      <br /> Services
    </h1>
    <br />
    <CgShapeZigzag color="#F8D33B" fontSize={25} />
    <br />
    <p className="why-p">
      With a wide range of <br /> healthcare services to <br /> choose
      from, you can <br /> always find what you <br /> need.
    </p>
  </div>

  <div className="why-hold">
    <FaAward color="#006edc" fontSize={55} />
    <h1 className="why-h1">
      High User <br /> Satisfaction
    </h1>
    <br />
    <CgShapeZigzag color="#F8D33B" fontSize={25} />
    <br />
    <p className="why-p">
      We take pride in <br /> ensuring all services <br /> rendered are
      done to <br /> perfection
    </p>
  </div>

  <div className="why-hold">
    <GiClockwork color="#006edc" fontSize={55} />
    <h1 className="why-h1">
      Round the <br /> clock <br /> availability
    </h1>
    <br />
    <CgShapeZigzag  color="#F8D33B" fontSize={25} />
    <br />
    <p className="why-p">
      With doctors from <br /> different countries, <br /> we ensure we
      always <br /> have someone available <br /> for you
    </p>
  </div>
</div>
</div>
    // <div className="whys">
    //   <div className="whys-wrap">
    //     <div className="whys-img-wrap">
    //       <img className="whys-img" src="/Group 28.png" />
    //     </div>
    //     <div className=" whys-text-wrap">
    //       <div>
    //         <h5 className="whys-head-text">Why simple is better</h5>
    //         <h1 className="whys-head-h1">Smart and affordable</h1>
    //       </div>
    //       <div className="whys-text">
    //           <div className="whys-text-icon">
    //             <GiClockwork fontSize={30} color="#9EBCEA"/>
    //           </div>
    //           <div className="whys-head-text-wrap">
    //             <h4 className="whys-head-text">Round the clock availability</h4>
    //             <p className="whys-head-p">
    //               With doctors from different countries,
    //                we ensure we always have someone available
    //                for you.
    //             </p>
    //           </div>
    //       </div>

    //       <div className="whys-text">
    //           <div className="whys-text-icon">
    //             <MdAttachMoney fontSize={30} color="#9EBCEA"/>
    //           </div>
    //           <div className="whys-head-text-wrap">
    //             <h4 className="whys-head-text">A price that doesn't hurt</h4>
    //             <p className="whys-head-p">
    //               Quality services for pocket friendly prices just for you!
    //               And beginners discounts.
    //             </p>
    //           </div>
    //       </div>

    //       <div className="whys-text">
    //           <div className="whys-text-icon">
    //             <BiConversation fontSize={30} color="#9EBCEA"/>
    //           </div>
    //           <div className="whys-head-text-wrap">
    //             <h4 className="whys-head-text">Communication is key</h4>
    //             <p className="whys-head-p">
    //               Different ways to communicate with your doctors,
    //              and end-to-end encryption of your conversations.
    //             </p>
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Whys;

