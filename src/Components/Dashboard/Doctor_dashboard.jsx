import React from "react";
import SideBar from "./SideBar";
import "./User.css";
import { useNavigate } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdAttachMoney, MdOutlineCancel } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { CiFolderOn } from "react-icons/ci";
import { BsSuitHeartFill } from "react-icons/bs";

const UserDash = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      img: "/Ellipse 56.png",
      name: "Bessie Alex",
      case: "Migraines",
      time: "17:00",
      date: "13 February",
    },
    {
      id: 2,
      img: "/Ellipse 56.png",
      name: "Evan Henry",
      case: "Migraines",
      time: "2:00",
      date: "28 February",
    },
    {
      id: 3,
      img: "/Ellipse 56.png",
      name: "Beth Mccoy",
      case: "Migraines",
      time: "14:00",
      date: "19 February",
    },
    {
      id: 4,
      img: "/Ellipse 56.png",
      name: "Joseph Evan",
      case: "Migraines",
      time: "10:00",
      date: "6 March",
    },
  ];
  return (
    <div className="user-dash">
      <SideBar />
      <div className="user-dash-wrap">
        <div className="user-dash-head">
          <div className="dash-name">
            <h3 className="user-dash-h4">Dashboard</h3>
          <img
            className="prof-head-img"
            src="/Morest.png"
            onClick={() => navigate("/")}
          />
          </div>
          <div className="hey-wrap">
            <div className="heys">
              <h1>
                Hello Doc!
                <BsSuitHeartFill color="E22727" fontSize={25} />{" "}
              </h1>
              <p>
                Welcome to your dashboard. <br /> See a quick summary of your
                transactions below.
              </p>
            </div>
          </div>
          <br />
        </div>
        <div className="user-dash-wrap-upper-wrapper">
          <div className="user-dash-wrap-upper">
            <div>
              <HiOutlineUsers fontSize={40} />
            </div>

            <div>
              <p>Patients</p>
              <h2>132</h2>
            </div>
          </div>

          <div className="user-dash-wrap-upper">
            <div>
              <MdAttachMoney fontSize={40} />
            </div>

            <div>
              <p>Income Made</p>
              <h2>$432</h2>
            </div>
          </div>

          <div className="user-dash-wrap-upper">
            <div>
              <BsFillJournalBookmarkFill fontSize={30} />
            </div>

            <div>
              <p>Appointments</p>
              <h2>132</h2>
            </div>
          </div>
        </div>
        <h3 className="user-dash-h3">Appointments</h3>
        <div className="lower-user-dash-wrap">
          <div className="user-dash-wrap-lower-wrapper">
            <div>
              {cards.map((i) => (
                <div className="user-dash-wrap-lower">
                  <img className="user-dash-wrap-lower-img" src={i.img} />
                  <div className="user-dash-wrap-lower-text">
                    <div className="user-dash-wrap-lower-text-upper">
                      <h4>{i.name}</h4>
                      <p>{i.case}</p>
                    </div>
                    <div>
                      <p>{i.time}</p>
                    </div>
                    <div>
                      <p>{i.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="Today">
              <h3 className="user-dash-h3"> Today's Appointments</h3>
              <div className="user-dash-wrap-lower-img-wrap">
                <img
                  className="user-dash-wrap-lower-img"
                  src="/Ellipse 58.png"
                />
                <div className="user-dash-wrap-lower-text">
                  <div className="user-dash-wrap-lower-text-upper">
                    <h4>Bessie Alex</h4>
                    <p>2235 Avondale Ave Pasadena</p>
                    <p>Oklahoma 83900</p>
                  </div>
                </div>
              </div>
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
                    <CiFolderOn fontSize={16} /> Documents{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
