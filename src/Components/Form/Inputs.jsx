import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./AllForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../../REDUX/Features";
import { AiFillHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi"; 
import axios from "axios";

const Inputs = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [speciality, setSpec] = useState("");
  const [cert, setCert] = useState("");
  const [med, setMed] = useState("");
  const [proof, setProof] = useState("");
  const [gender, setGen] = useState("");
  const [birthDate, setDate] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNo: "",
    location: "",
    password: "",
  });

  const totalInfo = { ...values };

  const FileCert = (e) => {
    const file = e.target.files[0];
    setCert(file);
  };

  const FileMed = (e) => {
    const file = e.target.files[0];
    setMed(file);
  };

  const FileProof = (e) => {
    const file = e.target.files[0];
    setProof(file);
  };
  // useEffect(() => {
  //   console.log(cert);
  //   console.log(med);
  //   console.log(proof);
  // }, [cert, med, proof]);

  const { name, email, mobileNo, password, location } = values;
  const valuesData = { name, email, location, speciality, mobileNo, password, gender, birthDate };
  

  const inputs = [
    {
      id: 1,
      name: "name",
      placeholder: "Name",
      type: "text",
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
      required: true,
      errMsg: "Must be a valid e-mail",
      pattern: `^\S+@\S+$`,
    },
    {
      id: 3,
      name: "mobileNo",
      placeholder: "Phone Number",
      type: "tel",
      required: true,
      errMsg: "Must be a valid phone number",
      pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      required: true,
      errMsg:
        "There must be at least 8 characters. It must have a capital letter, a number, a special character and small letters",
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      required: true,
      errMsg: "Must match the password",
      pattern: values.password,
    },
    {
      id: 6,
      name: "location",
      placeholder: "Location",
      type: "address",
      required: true,
    },
  ];

  const validate = () => {
    return inputs.length;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e)
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();

  //   formData.append("name", values.name);
  //   formData.append("email", values.email);
  //   formData.append("mobileNo", values.mobileNo);
  //   formData.append("birthdate", date);
  //   formData.append("gender", gen);
  //   formData.append("specialty", spec);
  //   formData.append("location", values.location);
  //   formData.append("password", values.password);
  //   formData.append("license", med);
  //   formData.append("proofOfId", proof);
  //   formData.append("certificateUpload", cert);

  //   const config = {
  //     headers: {
  //       "content-Type": "multipart/form-data",
  //     },
  //   };

  //   try {
  //     const response = await axios.post(
  //       "https://health360-h4ws.onrender.com/api/signup",
  //       formData,
  //       config
  //     );
  //     console.log(response);
  //     event.preventDefault();
  //     navigate("/User Login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const receivedValues = (e) => {
  //   e.preventDefault();
  //   // console.log(values);
  //   console.log(totalInfo);
  // };


      const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(valuesData);
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://health360-h4ws.onrender.com/api/signup",
        valuesData
      );
      console.log(response);
      navigate("/User Login");
      login_alert();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="apps">
      <div className="doc-icon-hold">
        <AiFillHome 
        onClick={() => navigate("/")} 
        color="white" 
        fontSize={30}
        className="doc-icon"
        />
      </div>
      <div className="form-wrap">
        <form className="form-wrap" onSubmit={handleSubmit}>
          <h1>Create an account</h1>
          <p>All fields are compulsory*</p>
          {inputs.map((i) => (
            <div key={i.id}>
              <Form
                {...i}
                handleChange={handleChange}
                values={values[i.name]}
                setView={setView}
                view={view}
              />
            </div>
          ))}
          <select className="inp" onChange={(e) => setGen(e.target.value)}>
            <option value="">Select a Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <div className="custom-select">
            <select onChange={(e) => setSpec(e.target.value)}>
              <option value="">Specialty</option>
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
          <input
            onChange={(e) => setDate(e.target.value)}
            className="date"
            type="date"
            id="birthday"
            name="birthday"
          />
          <label className="text-lab">
            <input className="inp-text" type="text" />
            Certificate in Specialization
            <label className="lab-but">
              <input type="file" className="file" onChange={FileCert} /> Choose
              File
            </label>
          </label>

          <label className="text-lab">
            <input className="inp-text" type="text" />
            Nigeria Medical License
            <label className="lab-but">
              <input type="file" className="file" onChange={FileMed} /> Choose
              File
            </label>
          </label>

          <label className="text-lab">
            <input className="inp-text" type="text" />
            Proof of Identity
            <label className="lab-but">
              <input type="file" className="file" onChange={FileProof} /> Choose
              File
            </label>
          </label>
          <div className="foot">
            <div className="check">
              <input
                className="check-box"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label className="label">
                I have read and agreed to the{" "}
                <b className="b"> Terms and conditions</b>
              </label>
            </div>
            <div>
              {/* <button className="back-button" onClick={() => navigate("/choice")}>
              Go Back
            </button> */}
              <button className="button">CREATE ACCOUNT</button>
            </div>
          </div>
        </form>
          <p className="p">
        Already have an account?{" "}
        <b className="b" onClick={() => navigate("/log in")}>
          {" "}
          Log In.
        </b>
      </p>
      </div>
    
    </div>
  );
};

export default Inputs;
