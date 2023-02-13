import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.jsx";
import "./AllForm.css";
import Form from "./Form.jsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";

const Complete = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const inputs = [
    {
      id: 1,
      name: "location",
      placeholder: "Location",
      type: "address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      placeholder: "Password",
      type: "password",
      required: true,
      errMsg:
        "There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters",
      pattern: `^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$`,
    },
    {
      id: 3,
      name: "password",
      placeholder: "Confirm Password",
      type: "password",
      required: true,
      errMsg: "Must match the password",
      pattern: values.password,
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  };

  const receivedValues = (e) => {
    e.preventDefault();
    console.log(values);
    window.location.reload();
  };
  return (
    <div className="apps">
      <form onSubmit={receivedValues}>
        <h1 className="comp-h1">Complete Your Account</h1>
        <div className="custom-select">
          <select>
            <option value="" selected disabled hidden>
              Specialty
            </option>
            <option value="Allergy and immunology">
              Allergy and immunology
            </option>
            <option value="Anesthesiology">Anesthesiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Diagnostic radiology">Diagnostic radiology</option>
            <option value="Emergency medicine">Emergency medicine</option>
            <option value="Family medicine">Family medicine</option>
            <option value="Internal medicine">Internal medicine</option>
            <option value="Medical genetics">Medical genetics</option>
            <option value="Neurology">Neurology</option>
            <option value="Nuclear medicine">Nuclear medicine</option>
            <option value="Obstetrics and gynecology">
              Obstetrics and gynecology
            </option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Pathology">Pathology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Physical medicine and rehabilitation">
              Physical medicine and rehabilitation
            </option>
            <option value="Preventive medicine">Preventive medicine</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Radiation oncology">Radiation oncology</option>
            <option value="Surgery">Surgery</option>
            <option value="Urology">Urology</option>
          </select>
        </div>

        {inputs.map((i) => (
          <div>
            <Form
              key={i.id}
              {...i}
              handleChange={handleChange}
              values={values[i.name]}
              type={
                i.name === "password" && !showPassword ? "password" : "text"
              }
            />

            {inputs.name === "password" && (
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="eye"
              >
                {showPassword ? <RiEyeCloseLine /> : <AiOutlineEye />}
              </div>
            )}
          </div>
        ))}
        <label className="text-lab">
          <input className="inp-text" type="text" />
          Certificate in Specialization
          <label className="lab-but">
            <input type="file" className="file" /> Choose File
          </label>
        </label>

        <label className="text-lab">
          <input className="inp-text" type="text" />
          Nigeria Medical License
          <label className="lab-but">
            <input type="file" className="file" /> Choose File
          </label>
        </label>

        <label className="text-lab">
          <input className="inp-text" type="text" />
          Proof of Identity
          <label className="lab-but">
            <input type="file" className="file" /> Choose File
          </label>
        </label>
        <div className="foot">
          <button className="back-button" onClick={() => navigate("/sign up")}>
            <AiOutlineArrowLeft />
            Go Back
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => navigate("/upload")}
          >
            CREATE ACCOUNT
          </button>

          <p className="p">
            Already have an account?{" "}
            <b className="b" onClick={() => navigate("/log in")}>
              {" "}
              Log In.
            </b>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Complete;
