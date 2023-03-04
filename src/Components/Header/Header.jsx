import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clear_userData } from "../../REDUX/Features";
import axios from "axios";
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector((state) => state.commerce.users[0]?.payload.data.data)
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setIsOpen(!isOpen);
  };
  const FiAlignJustif = (
    <FiAlignJustify fontSize={25} color="#006edc" onClick={handleToggle} />
  );
  const FaTime = (
    <div>
      <FaTimes fontSize={25} color="#D9D9D9" onClick={handleToggle} />
    </div>
  );

  const logOut = async () => {
    console.log(user._id)
    try {
      const res = await axios.post(`https://health360-h4ws.onrender.com/api/logout/${user._id}`);
      console.log(res.data);
      res.status === 200 ? dispatch(clear_userData()) : null;
      res.status === 200 ? navigate("/") : null;
    } catch (e) {
      console.log(e)
    }

  };



  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className="Header">
      <div className="Head-wrap">
        <div>
          <img
            onClick={() => navigate("/")}
            className="head-img"
            src="/Morest.png"
          />
        </div>
        {isOpen && (
          <div className="hid-wrap">
            <div className="hid">
              <div className="head-link">
                <p onClick={() => navigate("/")} className="head-link">
                  Home
                </p>
                <hr />
                <p className="head-link" onClick={() => navigate('/about')}>
                  About Us
                </p>
                <hr />
                <p
                  className="head-link"
                  onClick={() => navigate('/contact us')}
                >
                  Contact Us
                </p>
                <hr />
                <p
                  className="head-link"
                  onClick={() => navigate("/user dashboard")}
                >
                  Dashboard
                </p>
                <hr />
                <p className="head-link" onClick={() => navigate("premium")}>
                  Go Premium
                </p>
                <hr />
                <p className="head-link" onClick={() => navigate("/dashboard")}>
                  Main
                </p>
                <hr />
                <p className="head-link" onClick={() => navigate('/doc verify')}>
                  Log Out
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="head-links">
          <h4 onClick={() => navigate("/")} className="head-links">
            Home
          </h4>
          <h4 className="head-links" onClick={() => navigate("/about")}>
            About
          </h4>
          <h4 className="head-links" onClick={() => navigate("/contact us")}>
            Contact Us
          </h4>
        </div>
        <div className="head-buttons">

          {!user ? <> <button className="head-log-button " onClick={() => navigate("/User Login")} >  Log In  </button>
            <button className="head-sign-button" onClick={() => navigate("/choice")} > Sign Up </button> </> :
            <button className="head-sign-button" onClick={() => logOut()} >Log Out  </button>}

        </div>
        <div className="Burger">{toggle ? FiAlignJustif : FaTime}</div>
      </div>
    </div>
  );
};

export default Header;
