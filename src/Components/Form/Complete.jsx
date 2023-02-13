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
  const [spec, setSpec] = useState("");
  const [cert, setCert] = useState("");
  const [med, setMed] = useState("");
  const [proof, setProof] = useState("");
  const [location, setLocation] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const FileCert = (e)=>{
    const file = e.target.files[0];
    setCert(file);
  }
  const FileMed = (e)=>{
    const file = e.target.files[0];
    setMed(file);
  }
  const FileProof = (e)=>{
    const file = e.target.files[0];
    setProof(file);
  }

  const dropdownOptions = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "The Color Blue",
      value: "blue",
    },
  ]

  const inputs = [
    {
      id: 1,
      name: "location",
      placeholder: "Location",
      type: "address",
      required: true,
    },

  ];

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const receivedValues = (e) => {
    e.preventDefault();
    console.log(spec, proof, cert, med);
    // window.location.reload();
  };
  return (
    <div className="apps">
      <form onSubmit={receivedValues}>
        <h2 className="comp-h1">Complete Your Account</h2>
        <div className="custom-select">
          <select onChange={(e)=>setSpec(e.target.value)}>
            <option value="">
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
          <div key={i.id}>
            <Form
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
            <input type="file" className="file" onChange={FileCert}/> Choose File
          </label>
        </label>

        <label className="text-lab">
          <input className="inp-text" type="text" />
          Nigeria Medical License
          <label className="lab-but">
            <input type="file" className="file" onChange={FileMed}/> Choose File
          </label>
        </label>

        <label className="text-lab">
          <input className="inp-text" type="text" />
          Proof of Identity
          <label className="lab-but">
            <input type="file" className="file" onChange={FileProof}/> Choose File
          </label>
        </label>
        <div className="foot">
          <button className="back-button" onClick={() => navigate("/sign up")}>
            Go Back
          </button>
          <button
            className="button"
            type="submit"
            // onClick={() => navigate("/upload")}
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
