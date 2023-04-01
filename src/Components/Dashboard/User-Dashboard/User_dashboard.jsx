import React, { useState, useRef, useReducer } from "react";
import { BsSuitHeartFill, BsJournalBookmarkFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiFillHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle, BiBell } from "react-icons/bi";
import "../Dashboard.css";
import UserSide from "../UserSide";


const Dashboard = () => {
  const [item, setItem] = useState([]);
  const handleClick = () => {
    dispatch({ type: "Add", payload: { name: inputRef.current.value } });
  };
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setIsOpen(!isOpen);
  };
  const FiAlignJustif = (
    <FiAlignJustify fontSize={25} color="#fff" onClick={handleToggle} />
  );
  const FaTime = (
    <div>
      <FaTimes fontSize={25} color="#fff" onClick={handleToggle} />
    </div>
  );

  const getResponse = JSON.parse(localStorage.getItem("res"));

  return (
    <div className="hey">
      <div className="user-Burger">{toggle ? FiAlignJustif : FaTime}</div>
      {isOpen && (
        <div className="sides">
          <div className="dash-txt">
            <NavLink to="/" className="dash-p">
              {" "}
              <AiFillHome className="user-dash-icons" fontSize={25} />
            </NavLink>
            <br />
            <NavLink to="/profile" className="dash-p">
              {" "}
              <BiUserCircle className="user-dash-icons" fontSize={30} />
            </NavLink>
            <br />
            <NavLink to="/appointment" className="dash-p">
              {" "}
              <BsJournalBookmarkFill
                className="user-dash-icons"
                fontSize={25}
              />
            </NavLink>
            <br />
            <NavLink className="dash-p">
              {" "}
              <BiBell className="user-dash-icons" fontSize={25} />
            </NavLink>
            <br />
            <NavLink className="dash-p">
              {" "}
              <AiOutlineMessage
                textDecoration={0}
                className="user-dash-icons"
                fontSize={25}
              />
            </NavLink>
            <br />
            <NavLink className="dash-p">
              {" "}
              <AiOutlineSetting className="user-dash-icons" fontSize={25} />
            </NavLink>
          </div>
        </div>
      )}
      <UserSide />

      <div className="duns">
        <div className="hey-wrap">
          <div className="heys">
            {getResponse ? (
              <h1  className="profiled-up-h1">
                Hello {getResponse.data.data.name}!
                <BsSuitHeartFill color="E22727" fontSize={25} />{" "}
              </h1>
            ) : (
              <div>
                <h1 className="profiled-up-h1">
                  {" "}
                  Hello User!
                  {/* <BsSuitHeartFill color="E22727" fontSize={25} */}
                </h1>
              </div>
            )}
            <p>
              Welcome to your dashboard. <br /> See a quick summary of your
              transactions below.
            </p>
            <p>Have a nice day and don't forget to take care of your health!</p>
          </div>
        </div>

        <div className="profiled">
          <div className="profiled-wrap">
            <div className="profiled-up">
              <img src="/doc-pro.png" alt="" />
              <div className="profiled-head-text">
                <h1>{getResponse.data.data.name}</h1>
                <p>{getResponse.data.data.email}</p>
                <h5 className="profiled-up-h1">Appointments</h5>
              </div>
              <div className="profiled-number">
                <div className="profiled-number-1">
                  <h1>5</h1>
                  <p>Past</p>
                </div>
                <hr className="profiled-hr" />
                <div className="profiled-number-1">
                  <h1>2</h1>
                  <p>Upcoming</p>
                </div>
              </div>
              <button className="edit">Edit</button>
            </div>

            <hr className="divide" />

            <div className="profiled-down">
              <div className="profiled-down-content">
                <div className="profiled-down-content-1">
                  <h4 className="profiled-up-h1">Gender</h4>
                  <p>{getResponse.data.data.gender}</p>
                  <hr />
                </div>
                <div className="profiled-down-content-1">
                  <h4 className="profiled-up-h1">Birthday</h4>
                  <p>{getResponse.data.data.dateOfBirth}</p>
                  <hr />
                </div>
              </div>

              <div className="profiled-down-content">
                <div className="profiled-down-content-1">
                  <h4 className="profiled-up-h1">Phone Number</h4>
                  <p>{getResponse.data.data.mobileNo}</p>
                  <hr />
                </div>
                <div className="profiled-down-content-1">
                  <h4 className="profiled-up-h1">Location</h4>
                  <p>{getResponse.data.data.location}</p>
                  <hr />
                </div>
              </div>

              {/* <div className="profiled-down-content">
                <div className="profiled-down-content-1">
                  <h4 className="profiled-up-h1">Gender</h4>
                  <p>Female</p>
                  <hr />
                </div>
                <div className="profiled-down-content-1">
                  <h4 className="profiled-up-h1">Birthday</h4>
                  <p>Oct. 25, 1993</p>
                  <hr />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="user-dash-wrap-lower-wrapped">
          <div className="up-menu">
            <p className="up-menu-p">Upcoming Appointments </p>
            <p className="user-dash-wrap-lower-wrapped-p">Past Appointments</p>
            <button  onClick={() => navigate("book")} className="up-menu-button">
              Add Appointment
              <MdOutlineAddCircleOutline fontSize={20} color='#fff' />
            </button>
          </div>
          <div className="up-menu-content">
            <hr className="up-menu-content-hr" />
            <div className="up-menu-content-wrap">
              <div className="up-menu-date">
                <h3 className="profiled-up-h1">01 Jun'20</h3>
                <p className="user-dash-wrap-lower-wrapped-p">09:00am</p>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p className="user-dash-wrap-lower-wrapped-p">Case</p>
                <h5 className="profiled-up-h1">Stomach Aches</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p className="user-dash-wrap-lower-wrapped-p">Doctor</p>
                <h5 className="profiled-up-h1">Dr Lucia</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <button  className="up-menu-button">See doctor's profile</button>
              </div>
            </div>

            <div className="up-menu-content-wrap">
              <div className="up-menu-date">
                <h3 className="profiled-up-h1">01 Jun'20</h3>
                <p className="user-dash-wrap-lower-wrapped-p">09:00am</p>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p className="user-dash-wrap-lower-wrapped-p">Case</p>
                <h5 className="profiled-up-h1">Stomach Aches</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p className="user-dash-wrap-lower-wrapped-p">Doctor</p>
                <h5 className="profiled-up-h1">Dr Lucia</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <button  className="up-menu-button">See doctor's profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
