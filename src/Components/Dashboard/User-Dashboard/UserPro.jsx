import React, { useEffect, useState } from "react";
import "../User.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import axios from "axios";
const UserPro = () => {
  const navigate = useNavigate();
  const [doc, setDoc] = useState();
  const user = useSelector((state) => state.commerce.users[0]);

  const getDoc = async () => {
    try {
      const res = await axios.get(
        `https://health360-h4ws.onrender.com/api/doctor/${user._id}`
      );
      console.log(res.data.data);
      setDoc(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDoc();
    console.log(user);
  }, []);

  return (
    <div className="UserPro">
      <div className="doc-icon-hold">
        <AiFillHome
          onClick={() => navigate("/")}
          color="white"
          fontSize={30}
          className="doc-icon"
        />
      </div>
      <div className="profiled">
        <div className="profiled-wrap">
          <div className="profiled-up">
            <img src="/doc-pro.png" alt="" />
            <div className="profiled-head-text">
              <h1>Nina Igbani</h1>
              <p>nibani09@gmail.com</p>
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
          </div>

          <hr className="divide" />

          <div className="profiled-down">
            <div className="profiled-down-content">
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
            </div>

            <div className="profiled-down-content">
              <div className="profiled-down-content-1">
                <h4 className="profiled-up-h1">Phone Number</h4>
                <p>09161609940</p>
                <hr />
              </div>
              <div className="profiled-down-content-1">
                <h4 className="profiled-up-h1">Location</h4>
                <p>Lagos</p>
                <hr />
              </div>
            </div>

            <div className="profiled-down-content">
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
            </div>
          </div>
        </div>
        <div className="pro-edit-hold">
          <button className="pro-edit">Save Changes</button>
        </div>
      </div>

      {/* <div className="UserPro-wrap">
        <div className="UserPro-wrap-upper">
          <div className="UserPro-img-wrap">
            <img className="UserPro-img" src="/profiled.png" />
          </div>
          <div className="UserPro-txt-wrap">
            <h2>{doc?.name}</h2>
            <button className="UserPro-doc-butt">
              {" "}
              <CiFolderOn fontSize={25} /> Documents{" "}
            </button>
            <div className="UserPro-icon-wrap">
              {" "}
              <MdLocationOn fontSize={20} color="#006edc" />
            {doc?.location}
            </div>
          </div>
        </div>
        <div className="UserPro-wrap-lower-icon">
          <h3>About </h3> <BsQuestionCircle />
        </div>
        <div className="UserPro-wrap-lower">
          <div className="UserPro-wrap-lower-text-upper">
            <div className="UserPro-wrap-lower-text">
              <h4>Name:</h4>
              <p>{doc?.name}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>Email: </h4>
              <p>{doc?.email}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>Phone:</h4>
              <p>{doc?.mobileNo}</p>
            </div>
          </div>

          <div className="UserPro-wrap-lower-text-lower">
            <div className="UserPro-wrap-lower-text">
              <h4>Gender:</h4>
              <p>{doc?.gender}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>Birthday:</h4>
              <p>{doc?.birthDate}</p>
            </div>

            <div className="UserPro-wrap-lower-text">
              <h4>More Info:</h4>
              <p className="info-inp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div> */}
    </div>
  );
};

export default UserPro;
