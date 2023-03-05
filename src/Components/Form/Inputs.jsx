import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./AllForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../../REDUX/Features";
import { AiFillHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Swal from 'sweetalert2'
import axios from "axios";

const Inputs = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // "name": "DOC DAVIDO",
  //   "email": "davido@gmail.com",
  //     "mobileNo": "08169918225",
  //       "birthDate": "25-08-2023",
  //         "gender": "FEMALE",
  //           "password": "DAVIDO",
  //             "speciality": "Nurse",
  //               "location": "Anyigba"
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNo: "",
    birthDate: "",
    gender: "",
    password: "",
    speciality: "",
    location: ""
  });

  const totalInfo = { ...values };

  // useEffect(() => {
  //   console.log(cert);
  //   console.log(med);
  //   console.log(proof);
  // }, [cert, med, proof]);


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

  const loginAlert = () => {
    let timerInterval
    Swal.fire({
      title: 'You have been sent an email. Please check to verify.',
      timer: 8000,
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
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

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
    console.log(values);
    try {
      event.preventDefault();
      const response = await axios.post("https://health360-h4ws.onrender.com/api/signup",values);
      console.log(response);
      navigate("/User Login");
      loginAlert();
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


          {/* const [, setGen] = useState("");
          const [birthDate, setDate] = useState(""); */}

          <select className="inp" name="gender" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}>
            <option value="">Select a Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>


          <div className="custom-select">
            <select name="speciality" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}>
              <option value="">select a Specialty</option>
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
            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
            className="date"
            type="date"
            id="birthday"
            name="birthDate"
          />



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
          <b className="b" onClick={() => navigate("/User login")}>
            {" "}
            Log In.
          </b>
        </p>
      </div >

    </div >
  );
};

export default Inputs;
