import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import "../User.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import axios from "axios";
const Requests = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.commerce.users[0])
  const [item, setItem] = useState([])

  const getApointment = async () => {
    console.log("clicked");
    console.log(user._id)
    try {
      const res = await axios.get(`https://health360-h4ws.onrender.com/api/viewappointments`);
      // const res = await axios.get(`https://health360-h4ws.onrender.com/api/${user._id}/myappointment`);
      console.log(res);
      setItem(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApointment()
    // console.log(user)
  }, [])

  return (
    <div className="user-dash-wrap-lower-wrapping-upped">
      <SideBar />
      <h3 className="user-dash-h3">Appointments Requests</h3>
      <div className="user-dash-wrap-lower-wrapping">
        {item.map((i) => (
          <div className="user-dash-wrap-lower">
            <img className="user-dash-wrap-lower-img" src="/Ellipse 61.png" />
            <div className="user-dash-wrap-lower-text">
              <div className="user-dash-wrap-lower-text-upper">
                <h4>Beth Mccoy</h4>
                <p>Migraines</p>
                <p>
                  13 March <b>10:00</b>
                </p>
              </div>
              <div>
                <TiTick fontSize={20} color="green" />
                <MdOutlineCancel fontSize={20} color="red" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
