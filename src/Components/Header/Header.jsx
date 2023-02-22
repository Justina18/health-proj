import React, { useState } from "react";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          <div className="hid">
            <div className="head-link">
              <p onClick={() => navigate("/")} className="head-link">
                Home
              </p>
              <hr/>
              <p
                className="head-link"
                onClick={() => navigate("/user dashboard")}
              >
                Dashboard
              </p>
              <hr/>
              <p className="head-link" onClick={() => navigate("premium")}>
                Go Premium
              </p>
              <hr/>
              <p className="head-link" onClick={() => navigate("premium")}>
                Log Out
              </p>
              <hr/>
              <p className="head-link" onClick={() => navigate("/dashboard")}>
                Main
              </p>
              <hr/>
              <p className="head-link" onClick={() => navigate('/Doc Sign')}>
                Main
              </p>
            </div>
          </div>
        )}
        <div className='head-links'>
                <h4  onClick={()=> navigate('/')} className='head-links' >Home</h4>
                <h4 className='head-links' onClick={()=> navigate('/about')}>About</h4>
             </div>
        <div className="head-buttons">
          <button
            className="head-log-button "
            onClick={() => navigate("/User Login")}
          >
            Log In
          </button>
          <button
            className="head-sign-button"
            onClick={() => navigate("/choice")}
          >
            Sign Up
          </button>
        </div>
        <div className="Burger">{toggle ? FiAlignJustif : FaTime}</div>
      </div>
    </div>
  );
};

export default Header;
