import React, { useState, useRef, useReducer } from "react";
import { BsSuitHeartFill, BsJournalBookmarkFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { AiFillHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle, BiBell } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdAttachMoney, MdOutlineCancel } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import "./Dashboard.css";
import UserSide from "./UserSide";

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

  const getResponse = JSON.parse(localStorage.getItem("response"));

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
            <br/>
            <NavLink to = "/profile" className="dash-p">
              {" "}
              <BiUserCircle className="user-dash-icons" fontSize={30} />
            </NavLink>
            <br/>
            <NavLink  to="/appointment"
              className="dash-p"
            >
              {" "}
              <BsJournalBookmarkFill className="user-dash-icons" fontSize={25} />
            </NavLink>
           <br/>
            <NavLink className="dash-p">
              {" "}
              <BiBell className="user-dash-icons" fontSize={25} />
            </NavLink>
            <br/>
            <NavLink className="dash-p">
              {" "}
              <AiOutlineMessage textDecoration={0} className="user-dash-icons" fontSize={25} />
            </NavLink>
             <br/>
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

          {
                getResponse ? 
                <h1>
              Hello  {getResponse.data.data.firstName}!
              <BsSuitHeartFill color="E22727" fontSize={25} />{" "}
            </h1>
                 : 
                (<div>
                  <h1> Hello User! 
                  {/* <BsSuitHeartFill color="E22727" fontSize={25} */}
                   </h1>
                </div>)
              }

            

            <p>
              Welcome to your dashboard. <br /> See a quick summary of your
              transactions below.
            </p>
            <p>Have a nice day and don't forget to take care of your health!</p>
          </div>
        </div>

        <div className="user-dash-wrap-lower-wrapped">
          <div className="user-dash-wrap-lower-wrapped-one">
            <div>
              <b>Next Appointment</b>
            </div>
            <div className="user-dash-wrap-lower">
              <img className="user-dash-wrap-lower-img" src="/Ellipse 56.png" />
              <div className="user-dash-wrap-lower-text">
                <div className="user-dash-wrap-lower-text-upper">
                  <h4>Dr. Mccoy Bert</h4>
                  <p>Dietitian</p>
                </div>
                <div>
                  <p>10:00pm</p>
                </div>
                <div className="this-div">
                  <p>6 February</p>
                  <MdOutlineCancel fontSize={15} color="red" />
                </div>
              </div>
            </div>
          </div>

          <div className="user-dash-wrap-lower-wrapped-two">
            <div className="app-hist">
              <b>Appointment History</b>
            </div>
            <div className="user-dash-wrap-lower-one">
              <img className="user-dash-wrap-lower-img" src="/Ellipse 57.png" />
              <div className="user-dash-wrap-lower-text">
                <div className="user-dash-wrap-lower-text-upper">
                  <h4>Evan Henry</h4>
                  <p>Surgeon</p>
                </div>
                <div>
                  <p>1:00pm -2:30pm</p>
                </div>
                <div>
                  <p>28 February</p>
                </div>
              </div>
            </div>
            
            <div className="user-dash-wrap-lower-one">
              <img className="user-dash-wrap-lower-img" src="/Ellipse 57.png" />
              <div className="user-dash-wrap-lower-text">
                <div className="user-dash-wrap-lower-text-upper">
                  <h4>Evan Henry</h4>
                  <p>Surgeon</p>
                </div>
                <div>
                  <p>1:00pm -2:30pm</p>
                </div>
                <div>
                  <p>28 February</p>
                </div>
              </div>
            </div>

            <div className="user-dash-wrap-lower-one">
              <img className="user-dash-wrap-lower-img" src="/Ellipse 57.png" />
              <div className="user-dash-wrap-lower-text">
                <div className="user-dash-wrap-lower-text-upper">
                  <h4>Evan Henry</h4>
                  <p>Surgeon</p>
                </div>
                <div>
                  <p>1:00pm -2:30pm</p>
                </div>
                <div>
                  <p>28 February</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
