import React, { useState, useRef, useReducer, useEffect } from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { CiFolderOn } from 'react-icons/ci'
import { useSelector } from "react-redux";
import { AiFillHome, AiOutlineMessage, AiOutlineSetting, AiOutlinePhone } from "react-icons/ai";
import { BiUserCircle, BiBell } from "react-icons/bi";
// import SideBar from "./SideBar";
import axios from "axios";
import UserSide from "./UserSide";



const Appointment = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [app, setApp] = useState([])
  const user = useSelector((state) => state.commerce.users[0]?.data.data)

  const handleToggle = () => {
    setToggle(!toggle);
    setIsOpen(!isOpen);
  };
  const Justify = (
    <FiAlignJustify fontSize={25} color="#1B75BC" onClick={handleToggle} />
  );
  const FaTime = (
    <div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
    </div>
  );

  const activeColorObject = {
    color: "#1B75BC",
    fontWeight: 700,
  };

  const colorObject = {
    color: "grey",
  };

  const getApp = async () => {
    try {
      const res = await axios.get(`https://health360-h4ws.onrender.com/api/${user._id}/myappointment`)
      console.log(res.data.data)
      setApp(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getApp()
    // console.log(user)
  }, [])

  return (
    <div className="Appointment">
      <div className="Burger">{toggle ? Justify : FaTime}</div>
      {isOpen && (
        <div className="siding">
          <div className="side-head">
            <h4 onClick={() => navigate("/dashboard")}>Dashboard</h4>
            <h2>Albert Weed</h2>
          </div>
          <div className="dash-txt">
            <div className="p-wrap" onClick={() => navigate("/")}>
              <AiFillHome color="grey" fontSize={20} />{" "}
              <p className="dash-p"> Home</p>
            </div>
            <br />
            <div className="p-wrap" onClick={() => navigate('/User Profile')}>
              <BiUserCircle color="grey" fontSize={20} />
              <p className="dash-p"> Your Profile</p>
            </div>
            <br />
            <div className="p-wrap" onClick={() => navigate("/appointment")}>
              <BsJournalBookmarkFill color="grey" fontSize={18} />
              <p className="dash-p"> Appointments and Schedule</p>
            </div>
            <br />
            <div className="p-wrap">
              <BiBell color="grey" fontSize={20} />{" "}
              <p className="dash-p"> Notifications</p>
            </div>
            <br />
            <div className="p-wrap">
              <AiOutlineMessage color="grey" fontSize={20} />{" "}
              <p className="dash-p"> Messages</p>
            </div>
            <br />
            <div className="p-wrap">
              <AiOutlineSetting color="grey" fontSize={20} />{" "}
              <p className="dash-p"> Settings</p>
            </div>
          </div>
        </div>
      )}
      <UserSide />
      <div>
        <div className="Todays">
          <h3 className="user-dash-h3"> Today's Appointments</h3>
          <div className="user-dash-wrap-lower-img-wrap">
            <img
              className="user-dash-wrap-lower-img"
              src="/Ellipse 58.png"
            />
            <div className="user-dash-wrap-lower-text">
              <div className="user-dash-wrap-lower-text-upper">
                <h4>Doc Bessie Alex</h4>
                <p>2235 Avondale Ave Pasadena</p>
                <p>Oklahoma 83900</p>
              </div>
            </div>
          </div>

          {app.map((i) => (
            <div>
              <div className="user-dash-wrap-lower-text-upper-low-wrap">
                <div className="user-dash-wrap-lower-text-upper-low">
                  <h5 className="user-lower-h">D.O.B</h5>
                  <p>26th February 1994</p>
                </div>
                <div className="user-dash-wrap-lower-text-upper-low">
                  <h5 className="user-lower-h">Sex</h5>
                  <p>Female</p>
                </div>
                <div className="user-dash-wrap-lower-text-upper-low">
                  <h5 className="user-lower-h">Weight</h5>
                  <p>58kg</p>
                </div>
              </div>

              <div className="user-dash-wrap-lower-text-upper-low-wrap">
                <div className="user-dash-wrap-lower-text-upper-low">
                  <h5 className="user-lower-h">Height</h5>
                  <p>162cm</p>
                </div>
                <div className="user-dash-wrap-lower-text-upper-low">
                  <h5 className="user-lower-h">Case</h5>
                  <p>Headaches</p>
                </div>
                <div className="user-dash-wrap-lower-text-upper-low">
                  <h5 className="user-lower-h">Method</h5>
                  <p>Chat</p>
                </div>
              </div>
              <div className="user-dash-butt">
                <button className="numb-butt">
                  {" "}
                  <AiOutlinePhone fontSize={16} /> (234) 555-0212
                </button>
                <button className="doc-butt">
                  {" "}
                  {/* <CiFolderOn fontSize={16} /> Documents{" "} */}
                </button>
              </div>
            </div>
          ))}



        </div>
      </div>
    </div>
  );
};

export default Appointment;
