import React, { useState, useEffect, useContext } from "react";
import Form from "./Form";
import "./AllForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const UserInput = () => {
  const [isValid, setValid] = useState(false);
  const navigate = useNavigate();
  const [dateOfBirth, setDate] = useState();
  const [gender, setGender] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  const {name, email, mobileNo, password} = values
  const valuesData = {name, email, mobileNo, password,gender, dateOfBirth}
  const inputs = [
    {
      id: 1,
      name: "name",
      placeholder: "Name",
      type: "text",
      value: values.name,
      required: true,
      errMsg:
        "All characters must be letters. There should be at least 3 characters ",
      pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`,
    },
    {
      id: 2,
      name: "email",
      placeholder: "E-mail",
      type: "email",
      value: values.email,
      required: true,
      errMsg: "Must be a valid e-mail",
      pattern: `^\S+@\S+$`,
    },
    {
      id: 3,
      name: "mobileNo",
      placeholder: "Phone Number",
      type: "tel",
      value: values.mobileNo,
      required: true,
      errMsg: "Must be a valid phone number",
      pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      value: values.password,
      required: true,
      errMsg:
        "There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters",
      pattern:`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
    },
    {
      id: 5,
      name: "password",
      placeholder: "Confirm Password",
      type: "password",
      required: true,
      errMsg: "Must match the password",
      pattern: values.password,
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (event) => {
    let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'You have been sent a verification email, click on the link to verify.',
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('Verification text sweet alert')
  }
})
    event.preventDefault();
    console.log(valuesData)

    try {
      event.preventDefault();
      const response = await axios.post(
        "https://health360-h4ws.onrender.com/api/usersignUp",
        valuesData
      );
      console.log(response);
      // response.status === 201 ?
      navigate('/log in')
      login_alert()
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    return inputs.length;
  };

  // const receivedValues =(e)=>{
  //   console.log(values)
  //   handleSubmit();
  // }
  return (
    <div className="log-apps">
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        {inputs.map((i) => (
          <Form
            key={i.id}
            {...i}
            handleChange={handleChange}
            value={values[i.name]}
          />
        ))}
        <div className="custom-select">
          <select onChange={(e)=>{ setGender(e.target.value)}}>
            <option value="">Select a Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        {/* <select onChange={(e)=>{ setGender(e.target.value)}}>
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select> */}
        <label></label>
        <input
          onChange={(e) => setDate(e.target.value)}
          className="date"
          type="date"
          id="birthday"
          name="birthday"
        />
        <div className="foot">
          <div className="check">
            <input type="checkbox" name="terms" id="terms" />
            <label className="label">
              I have read and agreed to the{" "}
              <b className="b"> Terms and conditions</b>
            </label>
          </div>
          <div>
            <button className="back-button" onClick={() => navigate("/choice")}>
              Go Back
            </button>
            <button className="button" type="submit" disabled={!validate()}>
              CONTINUE
            </button>
          </div>
          <p className="use-p">
            Already have an account?{" "}
            <b className="b" onClick={() => navigate("/User Login")}>
              {" "}
              Log In.
            </b>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
