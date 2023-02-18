import React, { useState, useRef } from "react";
import Form from "./Form";
import axios from "axios";
import "./AllForm.css";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const inputRef = useRef("");
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
  });
  const { email } = values;
  const valuesData = { email };

  const inputs = [
    {
      id: 1,
      name: "email",
      placeholder: "E-mail",
      type: "email",
      value: values.email,
      required: true,
      errMsg: "Must be a valid e-mail",
      pattern: `^\S+@\S+$`,
    },
  ];

  const forget = () => {
    console.log(valuesData);
    axios
      .post(
        "https://health360-h4ws.onrender.com/api/forgotpassword",
        valuesData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="log-apps">
      <div className="forget">
        <div className="forget-head-text">
          <h2>Forgot password?</h2>
          <p>No worries, we will send you reset instructions</p>
        </div>
        <input
          type="email"
          className="inp"
          ref={inputRef}
          placeholder="Enter your email..."
        />
        <button
          className="forget-button"
          onClick={() => {
            forget();
          }}
        >
          Reset password
        </button>
        <div
          className="forget-back"
          onClick={() => {
            navigate("/User Login");
          }}
        >
          <p>Back to login</p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
