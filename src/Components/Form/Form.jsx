import React, { useState } from "react";
import "./AllForm.css";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";

const Form = (props) => {
  const [focuses, setFocuses] = useState(false);
  const Focused = () => {
    setFocuses(true);
  };

  const [showPassword, setShowPassword] = useState(false);
  const Visible = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const openEye = (
    <AiOutlineEye fontSize={18} color="black" onClick={handleToggle} />
  );
  const closedEye = (
    <div>
      <RiEyeCloseLine fontSize={18} color="black" onClick={handleToggle} />
    </div>
  );

  return (
    <div className="Forms">
      <input
        type={props.type}
        name={props.name}
        onChange={(e) => {
          props.handleChange(e);
        }}
        required={props.required}
        placeholder={props.placeholder}
        className="inp"
        onFocus={() => props.name === "confirmPassword" && setFocuses(true)}
        focus={focuses.toString()}
        onBlur={Focused}
      />
      {/* onClick={Visible}
            type={showPassword ? "text" : "password"} 
                    {toggle ? openEye : closedEye} */}

      <span className="error-message">{props.errMsg}</span>
    </div>
  );
};

export default Form;
