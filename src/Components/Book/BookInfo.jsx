import React, { useState, useEffect } from "react";
import "./Book.css";
import { AiFillHome } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookInfo = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate();

  const getDoctor = async () => {
    console.log("clicked");
    try {
      const res = await axios.get(`https://health360-h4ws.onrender.com/api/doctor/${id}`);
      console.log(res.data.data);
      setItem(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <div className="bookInfo">
      <div className="doc-icon-hold">
        <AiFillHome
          onClick={() => navigate("/")}
          color="white"
          fontSize={30}
          className="doc-icon"
        />
      </div>

      <div className="booking-deets">
        
        <div className="docs-deets-wrap">
          <div className="booking-deets-img-wrap">
            <img className="booking-deets-img" src="/Doc.png" alt="" />
          </div>

          <div className="docs-deets">

            <h1 className="docs-deets-h">{item.name}</h1>

            <div className="about-deets">
              <h3 className="docs-deets-h">About:</h3>
              <p>
                Do aliquip adipisicing culpa voluptate mollit culpa aliqua Lorem
                irure. Mollit sit do proident do exercitation reprehenderit
                cupidatat veniam ex officia incididunt ex enim laboris. Minim
                aliqua ad officia consequat enim qui labore. Aute anim excepteur
                adipisicing elit sunt elit ullamco elit.
              </p>
            </div>
            <div className="about-deets">
              <h4 className="docs-deets-h">Specialty:</h4>
              <p>{item.speciality}</p>
            </div>
            <div className="about-deets">
              <h4 className="docs-deets-h">Location:</h4>
              <p>{item.location}</p>
            </div>
            <button onClick={() => navigate(`/bookInputs/${item._id}/${item.speciality}`)} className="bookingInfoButt">Book Doctor</button>
          </div>
            <button
              onClick={() => navigate("/bookInputs")}
              className="bookingInfoButt"
            >
              Book Doctor
            </button>
          </div>
        </div>
      </div>
  );
};

export default BookInfo;
