import React, { useState, useRef, useReducer } from "react";
import { BsSuitHeartFill, BsJournalBookmarkFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { AiFillHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle, BiBell } from "react-icons/bi";
import "../Dashboard.css";
import UserSide from "../UserSide";

function reducer(todos, action) {
  switch (action.type) {
    case "Add":
      return [...todos, newTodo(action.payload.name)];
    case "checked":
      return action.payload.Check;
    case "delete":
      return action.payload.Check;
  }
}

function newTodo(inputRef) {
  return { id: Date.now(), todo: inputRef, checkers: false };
}

const Dashboard = () => {
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
  const inputRef = useRef("");
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todo")) || []
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
              <h1>
                Hello {getResponse.data.data.name}!
                <BsSuitHeartFill color="E22727" fontSize={25} />{" "}
              </h1>
            ) : (
              <div>
                <h1>
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
              <h1>Nina Igbani</h1>
              <p>nibani09@gmail.com</p>
              <h5>Appointments</h5>
              <div className="profiled-number">
                <div className="profiled-number-1">
                  <h1>4</h1>
                  <p>Past</p>
                </div>
                <hr className="profiled-hr" />
                <div className="profiled-number-1">
                  <h1>3</h1>
                  <p>Upcoming</p>
                </div>
              </div>
              <button className="edit">Edit</button>
            </div>

            <hr className="divide"/>

            <div className="profiled-down">
              <div className="profiled-down-content">
                <div className="profiled-down-content-1">
                  <h4>Gender</h4>
                  <p>Female</p>
                  <hr />
                </div>
                <div className="profiled-down-content-1">
                  <h4>Birthday</h4>
                  <p>Oct. 25, 1993</p>
                  <hr />
                </div>
              </div>

              <div className="profiled-down-content">
                <div className="profiled-down-content-1">
                  <h4>Phone Number</h4>
                  <p>09161609940</p>
                  <hr />
                </div>
                <div className="profiled-down-content-1">
                  <h4>Location</h4>
                  <p>Lagos</p>
                  <hr />
                </div>
              </div>

              <div className="profiled-down-content">
                <div className="profiled-down-content-1">
                  <h4>Gender</h4>
                  <p>Female</p>
                  <hr />
                </div>
                <div className="profiled-down-content-1">
                  <h4>Birthday</h4>
                  <p>Oct. 25, 1993</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="user-dash-wrap-lower-wrapped">
          <div className="up-menu">
            <p>Upcoming Appointments </p>
            <p>Past Appointments</p>
            <button className="up-menu-button">
              Add Appointment
              <GrAddCircle color="white" />
            </button>
          </div>
          <div className="up-menu-content">
            <hr className="up-menu-content-hr" />
            <div className="up-menu-content-wrap">
              <div className="up-menu-date">
                <h3>01 Jun'20</h3>
                <p>09:00am</p>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p>Case</p>
                <h5>Stomach Aches</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p>Doctor</p>
                <h5>Dr Lucia</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <button>See doctor's profile</button>
              </div>
            </div>

            <div className="up-menu-content-wrap">
              <div className="up-menu-date">
                <h3>01 Jun'20</h3>
                <p>09:00am</p>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p>Case</p>
                <h5>Stomach Aches</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p>Doctor</p>
                <h5>Dr Lucia</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <button>See doctor's profile</button>
              </div>
            </div>

            <div className="up-menu-content-wrap">
              <div className="up-menu-date">
                <h3>01 Jun'20</h3>
                <p>09:00am</p>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p>Case</p>
                <h5>Stomach Aches</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <p>Doctor</p>
                <h5>Dr Lucia</h5>
              </div>
              <hr className="up-menu-hr" />
              <div className="up-menu-date">
                <button>See doctor's profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
