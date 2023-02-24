import React, { useState, useRef } from "react";
import Form from "./Form";
import axios from "axios";
import "./AllForm.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Forgot = () => {
  const inputRef = useRef("");
  const navigate = useNavigate();

  const forget = () => {
    const Email = { email: inputRef.current.value };
    console.log(Email.email);
    axios.post("https://health360-h4ws.onrender.com/api/forgotpassword", Email)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        navigate("/PasswordReset");
      });
  };
  // const forget = () => {
  //   console.log(valuesData);
  //   axios
  //     .post(
  //       "https://health360-h4ws.onrender.com/api/forgotpassword",
  //       valuesData
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       navigate('/PasswordReset');
  //     });
  // };

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
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You have been sent an email",
              showConfirmButton: false,
              timer: 4000,
            });
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
