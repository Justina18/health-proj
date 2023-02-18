import React, { useState, useContext, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contexts } from "../../Api/Context";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import "./AllForm.css";
import axios from "axios";
import { userData } from "../../REDUX/Features";
import { clear_userData } from "../../REDUX/Features";
import { ThemeProvider } from "../../Api/Context";

const LogIn = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const [err, setErr] = useState("");
  const [herr, setHerr] = useState(false);
  const { verify, login_alert } = useContext(Contexts);

  const user = useSelector((state) => state.Commerce.user);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const valueData = { email, password };

  const inputs = [
    {
      id: 1,
      name: "email",
      placeholder: "E-mail",
      type: "email",
      required: true,
      errMsg: "Must be a valid e-mail",
      pattern: `^\S+@\S+$`,
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
  ];

  const logOut = async () => {
    const res = await axios.post(
      `https://health360-h4ws.onrender.com/api/userlogout/:${user[0]?.data.data._id}`
    );
    console.log(res.data);
    res.status === 200 ? dispatch(clearUser()) : null;
    res.status === 200 ? navigate("/login") : null;
    login_alert();
  };

  const handleLogin = async () => {
    e.preventDefault();
    axios
      .post("https://health360-h4ws.onrender.com/api/doctorlogin", valueData)
      .then(function (res) {
        console.log(res.data);
        res.data.data.email === values.email ? dispatch(userData(res)) : null;
        if (res.data.data.verify === true) {
          res.data.data.email === values.email ? navigate("/log in img") : null
        } else {
          logOut()
        }
      })
      .catch(function (error) {
        console.log(error);
        setErr(error.response.data.message)
      });
    e.preventDefault();
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    setHerr(true)
    setTimeout(() => {
      setHerr(false)
    }, 5000);
  }, [err])

  return (
    <div className="log-apps">
      <div className="logIn-head">

      </div>
      
      <form onSubmit={handleLogin}>
      <h1 className="logIn-head-h1">Welcome Back</h1>
        <p>Login to have access to your account</p>
        {inputs.map((i) => (
          <Form
            key={i.id}
            {...i}
            handleChange={handleChange}
            values={values[i.name]}
          />
        ))}
        <div className="log-foot">
          <button className="button" type="submit">
            Log In
          </button>

          <p className="p">
            Don't have an account?{" "}
            <b onClick={() => navigate("/sign up")} className="b">
              {" "}
              Sign Up.
            </b>
          </p>
          <p className="log-p">
            Forgot password?{" "}
            <b onClick={() => navigate("/forgot")} className="log-b">
              Click here
            </b>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
